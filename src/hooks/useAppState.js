import { pizzas } from "@/data/pizzas";
// import useFetch from "./api/useFetch";

import { useCategories } from "./useCategories";
import useScroll from "./common/useScroll";
import useCatalogControls from "@/hooks/useCatalogControls"; //useFilters
import useCart from "./api/useCart";

const API_URL = "https://72c8b75c9e22b6a0.mokky.dev/items";
const CART_URL = "https://72c8b75c9e22b6a0.mokky.dev/cart";

const useAppState = () => {
  const { upButton } = useScroll();

  // const { data: pizzas, loading, error, refetch } = useFetch(API_URL);
  // const { loading, error, refetch } = useFetch(API_URL);

  const {
    activeCategory,
    setActiveCategory,
    categorizedItems,
    // loading: loadingCategories,
    // error: errorCategories,
    // refetch: reloadCategori`es,
  } = useCategories({ items: pizzas }); //items-origin

  const {
    searchValue,
    onChangeSearchValue,
    clearInput,
    items,
    sortValue,
    onChangeSortValue,
  } = useCatalogControls({
    items: categorizedItems, // items-from-useCategories
  });

  const checkout = async () => {
    if (!cart.length) return null;

    const newOrder = await addOrder(cart, totalPrice);

    if (!newOrder) return null;

    await clearCart();

    return newOrder;
  };

  const {
    cart,
    cartCount,
    totalPrice,

    // loading,
    // error,
    // refetch,
    loading: cartLoading,
    error: cartError,
    refetch: reLoadCart,

    addToCart,
    changeQuantity,
    removeFromCart,
    clearCart,
  } = useCart(CART_URL);

  return {
    upButton,

    activeCategory,
    setActiveCategory,

    items, //sorted-items-from-useFilters
    searchValue,
    onChangeSearchValue,
    clearInput,

    sortValue,
    onChangeSortValue,

    cart,
    cartCount,
    totalPrice,
    checkout,
    addToCart,
    changeQuantity,
    removeFromCart,
    clearCart,
    cartLoading,
    cartError,
    reLoadCart,
  };
};

export default useAppState;
