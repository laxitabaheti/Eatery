import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
const Cart = (props) => {
  const cartItem = (
    <ul className={styles.cartList}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 22.99 }].map((items) => (
        <li className={styles.list} key={items.id}>
          {" "}
          {items.name}
        </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItem}
      <div className={styles.cartAmount}>
        <span>Total Amount</span>
        <span>$22.22</span>
      </div>
      <div>
        <button className={styles.closeButton}>Close</button>
        <button className={styles.orderButton}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
