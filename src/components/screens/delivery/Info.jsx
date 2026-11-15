import { useAutoAnimate } from "@formkit/auto-animate/react";

import { useApp } from "@/context/AppContext";

import styles from "./Info.module.css";

function Info({ children }) {
  const { cart, totalPrice } = useApp();

  const orderArticle = Number(`${cart.length}${totalPrice}`);

  const [parent] = useAutoAnimate({
    duration: 300,
    easing: "ease-in-out",
  });

  return (
    <section className={styles.delivery}>
      <div className={styles.heading}>
        <span className={styles.subtitle}>REACTPIZZA</span>
        <h2>🚚 Мои заказы</h2>
        <p>Следи за статусом своих заказов</p>
      </div>

      {cart.length === 0 ? (
        <div className={styles.empty}>
          <span>🍕</span>
          <h3>Заказов пока нет</h3>
          <p>Когда оформишь заказ, он появится здесь.</p>
        </div>
      ) : (
        <>
          <div className={styles.items}>
            <h3>Актикул: {orderArticle}</h3>

            <div className={styles.orderPrice}>
              <span className={styles.total}>Общая стоимость заказа:</span>
              <strong>{totalPrice} ₽</strong>
            </div>
            {children}
          </div>
        </>
      )}
    </section>
  );
}

export default Info;
