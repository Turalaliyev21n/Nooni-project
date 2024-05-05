import React from 'react'
import styles from "./Search.module.scss";
import { Link, MagnifyingGlass, ShootingStar, X } from '@phosphor-icons/react';

const Search = () => {
  return (
    <div className={styles.searchOverlay}>
      <div className={styles.searchWrapper}>
        <div className={styles.searchContent}>
          <div className={styles.heading}>
            <p>Search for products (2)</p>
            <div className={styles.closeSearch}>
              <X />
            </div>
          </div>
          <div className={styles.searchInputContainer}>
            <input type="text" 
            placeholder='Enter product name...'
            />
            <div className={styles.searchBtn}>
            <MagnifyingGlass />
            </div>
          </div>
          <div className={styles.resultsContainer}>
            <div className={styles.resultCard}>
              <Link to="#">
              <img src="https://demo.theme-sky.com/nooni-fashion/wp-content/uploads/2023/04/31-450x572.jpg" alt="Result Image" />    
              </Link>
              <div className={styles.cardTitle}>
                <Link to="#">
                Faux Longline Coat in Light Pink
                </Link>
                <div className={styles.price}>
                  <p>AZN 358</p>AZN 323
                </div>
                <div className={styles.rating}>
                <ShootingStar weight="fill" />
                3
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
