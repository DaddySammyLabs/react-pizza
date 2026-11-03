import React from "react";
import styles from "./Filters.module.css";

const Filters = ({}) => {
  return (
    <div className={styles.filters}>
      <div className={styles.selectFilter}>
        <select className={styles.select}>
          <option value="title">популярности</option>
          <option value="priceCheap">по цене</option>
          <option value="priceExpensive">по алфавиту</option>
        </select>

        <div className={styles.search}>
          <img
            className={styles.searchIcon}
            src="/icons/search.svg"
            alt="searchIcon"
          />

          <input className={styles.input} type="text" placeholder="search" />

          <img
            className={styles.clearIcon}
            src="/icons/close.svg"
            alt="clear"
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
