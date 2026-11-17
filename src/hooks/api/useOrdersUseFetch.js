import axios from "axios";
import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const useOrders = ({ url, cartItems, clearCart, totalPrice }) => {
  const { data: orders, loading, error, refetch } = useFetch(url);

  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [createdOrderId, setCreatedOrderId] = useState(null);

  const orderArticle = Number(`${cartItems.length}${totalPrice}`);

  const createOrder = async () => {
    if (cartItems.length === 0) return null;

    try {
      const order = {
        items: { idOrder: orderArticle, ...cartItems },
        totalPrice,
      };

      const { data } = await axios.post(url, order);

      setIsOrderComplete(true);
      setCreatedOrderId(data.id);

      clearCart();

      // Повторно загружаем заказы
      refetch();

      return data;
    } catch (error) {
      console.error("Failed to create order:", error);
      return null;
    }
  };

  const removeOrder = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);

      refetch();
    } catch (error) {
      console.error("Failed to remove order:", error);
    }
  };

  return {
    orders,
    loading,
    error,
    createOrder,
    removeOrder,
    isOrderComplete,
    setIsOrderComplete,
    createdOrderId,
  };
};

export default useOrders;
