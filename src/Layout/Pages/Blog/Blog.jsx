import React from 'react'
import styles from "./Blog.module.scss";
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import PageHeading from '../../Common/PageHeading/PageHeading';
import { useTranslation } from "react-i18next";
const Blog = () => {
    const {t} = useTranslation();
    return (
        <>
            <div className={styles.blogWrapper}>
                <Header />
                <main className={styles.wrapperBlog}>
                    <PageHeading title={t("main.blog.blogBlog")} />
                    <div className={styles.blogContainer}>
                        <div className={styles.blogLeft}>
                            <div className={styles.blogBox}>
                                <div className={styles.blogImage}>
                                    <img src='https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/04/blog-2.jpg' alt=''></img>
                                </div>
                                <div className={styles.blogText}>
                                    <p>{t("main.blog.fashionTrending")}</p>
                                    <h1>{t("main.blog.perfectPieces")}</h1>
                                    <p>{t("main.blog.nuncUt")}</p>
                                    <a href=''>{t("main.blog.readMore")}</a>

                                </div>
                            </div>
                            <div className={styles.blogBox}>
                                <div className={styles.blogImage}>
                                    <img src='https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/04/blog-14.jpg' alt=''></img>
                                </div>
                                <div className={styles.blogText}>
                                    <p>{t("main.blog.fashionMen")}</p>
                                    <h1>{t("main.blog.theDosAnd")}</h1>
                                    <p>{t("main.blog.nuncUt")}</p>
                                    <a href=''>{t("main.blog.readMore")}</a>

                                </div>
                            </div>
                            <div className={styles.blogBox}>
                                <div className={styles.blogImage}>
                                    <img src='https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/04/blog-6.jpg' alt=''></img>
                                </div>
                                <div className={styles.blogText}>
                                    <p>{t("main.blog.fashionTrending")}</p>
                                    <h1>{t("main.blog.weekdayOutfit")}</h1>
                                    <p>{t("main.blog.nuncUt")}</p>
                                    <a href=''>{t("main.blog.readMore")}</a>

                                </div>
                            </div>
                            <div className={styles.blogBox}>
                                <div className={styles.blogImage}>
                                    <img src='https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/04/blog-1.jpg' alt=''></img>
                                </div>
                                <div className={styles.blogText}>
                                    <p>{t("main.blog.fashionWomen")}</p>
                                    <h1>{t("main.blog.yourSummer")}</h1>
                                    <p>{t("main.blog.nuncUt")}</p>
                                    <a href=''>{t("main.blog.readMore")}</a>

                                </div>
                            </div>
                        </div>
                        <div className={styles.blogRight}>
                            <div className={styles.blogContact}>
                                <div className={styles.blogMinibox}>
                                    <div className={styles.blogInput}>
                                        <input type='text' placeholder='Search for products...'></input>
                                    </div>
                                </div>
                                <div className={styles.blogMinibox}>
                                    <div className={styles.blogPopular}>
                                        <h3>{t("main.blog.popularPosts")}</h3>
                                        <div className={styles.popularBox}>
                                            <img src='https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/04/blog-1-1174x862.jpg' alt=''></img>
                                            <p>{t("main.blog.yourSummer")}</p>
                                        </div>
                                        <div className={styles.popularBox}>
                                            <img src='https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/04/blog-2-1174x862.jpg' alt=''></img>
                                            <p>{t("main.blog.perfectPieces")}</p>
                                        </div>
                                        <div className={styles.popularBox}>
                                            <img src='https://nooni-be87.kxcdn.com/nooni-fashion/wp-content/uploads/2023/04/blog-6-1174x862.jpg' alt=''></img>
                                            <p>{t("main.blog.weekdayOutfit")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.blogMinibox}>
                                <div className={styles.blogPopular}>
                                        <h3>{t("main.blog.recentComments")}</h3>
                                        <div className={styles.popularBox}>
                                            <div className={styles.blogComments}>
                                            <p>{t("main.blog.loremInsum")}</p>
                                           <span>{t("main.blog.Jul")}</span>
                                            </div>
                                         
                                        </div>
                                        <div className={styles.popularBox}>
                                        <div className={styles.blogComments}>
                                            <p>{t("main.blog.loremInsum")}</p>
                                           <span>{t("main.blog.Jul")}</span>
                                            </div>
                                        </div>
                                        <div className={styles.popularBox}>
                                        <div className={styles.blogComments}>
                                            <p>{t("main.blog.phasellusVitae")}</p>
                                           <span>{t("main.blog.Jul")}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.blogMinibox}>
                                <div className={styles.blogPopular}>
                                        <h3>{t("main.blog.tagsPost")}</h3>
                                        <div className={styles.popularBox}>
                                            <div className={styles.blogComments}>
                                             <div className={styles.commentsBox}>
                                                <button>{t("main.blog.blogDresses")}</button>
                                                <button>{t("main.blog.blogFashionita")}</button>
                                             </div>
                                            </div>
                                         
                                        </div>
                                        <div className={styles.popularBox}>
                                        <div className={styles.blogComments}>
                                        <div className={styles.commentsBox}>
                                                <button>{t("main.blog.blogFashionTrend")}</button>
                                                <button>{t("main.blog.blogHolidaySale")}</button>
                                             </div>
                                            </div>
                                        </div>
                                        <div className={styles.popularBox}>
                                        <div className={styles.blogComments}>
                                        <div className={styles.commentsBox}>
                                                <button>{t("main.blog.blogKids")}</button>
                                                <button>{t("main.blog.blogMenWear")}</button>
                                             </div>
                                            </div>
                                        </div>
                                        <div className={styles.popularBox}>
                                        <div className={styles.blogComments}>
                                        <div className={styles.commentsBox}>
                                                <button>{t("main.blog.saleOff")}</button>
                                                <button>{t("main.blog.blogTipsTricks")}</button>
                                             </div>
                                            </div>
                                        </div>
                                        <div className={styles.popularBox}>
                                        <div className={styles.blogComments}>
                                        <div className={styles.commentsBox}>
                                                <button>{t("main.blog.blogTops")}</button>
                                                <button>{t("main.blog.blogWomenWear")}</button>
                                             </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Blog
