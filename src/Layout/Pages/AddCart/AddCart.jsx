import React from 'react';
import styles from "./AddCart.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageHeading from '../../Common/PageHeading/PageHeading';
import {Trash} from "@phosphor-icons/react";

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
          <img src='https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/04/01-450x572.jpg' alt=''></img>
        </div>
        <div className={styles.cartTitle}>
        <div className={styles.AddCartTitle}>
          <p>Classic Zip Front Polar Fleece Jacket</p>
        </div>
        <div className={styles.AddCartPrice}>
          <p>$1,899</p>
        </div>
        <div className={styles.AddCartButton}>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div className={styles.AddCartSubtotal}>
          <p>$5,697</p>
        </div>
        <div className={styles.DeleteCart}>
        <Trash/>
        </div>
        </div>
       
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
