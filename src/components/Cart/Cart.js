import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../Store/CartContext";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const CartCxt = useContext(CartContext);
  const totalAmount = `$${CartCxt.totalAmount.toFixed(2)}`;
  const cartHasItems = CartCxt.items.length > 0;
  const itemInCardAddHandler = (item) => {
    CartCxt.addItem({ ...item, amount: 1 });
  };
  const itemInCardRemoveHandler = (id) => {
    CartCxt.removeItem(id);
  };
  const [isOrdering, setIsOrdering] = useState(false);

  const orderHandler = () => {
    setIsOrdering(true);
  };
  const cartItem = (
    <ul className={styles.cartList}>
      {CartCxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={itemInCardAddHandler.bind(null, item)}
          onRemove={itemInCardRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={props.onClose}>
      {cartItem}
      <div className={styles.cartAmount}>
        <span>Total Amount </span>
        <span>{totalAmount}</span>
      </div>
      {isOrdering && <CheckoutForm onClick={props.onClose} />}{" "}
      {!isOrdering && (
        <div>
          <button onClick={props.onClose} className={styles.closeButton}>
            Close
          </button>
          {cartHasItems && (
            <button onClick={orderHandler} className={styles.orderButton}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
