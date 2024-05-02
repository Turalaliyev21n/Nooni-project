import React from 'react';
import styles from "./AddCart.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageHeading from '../../Common/PageHeading/PageHeading';

const AddCart = () => {
  return (
    <div className={styles.AddWrapper}>
      <Header/>
      <main className={styles.AddContainer}>
      <PageHeading title={"Shopping Cart"}></PageHeading>
     
     <div className={styles.AddContact}>
     <div className={styles.productContactLeft}>
      <div className={styles.productLeftText}>
        <div className={styles.productTextLeft}>
          <h3>Product</h3>
        </div>
        <div className={styles.productTextRight}>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Subtotal</h3>
        </div>
      </div>
      <div className={styles.AddCartTotal}>
        <div className={styles.AddCartImage}>
          
        </div>
        <div className={styles.AddCartTitle}></div>
        <div className={styles.AddCartPrice}></div>
        <div className={styles.AddCartButton}></div>
        <div className={styles.AddCartSubtotal}></div>
        <div ></div>
      </div>
     </div>
     <div className={styles.productContactRight}></div>
     </div>


      </main>
      <Footer/>
    </div>
  );
};

export default AddCart;
