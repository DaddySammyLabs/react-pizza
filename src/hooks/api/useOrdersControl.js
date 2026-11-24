import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const useOrdersControl = ({ url, cartItems = [], clearCart, totalPrice }) => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orders, setOrders] = useState([]);
  const [createdOrderId, setCreatedOrderId] = useState(null);

  // Получение заказов
  const fetchOrders = useCallback(async () => {
    try {
      const { data } = await axios.get(url);
      setOrders(data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  }, [url]);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  // Создание заказа / доставки
  const createOrder = async () => {
    if (!cartItems.length) return null;

    try {
      const order = {
        items: cartItems,
        dateOrder: Date.now(),
        date: new Date().toLocaleString("ru-RU"),
        totalPrice,
        isDelivered: false,
      };

      const { data } = await axios.post(url, order);

      setOrders((prev) => [...prev, data]);

      // Очищаем корзину только если передана функция
      if (clearCart) {
        await clearCart();
      }

      setIsOrderComplete(true);
      setCreatedOrderId(data.id);

      return data;
    } catch (error) {
      console.error("Failed to create order:", error);
      return null;
    }
  };

  // Перенос доставки в завершённые заказы
  const completeDelivery = async (id, ordersUrl, onOrderCreated) => {
    const delivery = orders.find((item) => item.id === id);

    if (!delivery || delivery.isDelivered) return null;

    try {
      // 1. Создаём заказ в ORDERS
      const completedOrder = {
        ...delivery,
        isDelivered: true,
        deliveredAt: Date.now(),
      };

      const { data } = await axios.post(ordersUrl, completedOrder);

      // 2. Удаляем доставку из DELIVERY
      await axios.delete(`${url}/${id}`);

      // 3. Удаляем доставку из локального состояния
      setOrders((prev) => prev.filter((item) => item.id !== id));

      // 4. Обновляем локальное состояние ORDERS
      onOrderCreated?.(data);

      return data;
    } catch (error) {
      console.error("Failed to complete delivery:", error);
      return null;
    }
  };

  // Добавление заказа в локальное состояние
  const addOrderToState = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  const removeOrder = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setOrders((prev) => prev.filter((order) => order.id !== id));
    } catch (error) {
      console.error("Failed to remove order:", error);
    }
  };

  const clearOrders = async () => {
    try {
      await Promise.all(
        orders.map((item) => axios.delete(`${url}/${item.id}`)),
      );
      setOrders([]);
    } catch (error) {
      console.error("Failed to clear orders:", error);
    }
  };

  return {
    orders,
    createOrder,
    removeOrder,
    clearOrders,
    completeDelivery,
    addOrderToState,

    isOrderComplete,
    setIsOrderComplete,
    createdOrderId,
  };
};

export default useOrdersControl;

//
//
// 2. Изменяем useAppState
// Нужно связать два экземпляра useOrders: один работает с доставками, второй — с завершёнными заказами.
// const {
//   orders: deliveries,
//   createOrder: creatDelivery,
//   removeOrder: removeDelivery,
//   completeDelivery,
// } = useOrders({
//   url: DELIVERY,
//   cartItems: cart,
//   clearCart,
//   totalPrice,
// });

// const { orders, createOrder, removeOrder, clearOrders, addOrderToState } =
//   useOrders({
//     url: ORDERS,
//     cartItems: deliveries,
//     totalPrice,
//   });

// // Обработка завершения доставки
// const onDeliveryComplete = (id) => {
//   return completeDelivery(id, ORDERS, addOrderToState);
// };

// И добавь в return твоего useAppState:
// return {
//   // Остальные свойства...

//   deliveries,
//   creatDelivery,
//   removeDelivery,

//   orders,
//   createOrder,
//   removeOrder,
//   clearOrders,

//   onDeliveryComplete,
// };

//
//
// 3. Изменяем Delivery
// Передаём функцию завершения доставки в компонент.

// function Delivery({ deliveries = [], onDeliveryComplete }) {
//   const [parent] = useAutoAnimate({
//     duration: 300,
//     easing: "ease-in-out",
//   });

//   return (
//     <section className={styles.delivery}>
//       <Heading />

//       <div ref={parent}>
//         {deliveries.length > 0 ? (
//           [...deliveries].reverse().map((delivery) => (
//             <InfoCard
//               key={delivery.id}
//               items={delivery.items}
//               totalPrice={delivery.totalPrice}
//               orderArticle={delivery.dateOrder}
//               delivered={delivery.isDelivered}
//             >
//               <div className={styles.cardGrid}>
//                 {delivery.items.map((item, index) => (
//                   <CardOrder
//                     key={`${delivery.id}-${item.id}-${index}`}
//                     title={item.title}
//                     imageUrl={item.imageUrl}
//                     price={item.price}
//                     quantity={item.quantity}
//                   />
//                 ))}
//               </div>

//               {!delivery.isDelivered && (
//                 <button onClick={() => onDeliveryComplete(delivery.id)}>
//                   Доставлено
//                 </button>
//               )}
//             </InfoCard>
//           ))
//         ) : (
//           <Empty />
//         )}
//       </div>
//     </section>
//   );
// }

//
// 4. Важный момент в InfoCard
// У тебя уже предусмотрен параметр delivered, поэтому здесь практически ничего менять не нужно:
//<span className={delivered ? styles.delivered : styles.processing}>
//  {delivered ? "✓ Доставлено" : "🚚 В пути"}
//</span>

// 5. Подключаем функцию в DeliveryPage
// Например, если DeliveryPage получает состояние через useApp:
// import { useApp } from "@/context/AppContext";
// import Delivery from "@/components/screens/delivery/Delivery";

// const DeliveryPage = () => {
//   const {
//     deliveries,
//     onDeliveryComplete,
//   } = useApp();

//   return (
//     <Delivery
//       deliveries={deliveries}
//       onDeliveryComplete={onDeliveryComplete}
//     />
//   );
// };
// export default DeliveryPage;

//
// 6. Как будут выглядеть данные
// DELIVERY — активные доставки:
// {
//   "id": 1,
//   "items": [],
//   "totalPrice": 978,
//   "isDelivered": false
// }
// После нажатия «Доставлено» этот объект будет перенесён в ORDERS:
// {
//   "id": 1,
//   "items": [],
//   "totalPrice": 978,
//   "isDelivered": true,
//   "deliveredAt": 1794939000000
// }

// Ещё один нюанс: перенос состоит из двух серверных запросов (POST и DELETE).
// Если первый выполнится успешно, а второй завершится ошибкой,
// заказ окажется одновременно в двух списках. Для полноценного
// приложения стоит предусмотреть защиту от повторного переноса.

// И ещё: оба экземпляра useOrders должны находиться внутри одного
// общего AppProvider, чтобы обновление orders сразу отражалось на
// странице истории заказов без перезагрузки.

// Так ты получишь единую систему управления жизненным циклом заказа:
// корзина → доставка → завершённые заказы.
