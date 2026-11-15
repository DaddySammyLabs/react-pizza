// Ищем конкретную комбинацию в корзине

const useCartItem = ({
  item,
  cart,
  selectedSize,
  selectedDough,
  currentPrice,
  addToCart,
}) => {
  const cartItem = cart.find(
    (cartItem) =>
      Number(cartItem.itemId) === Number(item.id) &&
      Number(cartItem.size) === selectedSize.value &&
      cartItem.dough === selectedDough.value,
  );

  const handleAddToCart = () => {
    addToCart({
      ...item,
      price: currentPrice,
      size: selectedSize.value,
      dough: selectedDough.value,
    });
  };

  return {
    cartItem,
    quantity: cartItem?.quantity ?? 0,
    handleAddToCart,
  };
};

export default useCartItem;
