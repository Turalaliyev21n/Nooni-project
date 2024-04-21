import styles from "./Home.module.scss";
import Header from '../../Components/Header/Header';
import Footer from "../../Components/Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import homeSliderData from "/public/data/homeSliderData.json";
import { CaretDoubleRight } from "@phosphor-icons/react";
import { useState, useCallback, useEffect } from "react";
import productsData from "/public/data/productsData.json";
import ProductCard from "../../Common/ProductCard/ProductCard";





const Home = () => {
  const [slidesPerView, setSlidesPerView] = useState(5);

  const handleResize = useCallback(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 1300 && windowWidth > 1000) {
      setSlidesPerView(4);
    } else if (windowWidth <= 1000 && windowWidth > 800) {
      setSlidesPerView(3);
    } else if (windowWidth <= 800 && windowWidth > 600) {
      setSlidesPerView(2);

    } else if (windowWidth <= 600 && windowWidth > 300) {
      setSlidesPerView(1);
    }
    else {
      setSlidesPerView(5);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


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
            <Swiper
              slidesPerView={slidesPerView}
              spaceBetween={0}
              freeMode={true}
              loop={true}
            >
              {productsData.slice(0, 6).map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <ProductCard product={product} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </section>

      </main>
      <Footer />
    </>

  )
}

export default Home
