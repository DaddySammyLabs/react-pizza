import { pizzas } from "@/data/pizzas";
// import { SIZES, DOUGHS } from "./itemConstants";
// import useFetch from "./api/useFetch";

import { useCategories } from "./filters/useCategories";
import useScroll from "./common/useScroll";
import useCatalogControls from "@/hooks/filters/useCatalogControls"; //useFilters
import useCart from "./cart/useCart";
import useOrders from "./api/useOrders";

import useModal from "./common/useModal";
// import useOrders from "./hooks/useOrders";

const API_URL = "https://72c8b75c9e22b6a0.mokky.dev/items";
const CART_URL = "https://72c8b75c9e22b6a0.mokky.dev/cart";
const DELIVERY = "https://72c8b75c9e22b6a0.mokky.dev/delivery";
const ORDERS = "https://72c8b75c9e22b6a0.mokky.dev/orders";

const useAppState = () => {
  const { upButton } = useScroll();

  const {
    isOpen: isOpenNavbar,
    open: openNavbar,
    close: closeNavbar,
  } = useModal(false, true);

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

  const {
    orders: deliveries,
    createOrder: creatDelivery,
    removeOrder: removeDelivery,
  } = useOrders({
    url: DELIVERY,
    cartItems: cart,

    clearCart,
    totalPrice,
  });

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
    addToCart,
    changeQuantity,
    removeFromCart,
    clearCart,
    cartLoading,
    cartError,
    reLoadCart,

    // checkout,

    // orders,
    // createOrder,
    // removeOrder,
    deliveries,
    creatDelivery,
    removeDelivery,
  };
};

export default useAppState;
