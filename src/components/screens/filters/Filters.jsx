import { useApp } from "@/context/AppContext";
import styles from "./Filters.module.css";

import Categories from "@/components/ui/categories/Categories";
import FiltersSearch from "@/components/ui/filters/Filters";

const Filters = () => {
  const { activeCategory, setActiveCategory, filteredPizzas } = useApp();

  return (
    <div className={styles.filters} id="filters">
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <FiltersSearch />
    </div>
  );
};

export default Filters;
