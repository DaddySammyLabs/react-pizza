import { NavLink } from "react-router-dom";
import { useApp } from "@/context/AppContext";

import styles from "./Header.module.css";

function Header() {
  const { cartCount = 0, upButton } = useApp();

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo} onClick={upButton}>
        🍕 React<span>Pizza</span>
      </NavLink>

      <nav className={styles.navigation}>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/orders">Заказы</NavLink>
        <NavLink to="/delivery">Доставка</NavLink>
      </nav>

      <NavLink to="/cart" className={styles.cartButton}>
        <span>🛒</span>
        Корзина
        <span className={styles.cartCount}>{cartCount}</span>
      </NavLink>
    </header>
  );
}

export default Header;
