import React, { useState ,useEffect, useCallback} from 'react';
import styles from "./LoginAndRegister.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageHeading from '../../Common/PageHeading/PageHeading';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';

const Register = () => {

    const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongPass, setWrongPass] = useState(false);
    const [viewPassword,setViewPassword] = useState(false);

    const handlePassView = useCallback(()=>{
        setViewPassword(prevState => !prevState);
    },[setViewPassword])

    const [user, setUser] = useState({
        userName: "",
        userEmail: "",
        userPassword: ""
    });

    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    

    const addUser = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/user")
            .then((resp) => resp.json())
            .then((data) => {
                let serverEmail = data.find((userData) => userData.userEmail === user.userEmail);
                if (serverEmail) {
                    setWrongEmail(true);
                    toast.error(`Belə account artıq qeydiyyatdan keçib`, {
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        transition: Bounce,
                    });  


                } else {
                    if (user.userPassword.length >= 6) {
                        fetch("http://localhost:8000/user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(user),
                        })
                            .then(() => {          
                                localStorage.setItem("user", JSON.stringify(user.userEmail));
                                setUser({
                                    userName: "",
                                    userEmail: "",
                                    userPassword: ""
                                });
                                toast.success(`Uğurla qeydiyyatdan keçmisiz`, {
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: false,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                    transition: Bounce,
                                });  
                                navigate("/login")
                                
                            })
                            .catch((error) => console.error("Xeta:", error));
                    } else {
                        toast.error(`Sehv`, {
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                        });  
                        setWrongPass(true);
                    }
                }
            })
            .catch((error) => console.error("Kullanıcıları alma hatası:", error));
    };

    return (
        <>
            <Header />
            <main className={styles.pageWrapper}>
                <div className={styles.pageContent}>
                    <PageHeading title={"Register"} />
                    <div className={styles.formContainer}>
                        <form onSubmit={addUser}>
                            <div className={styles.inputContainer}>
                                <p>Email address <span>*</span></p>
                                <input type="email" required placeholder="Email" onChange={(e) => setUser({ ...user, userEmail: e.target.value })} value={user.userEmail}></input>
                            </div>
                            <div className={styles.inputContainer}>
                                <p>Username</p>
                                <input type="text" placeholder="Usename" onChange={(e) => setUser({ ...user, userName: e.target.value })} value={user.userName}></input>
                            </div>
                            <div className={`${styles.inputContainer}`}>
                                <p>Password <span>*</span></p>
                                <input className={styles.passInput} type="password" required placeholder="Password" onChange={(e) => setUser({ ...user, userPassword: e.target.value })} value={user.userPassword} />
                            </div>
                            <div className={styles.inputContainer}>
                                <p>Confirm password <span>*</span></p>
                                <input type="password" placeholder="Confirm password"></input>
                            </div>
                            <div className={styles.inputContainer}>
                                <p>Phone Number</p>
                                <input type="tel" placeholder="+994XXXXXXX"></input>
                            </div>

                            <button type="submit" className={styles.submitButton}>Register</button>
                            <div className={styles.redirect}>
                                <Link to="/login">Already have an accout? Click Here.</Link>
                            </div>

                            {wrongPass && <p className={styles.errorMessage}>Wrong email or password. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Register;

