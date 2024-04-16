import styles from "./Header.module.scss";
import {CaretDown, Heart, List, MagnifyingGlass, ShoppingCart, User} from "@phosphor-icons/react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.headerWrapper}>
            <div className={styles.headerContent}>
                <div className={styles.headerTop}>

                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.headerNavigation}>
                        <div className={styles.sideMenu}>
                            <List/>
                        </div>
                        <div className={styles.navigation}>
                            <div className={styles.navEntity}>
                                <p>Shop</p>
                                <CaretDown/>
                            </div>
                            <div className={styles.navEntity}>
                                <p>Women</p>
                                <CaretDown/>
                            </div>
                            <div className={styles.navEntity}>
                                <p>Men</p>
                                <CaretDown/>
                            </div>
                            <div className={styles.navEntity}>
                                <p>Kids</p>
                                <CaretDown/>
                            </div>

                        </div>
                    </div>
                    <Link to="/" className={styles.headerLogo}>
                        <img src="https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/themes/nooni/images/logo.png"
                             alt="Site Logo"/>
                    </Link>
                    <div className={styles.headerButtons}>
                        <div className={`${styles.buttonEntity} ${styles.searchButton}`}>
                            <MagnifyingGlass/>
                        </div>
                        <div className={styles.buttonEntity}>
                            <User />
                        </div>
                        <div className={styles.buttonEntity}>
                            <div className={styles.count}>
                                0
                            </div>
                            <Heart  />
                        </div>
                        <div className={`${styles.buttonEntity}`}>
                            <ShoppingCart/>
                            <div className={styles.count}>
                                0
                            </div>
                        </div>

                    </div>


                </div>
            </div>


        </header>
    )
}

export default Header
