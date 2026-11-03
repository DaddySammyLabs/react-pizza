import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "@/components/screens/header/Header";

import Home from "@/pages/home/Home";
// import OrdersPage from "@/pages/orders/OrdersPage";
// import DeliveryPage from "./pages/delivery/DeliveryPage";
// import CartPage from "@/pages/cart/CartPage";
import Footer from "@/components/ui/footer/Footer";

import styles from "@/assets/styles/App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/orders" element={<OrdersPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/cart" element={<CartPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
