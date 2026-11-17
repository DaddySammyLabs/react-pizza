import styles from "./Cart.module.css";

function CartInfo({ cart, totalPrice, creatDelivery, children }) {
  // const handleCheckout = async () => {
  //   try {
  //     await checkout();
  //     alert("Заказ успешно оформлен! 🍕");
  //   } catch (error) {
  //     console.error("Ошибка оформления заказа:", error);
  //     alert("Не удалось оформить заказ");
  //   }
  // };

  return (
    <section className={styles.cart} id="cart">
      <h2 className={styles.title}>🛒 Корзина</h2>

      {cart.length === 0 ? (
        <div className={styles.empty}>
          <span>🍕</span>
          <p className={styles.text}>Корзина пока пустая</p>
          <small className={styles.subtext}>Выбери свою любимую пиццу!</small>
        </div>
      ) : (
        <>
          {children}

          <div className={styles.total}>
            <div className={styles.totalprice}>
              <span>Итого:</span>
              <strong>{totalPrice} ₽</strong>
            </div>

            <button onClick={creatDelivery}>Оформить заказ</button>
          </div>
        </>
      )}
    </section>
  );
}

export default CartInfo;
