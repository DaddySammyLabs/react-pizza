import styles from "./Card.module.css";

function Card({ pizza }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={pizza.imageUrl} alt={pizza.name} className={styles.image} />

        {pizza.popular && <span className={styles.badge}>🔥 Популярная</span>}
      </div>

      <div className={styles.info}>
        <h3>{pizza.title}</h3>

        <p className={styles.description}>{pizza.description}</p>

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
          <strong className={styles.price}>{pizza.price} ₽</strong>

          {/* <button className={styles.addButton} onClick={() => addToCart(pizza)}> */}
          <button className={styles.addButton}>+ Добавить</button>
        </div>
      </div>
    </article>
  );
}

export default Card;
