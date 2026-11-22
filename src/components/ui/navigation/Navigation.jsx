import { NavLink } from "react-router-dom";
import { useApp } from "@/context/AppContext";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const { cartCount = 0, upButton } = useApp();

  return (
    <div className={styles.menu}>
      {/* <NavLink to="/" className={styles.logo} onClick={upButton}>
        🍕 React<span>Pizza</span>
      </NavLink> */}

      <nav className={styles.navigation}>
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
          Главная
        </NavLink>
        <NavLink to="/profile">Профиль</NavLink>
        <NavLink to="/delivery">Доставка</NavLink>
      </nav>

      <NavLink to="/cart" className={styles.cartButton}>
        <span>🛒</span>
        {/* Корзина */}
        <span className={styles.cartCount}>{cartCount}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
