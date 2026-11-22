import { NavLink } from "react-router-dom";
import { useUser } from "@/context/UserContext";

import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const { username, setUsername } = useUser();

  return (
    <div className={styles.profile}>
      <div className={styles.heading}>
        <div className={styles.title}>
          <img src="/icons/profile.svg"></img>
          <h2 className={styles.user}>{username}</h2>
        </div>

        <p>Следи за статусом своих заказов</p>
      </div>

      <nav className={styles.navigation}>
        <NavLink to="/">
          <img src="/icons/profile.svg"></img>Главная
        </NavLink>
        <NavLink to="/orders">
          {" "}
          <img src="/icons/heart.svg"></img>Покупки
        </NavLink>
        <NavLink to="/delivery">
          <img src="/icons/cart.svg"></img>Доставка
        </NavLink>
      </nav>
      <div className={styles.news}></div>
      <div className={styles.banner}>
        <NavLink className={styles.button} to="/">
          Выбрать пиццу →
        </NavLink>
      </div>
    </div>
  );
};

export default UserProfile;
