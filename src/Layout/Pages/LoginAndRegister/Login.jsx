import React, { useState,useEffect, useCallback } from 'react';
import styles from "./LoginAndRegister.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageHeading from '../../Common/PageHeading/PageHeading';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import { Eye, EyeSlash } from '@phosphor-icons/react';

const Login = () => {

    
  const [userLogin, setUserLogin] = useState({
    userLoginEmail: "",
    userLoginPassword: ""
  })

  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);
  const [viewPassword,setViewPassword] = useState(false);

  const handlePassView = useCallback(()=>{
      setViewPassword(prevState => !prevState);
  },[setViewPassword])


  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  

  const logIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/user")
      .then((resp) => resp.json())
      .then((users) => {
        let userWithEmail = users.find(
          (userData) =>
            userData.userEmail === userLogin.userLoginEmail &&
            userData.userPassword === userLogin.userLoginPassword
        );
        if (userWithEmail) {
          localStorage.setItem("user", JSON.stringify(userWithEmail.userEmail));
          toast.success(`Login Uğurla başa çatdı`, {
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
        });
          navigate("/home");

        } else {
          setWrongPass(true);
        }
      })
      .catch((error) => console.error("Xeta", error));
  };

  return (
    <>
    <Header />
    <main className={styles.pageWrapper}>
        <div className={styles.pageContent}>
        <PageHeading title={"Login"} />
        <div className={styles.formContainer}>
            <form onSubmit={logIn}>
              <div className={styles.inputContainer}>
                <p>Email address <span>*</span></p>
                <input  type="email"  required placeholder="Email" onChange={(e) => setUserLogin({ ...userLogin, userLoginEmail: e.target.value })} value={userLogin.userLoginEmail}></input>
              </div>
              <div className={styles.inputContainer}>
                <p>Password <span>*</span></p>
                <div className={styles.passInputWrapper}>
                    <div className={styles.viewBtn} onClick={handlePassView}>
                        {viewPassword ? <Eye  /> : <EyeSlash />}
                    </div>
                
                <input  type={viewPassword ? "text" : "password"}  required placeholder="Password" onChange={(e) => setUserLogin({ ...userLogin, userLoginPassword: e.target.value })} value={userLogin.userLoginPassword} />
                </div>
              </div>
              <button type="submit" className={styles.submitButton}>LOG IN</button>

              <div className={styles.redirect}>
                <Link to="/register">Don't have and account? Click Here.</Link>
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

export default Login
