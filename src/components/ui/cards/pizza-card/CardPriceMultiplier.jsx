import useItemOptions from "@/hooks/filters/useItemOptions";
import styles from "./Card.module.css";

function Card({ item, addToCart, cart = [] }) {
  const {
    SIZES,
    DOUGHS,
    selectedSize,
    setSelectedSize,
    selectedDough,
    setSelectedDough,
  } = useItemOptions();

  // Цена зависит от размера
  const currentPrice = Math.round(item.price * selectedSize.priceMultiplier);

  // Ищем конкретную комбинацию в корзине
  const cartItem = cart.find(
    (cartItem) =>
      Number(cartItem.itemId) === Number(item.id) &&
      Number(cartItem.size) === selectedSize.value &&
      cartItem.dough === selectedDough.value,
  );

  const handleAddToCart = () => {
    addToCart({
      ...item,
      price: currentPrice,
      size: selectedSize.value,
      dough: selectedDough.value,
    });
  };

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
          <ul>
            {DOUGHS.map((dough) => (
              <li
                key={dough.value}
                className={
                  selectedDough.value === dough.value ? styles.active : ""
                }
                onClick={() => setSelectedDough(dough)}
              >
                {dough.label}
              </li>
            ))}
          </ul>

          {/* Размер пиццы */}
          <ul>
            {SIZES.map((size) => (
              <li
                key={size.value}
                className={
                  selectedSize.value === size.value ? styles.active : ""
                }
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
            {cartItem && ` (${cartItem.quantity})`}
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;
