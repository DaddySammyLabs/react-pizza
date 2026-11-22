import { useAutoAnimate } from "@formkit/auto-animate/react";

import styles from "./Info.module.css";

function Info({
  children,
  items,
  totalPrice,
  orderArticle,
  delivered = false,
}) {
  const formattedDate = new Date(orderArticle).toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const [parent] = useAutoAnimate({
    duration: 300,
    easing: "ease-in-out",
  });

  return (
    <>
      <div className={styles.items}>
        <div className={styles.date}>
          <h3>Актикул: {orderArticle}</h3>
          <p style={{ color: "#777" }}>Дата заказа: {formattedDate}</p>

          <span className={delivered ? styles.delivered : styles.processing}>
            {delivered ? "✓ Доставлено" : "🚚 В пути"}
          </span>
        </div>

        <div className={styles.orderPrice}>
          <span className={styles.total}>Общая стоимость заказа:</span>
          <strong>{totalPrice} ₽</strong>
        </div>
        {children}
      </div>
    </>
  );
}

export default Info;
