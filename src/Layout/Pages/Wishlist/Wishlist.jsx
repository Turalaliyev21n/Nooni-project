import React from 'react'
import styles from "./Wishlist.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageHeading from '../../Common/PageHeading/PageHeading';
import { Check,Trash } from "@phosphor-icons/react";
const Wishlist = () => {
  return (
    <div className={styles.wishlistWrapper}>
        <Header/>
      <main className={styles.wishlistContainer}>
       <PageHeading title={"wishlist"}/>
       <div className={styles.wishlistCardWrapper}>
        <div className={styles.wishlistContact}>
        <div className={styles.productName}><span>Product name</span></div>
        <div className={styles.productPrice}><span>Unit price</span></div>
        <div className={styles.productStock}><span>Stock status</span></div>
        </div>
        <div className={styles.wishlistContact}>
        <div className={styles.productImages}><img src='https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/04/27-450x572.jpg' alt=''></img></div>
        <div className={styles.productPrice}><span>Azn3707</span></div>
        <div className={styles.productStock}><p><Check size={18}/></p><p>In Stock</p></div>
        <div className={styles.productButton}>
            <button>SELET OPTIONS</button>
        <div className={styles.productDelete}>
        <Trash size={25} />
        </div>
        </div>
        </div>
       </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Wishlist
