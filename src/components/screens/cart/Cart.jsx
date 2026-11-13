import { useAutoAnimate } from "@formkit/auto-animate/react";

import CartInfo from "./CartInfo";
import CartItem from "@/components/ui/cards/cart-item/CartItem";

import styles from "./Cart.module.css";

function Cart({ cart, changeQuantity, totalPrice, checkout }) {
  const [parent] = useAutoAnimate({
    duration: 300,
    easing: "ease-in-out",
  });

  return (
    <CartInfo cart={cart} checkout={checkout} totalPrice={totalPrice}>
      <div ref={parent} className={styles.items}>
        {cart.map((item) => (
          <CartItem
            key={item.title}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            itemId={item.id}
            quantity={item.quantity}
            changeQuantity={changeQuantity}
          />
        ))}
      </div>
    </CartInfo>
  );
}

export default Cart;
