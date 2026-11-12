import { useApp } from "@/context/AppContext";
import styles from "./Filters.module.css";

import Categories from "@/components/ui/categories/Categories";
import CatalogControls from "@/components/ui/filters/CatalogControls";

const Filters = () => {
  const { activeCategory, setActiveCategory } = useApp();

  return (
    <div className={styles.filters} id="filters">
      <Categories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <CatalogControls />
    </div>
  );
};

export default Filters;
