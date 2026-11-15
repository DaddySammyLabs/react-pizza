// useFilters
import { useState } from "react";

const useCatalogControls = ({ items }) => {
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSortValue] = useState("title");

  const onChangeSearchValue = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const clearInput = () => setSearchValue("");

  // sorting
  const onChangeSortValue = (event) => {
    setSortValue(event.target.value);
  };

  // 1. Поиск
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase().trim()),
  );

  // 2. Сортировка
  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortValue === "priceCheap") {
      return a.price - b.price;
    }

    if (sortValue === "priceExpensive") {
      return b.price - a.price;
    }

    if (sortValue === "title") {
      return a.title.localeCompare(b.title);
    }

    return 0;
  });

  return {
    items: sortedItems,

    searchValue,
    onChangeSearchValue,
    clearInput,

    sortValue,
    onChangeSortValue,
  };
};

export default useCatalogControls;
