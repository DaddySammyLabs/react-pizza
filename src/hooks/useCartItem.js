// Ищем конкретную комбинацию в корзине
const useCartItem = (item, cart, selectedSize, selectedDough) => {
  const cartItem = cart.find(
    (cartItem) =>
      Number(cartItem.itemId) === Number(item.id) &&
      Number(cartItem.size) === selectedSize.value &&
      cartItem.dough === selectedDough.value,
  );

  return {
    cartItem,
    quantity: cartItem?.quantity ?? 0,
  };
};

export default useCartItem;
