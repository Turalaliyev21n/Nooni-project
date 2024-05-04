import styles from "./ProductCard.module.scss";
import {Heart, MagnifyingGlass, GitDiff} from '@phosphor-icons/react/dist/ssr';
import {Link} from "react-router-dom";
import {BasketContext} from "../../../Context/BasketContext";
import {useContext,useMemo} from "react";
import {WishListContext} from "../../../Context/WishListContext.jsx";



const ProductCard = ({product, tallSlide, listView}) => {

    const {
        addToCart,
    } = useContext(BasketContext);

    const {
        addToWishList,
        wishListItems,
    } = useContext(WishListContext);

    const isProductInWishlist = useMemo(() => {
        return wishListItems.some(item => item.id === product.id);
    }, [wishListItems, product]);

    return (
        <div className={`${styles.productWrapper} ${listView ? styles.listView : ""}`}>
            <div className={styles.productsContainerBox}>
                <div className={`${styles.productImage} ${tallSlide ? styles.tallSlide : ""}`}>
                    {product?.regularPrice && product?.quantity > 0 ?
                        <div className={`${styles.mark} ${styles.saleMark}`}>
                            sale
                        </div>
                        :
                        null
                    }
                    {
                        product?.hot && product.quantity > 0 ?
                            <div
                                className={`${styles.mark} ${styles.hotMark} ${!product.regularPrice ? styles.defaultMark : null}`}>
                                hot
                            </div>
                            :
                            null
                    }
                    {
                        product?.quantity < 1 ?
                            <div className={`${styles.mark} ${styles.outOfStock}`}>
                                sold out
                            </div>
                            :
                            null
                    }
                    <img src={product?.frontImage} alt="Shop Image"/>
                    {
                        product?.backImage ?
                            <img src={product.backImage} className={styles.backImage} alt="Shop Image"/>
                            :
                            null
                    }
                    {
                        !listView ?
                            <div className={styles.add} onClick={() => addToCart(product)}>
                                <a>Add To Cart</a>
                            </div>
                            :
                            null
                    }
                    <div className={styles.heart}>
                        {isProductInWishlist ?
                            <Heart weight="fill"/>
                            :
                            <Heart />
                        }
                    </div>
                    <div className={styles.menu}>
                        <div className={`${styles.menuEntity} ${styles.search}`} onClick={(e) => e.stopPropagation()}>
                            <MagnifyingGlass/>
                        </div>
                        <div className={`${styles.menuEntity} ${styles.compare}`} onClick={(e) => e.stopPropagation()}>
                            <GitDiff/>
                        </div>
                        <div className={`${styles.menuEntity} ${styles.wishList}`}
                             onClick={() => addToWishList(product)}>
                            <Heart/>
                        </div>

                    </div>
                </div>
                <div className={styles.productText}>
                    <Link to={`/details/${product?.id}`}>{product.title}</Link>
                    <span>${product.salePrice?.toFixed(2)}
                        {product.regularPrice ?
                            <p>${product.regularPrice?.toFixed(2)}</p>
                            :
                            null
                        }
          </span>
                    {listView ?
                        <>
                            <h2>Constructed from a durable polyester fabrication, this quilted staple features a hooded
                                neckline, long sleeves with elasticated cuffs. Machine washable at 30 degrees.</h2>
                            <div className={styles.addToCart} onClick={() => addToCart(product)}>
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
