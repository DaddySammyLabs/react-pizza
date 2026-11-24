import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@/components/screens/header/Header";
import Navigation from "./components/ui/navigation/Navigation";
import Footer from "@/components/ui/footer/Footer";

import Home from "@/pages/home/Home";
import UserProfilePage from "@/pages/UserProfilePage";
import OrdersPage from "@/pages/orders/OrdersPage";
import DeliveryPage from "./pages/DeliveryPage";
import CartPage from "@/pages/CartPage";

import styles from "@/assets/styles/App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header className={styles.header} />
        <Navigation className={styles.navigation} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/cart" element={<CartPage />} />

          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
