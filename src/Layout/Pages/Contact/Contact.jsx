import React from 'react'
import styles from "./Contact.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  return (
    <>
    <div className= {styles.contactUs}>
      <Header/>
      <main className={styles.contactWrapper}>
        <section className={styles.contactImages}>
            <div className={styles.contactOverlay}>
                <h1>Get in touch with us. Send us a message</h1>
            </div>
        </section>
        <section className={styles.contactInput}>
            <div className={styles.containerContact}>
                <div className={styles.conatinerLeft}></div>
                <div className={styles.containerRight}></div>
            </div>
        </section>
      </main>
      <Footer />
      </div>
    </>
    
  )
}

export default Contact
