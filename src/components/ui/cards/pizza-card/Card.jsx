import styles from "./Card.module.css";

function Card({ item, addToCart, quantity }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={item.imageUrl} alt={item.name} className={styles.image} />

        {item.popular && <span className={styles.badge}>🔥 Популярная</span>}
      </div>

      <div className={styles.info}>
        <h3>{item.title}</h3>

        <p className={styles.description}>{item.description}</p>

        <div className={styles.selector}>
          <ul>
            <li className={styles.active}>тонкое</li>
            <li>традиционное</li>
          </ul>

          <ul>
            <li className={styles.active}>26 см.</li>
            <li>30 см.</li>
            <li>40 см.</li>
          </ul>
        </div>

        <div className={styles.footer}>
          <strong className={styles.price}>{item.price} ₽</strong>

          {/* <button className={styles.addButton} onClick={() => addToCart(pizza)}>
            + Добавить
          </button> */}
          <button className={styles.addButton} onClick={() => addToCart(item)}>
            + Добавить {quantity > 0 && `(${quantity})`}
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;
