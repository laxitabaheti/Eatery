import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={styles.list}>
      <div className={styles.cartItem_name}>
        <h3>{props.name}</h3>
        <div className={styles.cartItem_summery}>
          <span className={styles.price}>{`$${props.price.toFixed(2)}`}</span>
          <span className={styles.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={styles.adsub_Buttons}>
        <button type="button" onClick={props.onAdd}>
          +
        </button>
        <button type="button" onClick={props.onRemove}>
          -
        </button>
      </div>
    </li>
  );
};
export default CartItem;
