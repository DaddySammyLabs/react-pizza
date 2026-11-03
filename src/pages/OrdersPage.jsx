function OrdersPage() {
  const { data: orders, loading, error, refetch } = useFetch(ORDERS_URL);

  if (loading) return <h2>Загрузка заказов...</h2>;

  if (error) {
    return (
      <div>
        <h2>Ошибка загрузки заказов: {error}</h2>
        <button onClick={refetch}>Повторить</button>
      </div>
    );
  }

  const deliveredOrders = orders.filter((order) => order.delivered === true);

  return <Delivery orders={deliveredOrders} isHistory />;
}

export default OrdersPage;
