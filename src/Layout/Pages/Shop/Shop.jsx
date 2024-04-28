import styles from "./Shop.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageHeading from '../../Common/PageHeading/PageHeading';
import ProductCard from '../../Common/ProductCard/ProductCard';
import {Rows, SquaresFour} from "@phosphor-icons/react";
import {useContext, useMemo, useState,useCallback} from "react";
import {DataContext} from "../../../Context/DataContext.jsx";
import {Loader} from "../../Common/Loader/Loader.jsx";
import {FilterSlider} from "../../Common/FilterSlider/FilterSlider.jsx";

const Shop = () => {

  const {
    productsLoading,
    productsData,
  } = useContext(DataContext);

  const [priceBounds, setPriceBounds] = useState([0, 1000]);
  const [shouldFilterUpdate, setShouldFilterUpdate] = useState(Date.now());
  const [listView, setListView] = useState(false);
  const [gridView, setGridView] = useState(true);



  const filteredProducts = useMemo(() => {
    if (shouldFilterUpdate) {
      return productsData?.filter((product) => {
        const price = product?.salePrice;
        return price >= priceBounds[0] && price <= priceBounds[1];
      })
    } else {
      return productsData;
    }
  }, [shouldFilterUpdate,productsData]);

  const onApply = useCallback(() => setShouldFilterUpdate(Date.now()), []);
  const onReset = useCallback(() => {
    setPriceBounds([0, 1000]);
    setShouldFilterUpdate(null);
  }, []);

  const handleChangeView = useCallback(() => {
    setListView(prevState => !prevState);
    setGridView(prevState => !prevState);
  },[setGridView,setListView]);

  return (
      <>
      {
        productsLoading ?
            <Loader/>
            :
            null
      }
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
                <div className={`${styles.filterProductfilter} ${styles.rangeContainer}`}>
                  <FilterSlider
                      priceBounds={priceBounds}
                      setPriceBounds={setPriceBounds}
                      onReset={onReset}
                      onApplyFilters={onApply}
                  />
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
                <div className={`${styles.sortBox}`}>
                  <Rows className={listView ? styles.active : ""} onClick={handleChangeView}/>
                  <SquaresFour className={gridView ? styles.active : ""} onClick={handleChangeView}/>
                </div>
              </div>
              <div className={`${styles.productCardsWrapper} ${listView ? styles.listView : ""}`}>
                {filteredProducts?.length < 1 ? (
                    <div className={styles.noProducts}>
                      No Products found...
                    </div>
                ) : (
                    filteredProducts?.map((product) => (
                        <div className={styles.card} key={product.id}>
                          <ProductCard product={product} listView={listView}/>
                        </div>
                    ))
                )}

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
      </>
  )
}

export default Shop
