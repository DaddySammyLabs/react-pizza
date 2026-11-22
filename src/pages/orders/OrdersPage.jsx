//
import { NavLink } from "react-router-dom";
import { useApp } from "@/context/AppContext";

import Orders from "@/components/screens/orders/Orders";

import styles from "./OrdersPage.module.css";

const OrdersPage = () => {
  // const { data: orders, loading, error, refetch } = useFetch(ORDERS_URL);
  const { deliveries } = useApp();

  return <Orders />;
};

export default OrdersPage;
