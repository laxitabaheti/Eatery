import Input from "../../UI/Input";
import { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, SetAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      SetAmountIsValid(false);
      return;
    } else {
      SetAmountIsValid(true);
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form onSubmit={submitHandler} className={styles.meal_form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "Amount_" + props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1"
        }}
      />
      <div>
        <button className={styles.button} type="submit">
          Add
        </button>
        {!amountIsValid && (
          <p className={styles.wrongInputError}>Enter a valid amount (1-5)</p>
        )}
      </div>
    </form>
  );
};
export default MealItemForm;
