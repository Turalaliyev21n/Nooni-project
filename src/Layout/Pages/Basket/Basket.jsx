import React, { useContext } from 'react';
import styles from "./Basket.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageHeading from '../../Common/PageHeading/PageHeading';
import { Trash } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';
import { BasketContext } from '../../../Context/BasketContext';

export const Basket = () => {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartItems,
    calculateSubtotal,
  } = useContext(BasketContext);

  return (
    <div className={styles.basketWrapper}>
      <Header />
      <main className={styles.basketContainer}>
        <PageHeading title={"Shopping Cart"}></PageHeading>

       { 
       cartItems?.length < 1 ?
               <div className={styles.cartEmpty}>
               <img src="/images/emptyCart.png" alt="Cart Empty" />
               <p>Your cart is currently empty.</p>
               <Link to="/shop">
                 Return to Shop
               </Link>
             </div>
             :
             <div className={styles.basketContact}>
          <div className={styles.basketCardsWrapper}>
            <div className={`${styles.tableRow} ${styles.topRow}`}>
              <div className={`${styles.product} ${styles.cell}`}>
                Product
              </div>
              <div className={`${styles.price} ${styles.cell}`}>
                Price
              </div>
              <div className={`${styles.quantity} ${styles.cell}`}>
                Quantity
              </div>
              <div className={`${styles.subtotal} ${styles.cell}`}>
                Subtotal
              </div>
              <div className={`${styles.delete} ${styles.cell}`}>
                Delete
              </div>


            </div>
            {cartItems?.map((product) => {
              return (
                <div className={`${styles.tableRow} ${styles.bottomRow}`}>
                  <div className={`${styles.product} ${styles.cell}`}>
                    <img src={product.frontImage} alt="Fashion Clothes" />
                    <Link to={`/details/${product?.id}`}>
                      {product.title}
                    </Link>
                  </div>
                  <div className={`${styles.price} ${styles.cell}`}>
                    <b>AZN {product.salePrice?.toFixed(2)}</b>
                  </div>
                  <div className={`${styles.quantity} ${styles.cell}`}>
                    <div className={styles.basketButton}>
                      <div className={styles.controlBtn}
                        onClick={() => decreaseQuantity(product.id)}>
                        -
                      </div>
                      <div className={styles.controlBtn}>
                        {product.count}
                      </div>
                      <div className={styles.controlBtn}
                        onClick={() => increaseQuantity(product.id)}>
                        +
                      </div>
                    </div>

                  </div>
                  <div className={`${styles.subtotal} ${styles.cell}`}>
                    <b>AZN {(product.salePrice * product.count).toFixed(2)}</b>
                  </div>
                  <div className={`${styles.delete} ${styles.cell}`}>
                    <div className={styles.deleteBtn} onClick={() => removeFromCart(product.id)}>
                      <Trash />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.productContactRight}></div>
        </div>

      
      } 

      </main>
      <Footer />
    </div>
  );
};

{/* <div className={styles.productLeftText}>
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

</div> */}
