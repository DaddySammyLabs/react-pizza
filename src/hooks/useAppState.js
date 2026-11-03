import { useCategories } from "./useCategories";
import useScroll from "./common/useScroll";

const useAppState = () => {
  const { upButton } = useScroll();

  const {
    activeCategory,
    setActiveCategory,
    filteredPizzas,
    // loading: loadingCategories,
    // error: errorCategories,
    // refetch: reloadCategories,
  } = useCategories();

  return {
    upButton,

    activeCategory,
    setActiveCategory,
    filteredPizzas,
    // loadingCategories,
    // errorCategories,
    // reloadCategories,
  };
};

export default useAppState;
