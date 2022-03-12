import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={styles.list}>
      <div className={styles.nameItem}>{props.name}</div>
      <div className={styles.listItem}>
        <div className={styles.price}>{`$${props.price.toFixed(2)}`}</div>
        <div className={styles.amount}>x{props.amount}</div>
        <div className={styles.buttons}>
          <button type="button" onClick={props.onRemove}>
            -
          </button>
          <button type="button" onClick={props.onAdd}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
