import styles from "./MealItem.module.css";
import MealItemForm from "../MealItem/MealItemForm";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={styles.mealList}>
      <div>
        <h3 className={styles.name}>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};
export default MealItem;
