import CartInfo from "./CartInfo";
import CartItem from "@/components/ui/cards/cart-item/CartItem";
import styles from "./Cart.module.css";

function Cart({ cart, changeQuantity, totalPrice, checkout }) {
  return (
    <CartInfo cart={cart} checkout={checkout} totalPrice={totalPrice}>
      <div className={styles.items}>
        {cart.map((item) => (
          <CartItem
            key={item.title}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            itemId={item.id}
            quantity={item.quantity}
            changeQuantity={changeQuantity}
          />
        ))}
      </div>
    </CartInfo>
  );
}

export default Cart;
