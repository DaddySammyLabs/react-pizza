import { useAutoAnimate } from "@formkit/auto-animate/react";
import CartItem from "@/components/ui/cards/cart-item/CartItem";

import CardOrderd from "@/components/ui/cards/order-item/CardOrder";

import Info from "./Info";

import styles from "./Delivery.module.css";

function Delivery({ orders = [], cart, totalPrice, isOrderCompleted = true }) {
  const [parent] = useAutoAnimate({
    duration: 300,
    easing: "ease-in-out",
  });

  return (
    <section className={styles.delivery}>
      {/* {orders.map((order) => (
        <Info order={order} totalPrice={totalPrice}>
          <div ref={parent} className={styles.cardGrid}>
            {order.map((item) => (
              <CardOrderd
                key={item.title}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
        </Info>
      ))} */}
      {isOrderCompleted && (
        <Info cart={cart} totalPrice={totalPrice}>
          <div ref={parent} className={styles.cardGrid}>
            {cart.map((item) => (
              <CardOrderd
                key={item.title}
                title={item.title}
                imageUrl={item.imageUrl}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
        </Info>
      )}
    </section>
  );
}

export default Delivery;
