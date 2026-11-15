import { useApp } from "@/context/AppContext";

import useItemOptions from "@/hooks/filters/useItemOptions";
import useCartItem from "@/hooks/cart/useCartItem";
import styles from "./Card.module.css";

function Card({ item = [] }) {
  const { cart, addToCart } = useApp();

  // Цена зависит от размера
  const {
    DOUGHS,
    selectedSize,
    setSelectedSize,
    selectedDough,
    setSelectedDough,
    currentPrice,
  } = useItemOptions(item);

  const { quantity, handleAddToCart } = useCartItem({
    item,
    cart,
    selectedSize,
    selectedDough,
    currentPrice,
    addToCart,
  });

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={item.imageUrl} alt={item.title} className={styles.image} />

        {item.popular && <span className={styles.badge}>🔥 Популярная</span>}
      </div>

      <div className={styles.info}>
        <h3>{item.title}</h3>

        <p className={styles.description}>{item.description}</p>

        <div className={styles.selector}>
          {/* Толщина теста */}
          <ul className={styles.dough}>
            {DOUGHS.map((dough) => (
              <li
                key={dough.value}
                className={` ${styles.doughSelect} ${
                  selectedDough.value === dough.value ? styles.active : ""
                }`}
                onClick={() => setSelectedDough(dough)}
              >
                {dough.label}
              </li>
            ))}
          </ul>

          {/* Размер пиццы */}
          <ul className={styles.size}>
            {item.sizes.map((size) => (
              <li
                key={size.value}
                className={`${styles.sizeSelect} ${
                  selectedSize.value === size.value ? styles.active : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size.label}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.footer}>
          <strong className={styles.price}>{currentPrice} ₽</strong>

          <button className={styles.addButton} onClick={handleAddToCart}>
            + Добавить
            {/* {cartItem && ` (${cartItem.quantity})`} */}
            {quantity > 0 && ` (${quantity})`}
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;
