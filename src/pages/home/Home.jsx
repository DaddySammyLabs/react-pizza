import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useApp } from "@/context/AppContext";

import Hero from "@/components/screens/hero/Hero";
import Filters from "@/components/screens/filters/Filters";
import PizzaCard from "@/components/ui/cards/pizza-card/Card";

import styles from "./Home.module.css";

function Home() {
  const { items, cart, addToCart } = useApp();

  const [parent] = useAutoAnimate({
    duration: 300,
    easing: "ease-in-out",
  });

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

          {/* <div ref={parent} className={styles.pizzaGrid}>
            {items.map((pizza) => {
              // const cartItem = cart.find((item) => item.itemId === pizza.id)
              const cartItem = cart.find(
                (item) => Number(item.itemId) === Number(pizza.id),
              );

              return (
                <PizzaCard
                  key={pizza.id}
                  item={pizza}
                  addToCart={addToCart}
                  // quantity={cartItem?.quantity || 0}
                  quantity={cartItem?.quantity ?? 0}
                />
              );
            })}
          </div> */}

          <div ref={parent} className={styles.pizzaGrid}>
            {items.map((pizza) => (
              <PizzaCard
                key={pizza.id}
                item={pizza}
                addToCart={addToCart}
                cart={cart}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
