import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
// import CartProvider from "../Store/CartProvider";
import CartContext from "../Store/CartContext";
import { useContext, useEffect, useState } from "react";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const [bumpisthere, SetBumpIsThere] = useState(false);

  const numberOfCartItems = cartCtx.items.reduce((numCurrent, item) => {
    return numCurrent + item.amount;
  }, 0);

  const { items } = cartCtx;

  const buttonClasses = `${styles.button} ${bumpisthere ? styles.bump : " "}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    SetBumpIsThere(true);
    const Indetifier = setTimeout(() => {
      SetBumpIsThere(false);
    }, 300);
    return () => {
      clearTimeout(Indetifier);
    };
  }, [items]);

  return (
    <button onClick={props.onClick} className={buttonClasses}>
      <span className={styles.cartIcon}>
        <CartIcon />
      </span>
      <span className={styles.cart}>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
