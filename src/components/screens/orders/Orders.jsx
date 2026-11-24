import styles from "./Orders.module.css";

function Orders({ orders = [], removeOrder, isHistory = false }) {
  return (
    <section className={styles.delivery}>
      <div className={styles.heading}>
        <span className={styles.subtitle}>REACTPIZZA</span>

        {/* <h2>{isHistory ? "📦 Мои заказы" : "🚚 Мои заказы"}</h2> */}
        <h2>{"📦 Мои заказы"}</h2>

        <p>{"История доставленных заказов"}</p>
      </div>

      {orders.length === 0 ? (
        <div className={styles.empty}>
          <span>🍕</span>
          <h3>{"Orders пока нет"}</h3>
          <p>{"Здесь появятся доставленные заказы."}</p>
        </div>
      ) : (
        <div className={styles.orders}>
          {orders.map((order) => (
            <article className={styles.order} key={order.id}>
              <div className={styles.orderHeader}>
                <div>
                  <h3>Заказ №{order.id}</h3>

                  <span>
                    {new Date(order.createdAt).toLocaleString("ru-RU")}
                  </span>
                </div>

                <span
                  className={
                    order.isDelivered ? styles.delivered : styles.processing
                  }
                >
                  {order.isDelivered ? "✓ Доставлено" : "🚚 В пути"}
                </span>
              </div>

              <div className={styles.items}>
                {order.items.map((item) => (
                  <div className={styles.item} key={item.itemId}>
                    <img src={item.imageUrl} alt={item.title} />

                    <div>
                      <h4>{item.title}</h4>
                      <span>
                        {item.quantity} × {item.price} ₽
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.orderFooter}>
                <span>Итого:</span>
                <strong>{order.totalPrice} ₽</strong>
              </div>

              {order.isDelivered && (
                <button
                  className={styles.deleteButton}
                  onClick={() => removeOrder(order.id)}
                >
                  Удалить из истории заказов
                </button>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Orders;
