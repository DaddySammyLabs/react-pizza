import styles from "./CardOrder.module.css";

function Card({ title, imageUrl, price, quantity }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt="pizzaImage" className={styles.image} />
      </div>

      <div className={styles.info}>
        <h3>{title}</h3>

        {/* <p className={styles.description}>{description}</p> */}

        <div className={styles.footer}>
          {price} ₽{""}
          <strong>x {quantity}</strong>
          <strong className={styles.priceTotal}>{price * quantity} ₽</strong>
        </div>
      </div>
    </article>
  );
}

export default Card;
