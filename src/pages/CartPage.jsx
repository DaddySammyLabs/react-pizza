import { useApp } from "@/context/AppContext";

import Cart from "@/components/screens/cart/Cart";

function CartPage() {
  const {
    cart,
    totalPrice,
    changeQuantity,
    checkout,
    cartLoading,
    creatDelivery,
  } = useApp();

  if (cartLoading)
    return (
      <h2 style={{ textAlign: "center", margin: "100px" }}>
        Загрузка корзины...
      </h2>
    );

  return (
    <main style={{ minHeight: "64vh" }}>
      <Cart
        cart={cart}
        totalPrice={totalPrice}
        changeQuantity={changeQuantity}
        checkout={checkout}
        creatDelivery={creatDelivery}
      />
    </main>
  );
}

export default CartPage;
