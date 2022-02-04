import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  return (
    <form className={styles.meal_form}>
      <Input
        label="Amount"
        input={{
          id: "Amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1"
        }}
      />
      <div>
        <button className={styles.button}> + Add </button>
      </div>
    </form>
  );
};
export default MealItemForm;
