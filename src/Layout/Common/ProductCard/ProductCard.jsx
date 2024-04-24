import React from 'react'
import styles from "./ProductCard.module.scss";
import { Heart,MagnifyingGlass,GitDiff } from '@phosphor-icons/react/dist/ssr';


const ProductCard = ({product,tallSlide}) => {
  return (
    <div className={styles.productWrapper}>
    <div className={styles.productsContainerBox}>
      <div className= {`${styles.productImage} ${tallSlide ? styles.tallSlide : ""}`}>
        {product.regularPrice && product.quantity > 0 ?
          <div className={`${styles.mark} ${styles.saleMark}`}>
            sale
          </div>
          :
          null
        }
        {
          product.hot && product.quantity > 0 ?
            <div className={`${styles.mark} ${styles.hotMark} ${!product.regularPrice ? styles.defaultMark : null}`}>
              hot
            </div>
            :
            null
        }
        {
          product.quantity < 1 ?
            <div className={`${styles.mark} ${styles.outOfStock}`}>
              sold out
            </div>
            :
            null
        }
        <img src={product.frontImage} alt="Product Image" />
        {
          product.backImage ?
            <img src={product.backImage} className={styles.backImage} alt="Product Image" />
            :
            null
        }
        <div className={styles.add}>
          add to card
        </div>
        <div className={styles.heart}>
          <Heart />
        </div>
        <div className={styles.menu}>
          <div className={`${styles.menuEntity} ${styles.search}`}>
          <MagnifyingGlass />
          </div>
          <div className={`${styles.menuEntity} ${styles.compare}`}>
          <GitDiff />
          </div>
          <div className={`${styles.menuEntity} ${styles.wishList}`}>
          <Heart />
          </div>

        </div>
      </div>
      <div className={styles.productText}>
        <p>{product.title}</p>
        <span>${product.salePrice?.toFixed(2)}
          {product.regularPrice ?
            <p>${product.regularPrice?.toFixed(2)}</p>
            :
            null
          }
        </span>
      </div>
    </div>
  </div>
  )
}

export default ProductCard
