import styles from "./Home.module.scss";
import Header from '../../Components/Header/Header';
import Footer from "../../Components/Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import homeSliderData from "/public/data/homeSliderData.json";
import { CaretDoubleRight } from "@phosphor-icons/react";
import productsData from "/public/data/productsData.json";


const Home = () => {
  
  return (
    <>
      <Header />
      <main className={styles.homeWrapper}>
        {/* HOME SLIDER SECTION */}
        <section className={styles.homeSliderSection}>
          <Swiper
            slidesPerView={1}
            direction={'horizontal'}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            style={{
              "--swiper-pagination-color": "black",
              "--swiper-pagination-bullet-inactive-color": "gray",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "16px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
          >
            {homeSliderData.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <div className={styles.sliderCard}>
                    <img className={styles.homeSliderBackground} src={data.imageUrl} alt="Background" />
                    <div className={styles.cardTitle}>
                      <div className={styles.arrivals}>{data.arrivals}</div>
                      <div className={styles.latest}>{data.latest}</div>
                      <div className={styles.shipping}>{data.shipping}</div>
                      <a className={styles.shop}>{data.shop}</a>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </section>
        {/* PRODUCTS SECTION */}
        <section className={styles.productsSection}>
          <div className={styles.productsHeading}>
            <div className={styles.productscontent}>
              <div className={styles.productsHeadingtop}>
                <a href="" className={styles.besTeller}>BESTSELLERS</a>
              </div>
              <div className={styles.productsHeadingtop}>
                <a href="">NEW PRODUCTS</a>
              </div>
            </div>
            <div className={styles.productscontent}>
              <a className={styles.productscontentsee} href="">See All <CaretDoubleRight fontSize={"15px"} /></a>
            </div>
          </div>
          <div className={styles.productsContainer}>
            {productsData.map((product) => {
              return (
                <div className={styles.productWrapper} key={product.id}>
                  <div className={styles.productsContainerBox}>
                    <div className={styles.productImage}>
                      {product.regularPrice && product.quantity > 0?
                        <div className={`${styles.mark} ${styles.saleMark}`}>
                          sale
                        </div>
                        :
                        null
                  }
                  {
                    product.hot && product.quantity > 0? 
                    <div className={`${styles.mark} ${styles.hotMark} ${!product.regularPrice? styles.defaultMark : null}`}>
                    hot
                  </div>
                  :
                  null
                  }
                  {
                    product.quantity < 1?
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
            })}
          </div>

        </section>
      </main>
      <Footer />
    </>

  )
}

export default Home
