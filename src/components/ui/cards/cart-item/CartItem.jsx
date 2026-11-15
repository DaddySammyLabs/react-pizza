import styles from "./CartItem.module.css";

function CartItem({
  title,
  imageUrl,
  price,
  quantity,
  itemId,
  changeQuantity,
}) {
  return (
    <>
      {/* <div className={styles.items}> */}

      <div className={styles.item}>
        <div className={styles.itemInfo}>
          <img src={imageUrl} alt={title} />

          <div>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.price}>{price} ₽</span>
          </div>
        </div>

        {changeQuantity ? (
          <div className={styles.quantity}>
            <button onClick={() => changeQuantity(itemId, -1)}>−</button>

            <span>{quantity}</span>

            <button onClick={() => changeQuantity(itemId, 1)}>+</button>
          </div>
        ) : (
          <span>{quantity}</span>
        )}

        <strong className={styles.subtotal}>{price * quantity} ₽</strong>
      </div>

      {/* </div> */}
    </>
  );
}

export default CartItem;
