import Hero from "@/components/screens/hero/Hero";
import Categories from "@/components/ui/categories/Categories";
import Filters from "@/components/screens/filters/Filters";
import PizzaCard from "@/components/ui/pizza-card/Card";

import { useApp } from "@/context/AppContext";

import styles from "./Home.module.css";

function Home() {
  const { activeCategory, setActiveCategory, filteredPizzas } = useApp();

  return (
    <>
      <Hero />

      <main className={styles.container} id="menu">
        <section className={styles.menu}>
          <div className={styles.heading}>
            <div>
              <h2>Наше меню</h2>
              <p>Выбирай свою любимую пиццу 🍕</p>
            </div>
          </div>

          <div className={styles.filters}>
            <Filters />
          </div>

          <div className={styles.pizzaGrid}>
            {filteredPizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
