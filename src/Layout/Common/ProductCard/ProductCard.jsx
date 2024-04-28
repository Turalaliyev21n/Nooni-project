import styles from "./ProductCard.module.scss";
import { Heart,MagnifyingGlass,GitDiff } from '@phosphor-icons/react/dist/ssr';


const ProductCard = ({product,tallSlide,listView}) => {
  return (
      <div className={`${styles.productWrapper} ${listView ? styles.listView : ""}`}>
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
            <img src={product.frontImage} alt="Shop Image" />
            {
              product.backImage ?
                  <img src={product.backImage} className={styles.backImage} alt="Shop Image" />
                  :
                  null
            }
            {
              !listView ?
                  <div className={styles.add}>
                    add to card
                  </div>
                  :
                  null
            }
            <div className={styles.heart}>
              <Heart/>
            </div>
            <div className={styles.menu}>
              <div className={`${styles.menuEntity} ${styles.search}`}>
                <MagnifyingGlass/>
              </div>
              <div className={`${styles.menuEntity} ${styles.compare}`}>
                <GitDiff/>
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
            {listView ?
                <>
                  <h2>Constructed from a durable polyester fabrication, this quilted staple features a hooded neckline, long sleeves with elasticated cuffs. Machine washable at 30 degrees.</h2>
                  <div className={styles.addToCart}>
                    add to cart
                  </div>
                </>
                :
                null
            }
          </div>
        </div>
      </div>
  )
}

export default ProductCard
