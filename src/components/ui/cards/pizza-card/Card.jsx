import useItemOptions from "@/hooks/useItemOptions";
import useCartItem from "@/hooks/useCartItem";
import styles from "./Card.module.css";

function Card({ item, addToCart, cart = [] }) {
  // Цена зависит от размера
  const {
    DOUGHS,
    selectedSize,
    setSelectedSize,
    selectedDough,
    setSelectedDough,
    currentPrice,
  } = useItemOptions(item);

  // Ищем конкретную комбинацию в корзине
  const { quantity, cartItem } = useCartItem(
    item,
    cart,
    selectedSize,
    selectedDough,
  );
  // const cartItem = cart.find(
  //   (cartItem) =>
  //     Number(cartItem.itemId) === Number(item.id) &&
  //     Number(cartItem.size) === selectedSize.value &&
  //     cartItem.dough === selectedDough.value,
  // );

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
