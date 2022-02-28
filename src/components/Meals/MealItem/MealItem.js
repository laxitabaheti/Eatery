import styles from "./MealItem.module.css";
import { useContext } from "react";
import MealItemForm from "../MealItem/MealItemForm";
import CartContext from "../../Store/CartContext";
const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addtoCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={styles.mealList}>
      <div>
        <h3 className={styles.name}>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addtoCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
