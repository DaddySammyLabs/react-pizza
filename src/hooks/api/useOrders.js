import axios from "axios";
import { useEffect, useState } from "react";

const useOrders = ({ url, cartItems = [], clearCart, totalPrice }) => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [orders, setOrders] = useState([]);
  const [createdOrderId, setCreatedOrderId] = useState(null);

  // const orderArticle = Number(`${cartItems.length}${totalPrice}`);

  const nowDate = new Date().toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(url);

        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  const createOrder = async () => {
    if (cartItems.length === 0) {
      return null;
    }

    try {
      const order = {
        items: cartItems,
        dateOrder: Date.now(), // "dateOrder": 1794934436986,
        date: nowDate, //"date": "17.11.2026, 19:53",
        totalPrice,
      };

      const { data } = await axios.post(url, order);
      setOrders((prevOrders) => [...prevOrders, data]);

      // setCartItems([]);
      clearCart();
      setIsOrderComplete(true);
      setCreatedOrderId(data.id);

      return data;
    } catch (error) {
      console.error("Failed to create order:", error);

      return null;
    }
  };

  // Удаление одного заказа
  const removeOrder = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
    } catch (error) {
      console.error("Failed to remove order:", error);
    }
  };

  // Очистка списка заказов
  const clearOrders = async () => {
    try {
      await Promise.all(
        orders.map((item) => axios.delete(`${url}/${item.id}`)),
      );

      setOrders([]);
    } catch (err) {
      console.error("Failed to clear orders:", err);
    }
  };

  return {
    orders,
    createOrder,
    removeOrder,
    clearOrders,

    isOrderComplete,
    setIsOrderComplete,
    createdOrderId,
  };
};

export default useOrders;
