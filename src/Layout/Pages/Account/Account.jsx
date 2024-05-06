import React from 'react'
import styles from "./Account.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageHeading from '../../Common/PageHeading/PageHeading';
const Account = () => {
  return (
    <>
     <div className={styles.accountWrapper}>
        <Header/>
      <main>
        <PageHeading title={"my Account"}/>
     <div className={styles.accountCountainer}>
        <div className={styles.accountContact}></div>
     </div>
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default Account
