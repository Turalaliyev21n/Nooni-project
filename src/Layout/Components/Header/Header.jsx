import styles from "./Header.module.scss";
import { CaretDown, Heart, List, MagnifyingGlass, ShoppingCart, User, X } from "@phosphor-icons/react";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";




const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = useCallback(() => {
        setMenuOpen(prevState => !prevState);
    }, [setMenuOpen]);

    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerContent}>
                <div className={styles.headerTop}>
                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.headerNavigation}>
                        <div className={styles.sideMenu} onClick={handleMenuToggle}>
                            <List />
                        </div>
                        <div className={styles.navigation}>
                            <div className={styles.navEntity}>
                                <p>Shop</p>
                                <CaretDown />
                                <div className={`${styles.navDropDown} ${styles.shopDropDown}`}>
                                    <div className={`${styles.dropDownContent} ${styles.shopDropContent}`}>
                                        <div className={styles.flex1}>
                                            <ul>
                                                <div className={styles.whomen}>Women Clothings</div>
                                                <li>Women</li>
                                                <li>Coats & Jackets</li>
                                                <li>Dresses</li>
                                                <li>Hoodies & Sweatshirts</li>
                                                <li>Jeans</li>
                                                <li>Knitwears</li>
                                            </ul>
                                            <ul>
                                                <div className={styles.whomen}>Men Clothings</div>
                                                <li>Coats & Jackets</li>
                                                <li>Hoodies</li>
                                                <li>Pants</li>
                                                <li>Shirts</li>
                                                <li>Shorts</li>
                                                <li>T-Shirts</li>
                                            </ul>
                                            <ul>
                                                <div className={styles.whomen}>Shop By Collections</div>
                                                <li>Fall Collection</li>
                                                <li>Pastel Collection</li>
                                                <li>Spring Collection</li>
                                                <li>Summer Collection</li>
                                                <li>Vintage Collection</li>
                                                <li>Winter Collection</li>
                                            </ul>
                                            <ul>
                                                <div className={styles.whomen}>Shop By Activity</div>
                                                <li>Back to School</li>
                                                <li>Casual Clothings</li>
                                                <li>Sport Clothings</li>
                                                <li>Summer Clothings</li>
                                                <li>Vacation & Wedding</li>
                                                <li>Work Clothings</li>
                                            </ul>
                                        </div>
                                        <div className={styles.dropDownimages}>
                                            <div className={styles.dropDownimages1}>
                                                <img src="https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/05/banner-mega-1-2.jpg"></img>
                                                <span>NEW PRODUCT</span>
                                                <h1>The best new Collection</h1>
                                            </div>
                                            <div className={styles.dropDownimages1}>
                                                <img src="https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/05/banner-mega-2-2.jpg"></img>
                                                <span>ENJOY FREE SHIPPING</span>
                                                <h1>Men Pick from $15</h1>

                                            </div>

                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className={styles.navEntity}>
                                <p>Women</p>
                                <CaretDown />
                                <div className={`${styles.navDropDown} ${styles.womenDropDown}`}>
                                    <div className={styles.dropDownContent}>
                                        <div className={styles.dropDownFlex}>
                                            <div className={styles.flex1}>
                                                <ul>
                                                    <div className={styles.whomen}>Women Clothings</div>
                                                    <li>Women</li>
                                                    <li>Coats & Jackets</li>
                                                    <li>Dresses</li>
                                                    <li>Hoodies & Sweatshirts</li>
                                                    <li>Jeans</li>
                                                    <li>Knitwears</li>
                                                </ul>
                                                <ul>
                                                    <div className={styles.whomen}>Men Clothings</div>
                                                    <li>Coats & Jackets</li>
                                                    <li>Hoodies</li>
                                                    <li>Pants</li>
                                                    <li>Shirts</li>
                                                    <li>Shorts</li>
                                                    <li>T-Shirts</li>
                                                </ul>
                                                <ul>
                                                    <div className={styles.whomen}>Shop By Collections</div>
                                                    <li>Fall Collection</li>
                                                    <li>Pastel Collection</li>
                                                    <li>Spring Collection</li>
                                                    <li>Summer Collection</li>
                                                    <li>Vintage Collection</li>
                                                    <li>Winter Collection</li>
                                                </ul>
                                                <ul>
                                                    <div className={styles.whomen}>Shop By Activity</div>
                                                    <li>Back to School</li>
                                                    <li>Casual Clothings</li>
                                                    <li>Sport Clothings</li>
                                                    <li>Summer Clothings</li>
                                                    <li>Vacation & Wedding</li>
                                                    <li>Work Clothings</li>
                                                </ul>
                                            </div>
                                            <div className={styles.flex1}>
                                                <ul>
                                                    <div className={styles.whomen}>Shop by Body Fit</div>
                                                    <li>Curve & Plus Size</li>
                                                    <li>Maternity</li>
                                                    <li>Petite</li>
                                                    <li>Tall</li>
                                                </ul>
                                                <ul>
                                                    <div className={styles.whomen}>Top Trendings</div>
                                                    <li>Fall Collection</li>
                                                    <li>Pastel Collection</li>
                                                    <li>Spring Collection</li>
                                                    <li>Summer Collection</li>

                                                </ul>
                                                <ul>
                                                    <div className={styles.whomen}>Fashion Style</div>
                                                    <li>18th Century</li>
                                                    <li>19th Century</li>
                                                    <li>20th Century</li>
                                                    <li>21th Century</li>
                                                </ul>
                                                <ul>
                                                    <div className={styles.whomen}>New in</div>
                                                    <li>Coats & Jackets</li>
                                                    <li>Dresses</li>
                                                    <li>Hoodies & Sweatshirts</li>
                                                    <li>Jeans</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.navEntity}>
                                <p>Men</p>
                                <CaretDown />
                                <div className={`${styles.navDropDown} ${styles.manDropDown}`}>
                                    <div className={styles.dropDownContent}>
                                        <div className={styles.navbarDropdown}>
                                            <div className={styles.dropDownContentmen}>
                                                <div className={styles.flex1}>
                                                    <ul>
                                                        <div className={styles.whomen}>Men Clothings</div>
                                                        <li>Men</li>
                                                        <li>Coats & Jackets</li>
                                                        <li>Hoodies</li>
                                                        <li>Pants</li>
                                                        <li>Shirts</li>
                                                        <li>Shorts</li>
                                                    </ul>
                                                    <ul>
                                                        <div className={styles.whomen}>Shop by Activity</div>
                                                        <li>Activities</li>
                                                        <li>Back to School</li>
                                                        <li>Casual Clothings</li>
                                                        <li>Sport Clothings</li>
                                                        <li>Summer Clothings</li>
                                                        <li>Vacation & Wedding</li>
                                                    </ul>
                                                </div>
                                                <div className={styles.leftImage}>
                                                    <img src="https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/05/banner-mega-3-1.jpg" alt="Image"></img>
                                                </div>
                                            </div>
                                            <div className={styles.wideImage}>
                                                <img src="https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/05/banner-mega-4-1.jpg" alt="Image"></img>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className={styles.navEntity}>
                                <p>Kids</p>
                                <CaretDown />
                                <div className={`${styles.navDropDown} ${styles.kidsDropDown}`}>
                                    <div className={styles.kidsDropContent}>
                                        <div className={styles.dropLink}>
                                            <a href="">Boys</a>
                                        </div>
                                        <div className={styles.dropLink}>
                                            <a href="">Girls</a>
                                        </div>
                                        <div className={styles.dropLink}>
                                            <a href="">Newborns</a>
                                        </div>
                                        <div className={styles.dropLink}>
                                            <a href="">Unisex</a>
                                        </div>
                                        <div className={styles.dropLink}>
                                            <a href="">Uniform</a>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                    <Link to="/" className={styles.headerLogo}>
                        <img src="https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/themes/nooni/images/logo.png"
                            alt="Site Logo" />
                    </Link>
                    <div className={styles.headerButtons}>
                        <div className={`${styles.buttonEntity} ${styles.searchButton}`}>
                            <MagnifyingGlass />
                        </div>
                        <div className={styles.buttonEntity}>
                            <User />
                        </div>
                        <div className={styles.buttonEntity}>
                            <div className={styles.count}>
                                0
                            </div>
                            <Heart />
                        </div>
                        <div className={`${styles.buttonEntity}`}>
                            <ShoppingCart />
                            <div className={styles.count}>
                                0
                            </div>
                        </div>

                    </div>


                </div>
            </div>
            <div className={`${styles.sideMenuWrapper} ${menuOpen ? styles.menuVisible : ""}`}>
                <div className={styles.closeBtn} onClick={handleMenuToggle}>
                    <X />
                </div>
            </div>


        </header>
    )
}

export default Header
