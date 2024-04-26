import React from 'react'
import styles from "./Product.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageHeading from '../../Common/PageHeading/PageHeading';
import productData from "/public/data/productsData.json";
import ProductCard from '../../Common/ProductCard/ProductCard';
import {List} from '@phosphor-icons/react/dist/ssr';

const Product = () => {
  return (
    <div className={styles.shopWrapper}>
      <Header />
      <main>
        {/* PAGE HEADING SECTION */}
        <PageHeading title="Shop" />

        {/* CATEGORY SECTION */}
        <section className={styles.categorySection}>
          <div className={styles.listContainer}>
            <div className={styles.listWrapper}>
              <div className={styles.listBox}>
                <div className={styles.listImages}>
                  <img src="https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/03/40-310x310.jpg" alt="" />
                </div>
                <div className={styles.listText}>
                  <h3>Kids</h3>
                  <p>11 products</p>
                </div>
              </div>
              <div className={styles.listBox}>
                <div className={styles.listImages}>
                  <img src="https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/08/women-hoodies.jpg" alt="" />
                </div>
                <div className={styles.listText}>
                  <h3>Collections</h3>
                  <p>36 products</p>
                </div>
              </div>
              <div className={styles.listBox}>
                <div className={styles.listImages}>
                  <img src="https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/08/men-coats.jpg" alt="" />
                </div>
                <div className={styles.listText}>
                  <h3>Men</h3>
                  <p>10 products</p>
                </div>
              </div>
              <div className={styles.listBox}>
                <div className={styles.listImages}>
                  <img src="https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/08/women-jeans.jpg" alt="" />
                </div>
                <div className={styles.listText}>
                  <h3>Activities</h3>
                  <p>41 products</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section className={styles.productsSection}>
          <div className={styles.productsContent}>
            <div className={styles.filterContainer}>
              <div className={styles.filterInpubox}>
                <div className={styles.filterTypeInput}>
                  TYPE
                </div>
                <div className={styles.filterProductfilter}>
                  <ul className={styles.productCategries}>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                     Activities (41)
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                     Body Fit (32)
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                    Collections (36)
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                    Fashion Style (38)
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                     Kids (11)
                    </li>
                    <li className={styles.cartItem}>
                     <input type="checkbox"></input>
                     Men (10)
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                    Women (22)
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.filterInpubox}>
                <div className={styles.filterTypeInput}>
                  PRICE
                </div>
                <div className={styles.filterProductfilter}>
                  <ul className={styles.productCategries}>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                    $500 & Under
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                    $500 - $999
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                     $1,000 - $1,999
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                     $2,000 - $5,000
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                    $5,000 & Over
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.filterInpubox}>
                <div className={styles.filterTypeInput}>
                  SIZE
                </div>
                <div className={styles.filterProductfilter}>
                  <ul className={styles.productCategries}>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                    XS (17)
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                    S (20)
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                    M (22)
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                    L (20)
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                    XL (21)
                    </li>
                    <li className={styles.cartItem}>
                     <input type="checkbox"></input>
                     2XL (14)
                    </li>
                    <li className={styles.cartItem}>
                    <input type="checkbox"></input>
                    Free size (15)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.productsContainer}>
              <div className={styles.sortContainer}>
                <div className={styles.sortMinibox}>
                <List fontSize={'30px'} />
                </div>
              </div>
              <div className={styles.productCardsWrapper}>
                {productData.map((product) => {
                  return (
                    <div className={styles.card} key={product.id}>
                    <ProductCard product={product} />
                  </div>
                  )
                })}


              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Product
