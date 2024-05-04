import React, { useState } from 'react';
import styles from "./LoginRegister.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageHeading from '../../Common/PageHeading/PageHeading';

const LoginRegister = () => {
  
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPassword: ""
  });
  
  const [userLogin,setUserLogin] =useState({
    userLoginName:"",
    userLoginEmail:"",
    userLoginPassword:""
  })

  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);
  
  const addUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/user")
      .then((resp) => resp.json())
      .then((data) => {
        let serverEmail = data.find((data) => data.userEmail === user.userEmail);
        if (serverEmail) {
          setWrongEmail(true);
        } else {
          if (user.userPassword.length > 5) {
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
              })
              .catch((error) => console.error("Error adding user:", error));
          } else {
            setWrongPass(true);
          }
        }
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  const logIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/user")
      .then((resp) => resp.json())
      .then((users) => {
        let userWithEmail = users.find(
          (userInfo) =>
            userInfo.userEmail === user.userEmail &&
            userInfo.userPassword === user.userPassword // Burada userInfo.userPass yerine userInfo.userPassword kullanmalısınız
        );
        if (userWithEmail) {
          setHome(true);
          localStorage.setItem("user", JSON.stringify(userWithEmail.userEmail));
        } else {
          setWrongPass(true);
        }
      });
  };
  

  return (
    <div className={styles.loginWrapper}>
      <Header />
      <main className={styles.loginContainer}>
        <PageHeading title={" My Account"} />
        <div className={styles.loginContact}>
          <div className={styles.loginLeft}>
            <form onSubmit={logIn}>
              <h2>Login</h2>
              <div className={styles.loginUsername}>
                <p>Username or email address *</p>
                <input  type="email"  required placeholder="Email" onChange={(e) => setUserLogin({ ...userLogin, userLoginEmail: e.target.value })} value={userLogin.userLoginEmail}></input>
              </div>
              <div className={styles.loginPassword}>
                <p>Password *</p>
                <input  type="password"  required placeholder="Password" onChange={(e) => setUserLogin({ ...userLogin, userLoginPassword: e.target.value })} value={userLogin.user}></input>
              </div>
              <div className={styles.loginButton}>LOG IN</div>
            </form>
          </div>



          <div className={styles.registerRight}>
            <form onSubmit={addUser}>
              <h2>Register</h2>
              <div className={styles.registerUsername}>
                <p>Username *</p>
                <input type='text' required placeholder="Username" onChange={(e) => setUser({ ...userLogin, userLoginName: e.target.value })} value={user.userName}></input>
              </div>
              <div className={styles.registerEmail}>
                <p>Email address *</p>
                <input type="email" required placeholder="Email" onChange={(e) => setUser({ ...user, userEmail: e.target.value })} value={user.userEmail}></input>
                {wrongEmail && <p className={styles.errorMessage}>Email already exists</p>}
              </div>
              <div className={styles.registerPassword}>
                <p>Password *</p>
                <input type="password" required placeholder="Password" onChange={(e) => setUser({ ...user, userPassword: e.target.value })} value={user.userPassword}></input>
                {wrongPass && <p className={styles.errorMessage}>Password must be at least 6 characters long</p>}
              </div>
              <button type="submit" className={styles.registerButton}>REGISTER</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginRegister;
