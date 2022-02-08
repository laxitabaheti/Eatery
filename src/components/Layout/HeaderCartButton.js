import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
// import CartProvider from "../Store/CartProvider";
import CartContext from "../Store/CartContext";
import { useContext } from "react";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((numCurrent, item) => {
    return numCurrent + item.amount;
  }, 0);

  return (
    <button onClick={props.onClick} className={styles.button}>
      <span className={styles.cartIcon}>
        <CartIcon />
      </span>
      <span className={styles.cart}>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
