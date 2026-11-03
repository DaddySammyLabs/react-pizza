import styles from "./Footer.module.css";
import { useApp } from "@/context/AppContext";

const Footer = () => {
  const { upButton } = useApp();

  return (
    <>
      <footer className={styles.footer} id="about">
        <h2 onClick={upButton}>🍕 ReactPizza</h2>
        <p>Вкусная пицца — счастливые моменты.</p>
        <span>© 2026 PizzaHouse</span>
      </footer>
    </>
  );
};

export default Footer;
