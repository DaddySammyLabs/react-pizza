import React from "react";
import { useApp } from "@/context/AppContext";

import styles from "./CatalogControls.module.css";

const CatalogControls = ({}) => {
  const {
    searchValue,
    onChangeSearchValue,
    clearInput,
    sortValue,
    onChangeSortValue,
  } = useApp();

  return (
    <div className={styles.filters}>
      <div className={styles.selectFilter}>
        <div className={styles.selector}>
          <select
            value={sortValue}
            onChange={onChangeSortValue}
            className={styles.select}
          >
            {/* <option value="popular">популярности</option> */}
            <option value="title">По названию</option>
            <option value="priceCheap">Сначала дещёвые</option>
            <option value="priceExpensive">Сначала Дорогие</option>
          </select>
        </div>

        <div className={styles.search}>
          <img
            className={styles.searchIcon}
            src="/icons/search.svg"
            alt="searchIcon"
          />

          <input
            onChange={onChangeSearchValue}
            className={styles.input}
            type="text"
            // placeholder={texts.search}
            placeholder="поиск"
            value={searchValue}
          />

          <img
            onClick={clearInput}
            className={styles.clearIcon}
            src="/icons/close.svg"
            alt="clear"
          />
        </div>
      </div>
    </div>
  );
};

export default CatalogControls;
