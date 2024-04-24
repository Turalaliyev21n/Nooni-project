import React, { useState } from 'react';
import styles from "./Review.module.scss";
import reviewDatas from "/public/data/reviewData.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';



const Review = () => {
    const [review, setReview] = useState(reviewDatas);

    return (
        <div>
            <section className={styles.review}>
                <div className={styles.ourReview}>
                    <h1>OUR REVIEWS</h1>
                    <div className={styles.reviewSlider}>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={25}
                            freeMode={true}
                            loop={true}
                            pagination={{
                                clickable: true,
                              }}
                              modules={[Pagination]}
                              style={{
                                "--swiper-pagination-color": "black",
                                "--swiper-pagination-bullet-inactive-color": "gray",
                                "--swiper-pagination-bullet-inactive-opacity": "1",
                                "--swiper-pagination-bullet-size": "16px",
                                "--swiper-pagination-bullet-horizontal-gap": "6px",
                              }}
                        >
                            {review.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className={styles.cardWrapper}>
                                    <div className={styles.reviewSliderBox} >
                                        <div className={styles.reviewSliderLeft}>
                                            <img src={item.image} alt="Review" />
                                        </div>
                                        <div className={styles.reviewSliderRight}>
                                            <div className={styles.reviewStar}>
                                                {[...Array(5)].map((_, index) => (
                                                    <i className="fa-solid fa-star" key={index}></i>
                                                ))}
                                            </div>
                                            <div className={styles.reviewText}>
                                                <p>{item.title}</p>
                                                <a href="#">{item.name}</a>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </Swiper>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Review;
