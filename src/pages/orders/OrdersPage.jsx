//
import { NavLink } from "react-router-dom";
import { useApp } from "@/context/AppContext";

import Orders from "@/components/screens/orders/Orders";

import styles from "./OrdersPage.module.css";

const OrdersPage = () => {
  const { orders, removeOrder, onDeliveryComplete } = useApp();

  return (
    <Orders
      orders={orders}
      removeOrder={removeOrder}
      onDeliveryComplete={onDeliveryComplete}
    />
  );
};

export default OrdersPage;
