import styles from "./InfoDelivery.module.css";

export function Heading({}) {
  return (
    <div className={styles.heading}>
      <span className={styles.subtitle}>REACTPIZZA</span>
      <h2>🚚 Мои заказы</h2>
      <p>Следи за статусом своих заказов</p>
    </div>
  );
}

export const Empty = () => {
  return (
    <div className={styles.empty}>
      <span>🍕</span>
      <h3>Заказов пока нет</h3>
      <p>Когда оформишь заказ, он появится здесь.</p>
    </div>
  );
};
