import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Heading, Empty } from "./InfoDelivery";

import CardOrder from "@/components/ui/cards/order-item/CardOrder";
import InfoCard from "@/components/ui/cards/order-item/Info";

import styles from "./Delivery.module.css";

function Delivery({ deliveries = [], onDeliveryComplete }) {
  const [parent] = useAutoAnimate({
    duration: 300,
    easing: "ease-in-out",
  });

  return (
    <section className={styles.delivery}>
      <Heading />

      <div ref={parent}>
        {deliveries.length > 0 ? (
          [...deliveries].reverse().map((delivery) => (
            <InfoCard
              key={delivery.id}
              items={delivery.items}
              totalPrice={delivery.totalPrice}
              orderArticle={delivery.dateOrder}
              delivered={delivery.isDelivered}
            >
              <div className={styles.cardGrid}>
                {delivery.items.map((item, index) => (
                  <CardOrder
                    // key={item.id}
                    key={`${delivery.id}-${item.id}-${index}`}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
              </div>

              {!delivery.isDelivered && (
                <button
                  className={styles.deliveryComplete}
                  onClick={() => onDeliveryComplete(delivery.id)}
                >
                  Нажать когда заказ Доставлено
                </button>
              )}
            </InfoCard>
          ))
        ) : (
          <Empty />
        )}
      </div>
    </section>
  );
}

export default Delivery;

// {[...deliveries].reverse().map((delivery) => (
// Альтернативный вариант: если хочешь сортировать именно по дате создания заказа, а не по индексу массива:
// {[...deliveries]
//   .sort((a, b) => b.dateOrder - a.dateOrder)
//   .map((delivery) => (
//     // твой JSX
//   ))}
