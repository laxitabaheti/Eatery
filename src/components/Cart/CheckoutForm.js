import { useState } from "react";
import { useRef } from "react";
import styles from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const [formInputValidity, setFormInputValidity] = useState({
    nameIsValid: true,
    streetIsValid: true,
    postalCodeIsValid: true,
    cityIsValid: true
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const userName = nameInputRef.current.value;
    const userStreet = streetInputRef.current.value;
    const userPostalCode = postalCodeInputRef.current.value;
    const userCity = cityInputRef.current.value;

    const isValid = (validityitem) => {
      return validityitem.trim() !== "";
    };
    const charis5lengthlong = (validityItem) => {
      return validityItem.trim().length === 5;
    };

    const enterednameIsValid = isValid(userName);
    const enteredstreetIsValid = isValid(userStreet);
    const enteredpostalCodeIsValid = charis5lengthlong(userPostalCode);
    const enteredcityIsValid = isValid(userCity);

    setFormInputValidity({
      nameIsValid: enterednameIsValid,
      streetIsValid: enteredstreetIsValid,
      postalCodeIsValid: enteredpostalCodeIsValid,
      cityIsValid: enteredcityIsValid
    });

    const formIsValid =
      enterednameIsValid &&
      enteredstreetIsValid &&
      enteredpostalCodeIsValid &&
      enteredcityIsValid;
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      userName,
      userStreet,
      userCity,
      userPostalCode
    });
    // nameInputRef.current.value = " ";
    // streetInputRef.current.value = " ";
    // postalCodeInputRef.current.value = " ";
    // cityInputRef.current.value = " ";
  };

  // sending data from a child component to parent component
  // we are going to use a function

  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.form}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          // onChange={nameChangeHandler}
          ref={nameInputRef}
        />
        {!formInputValidity.nameIsValid && <p>please enter correct name!</p>}

        <label htmlFor="Street">Street</label>
        <input
          type="text"
          id="Street"
          //  onChange={streetNameChangeHandler}
          ref={streetInputRef}
        />
        {!formInputValidity.streetIsValid && (
          <p>please enter correct street!</p>
        )}

        <label htmlFor="Postal Code">Postal code</label>
        <input
          type="text"
          // onChange={postalCodeChangeHandler}
          id="Postal Code"
          ref={postalCodeInputRef}
        />
        {!formInputValidity.postalCodeIsValid && (
          <p>please enter correct PostalCode!</p>
        )}

        <label htmlFor="City">City</label>
        <input
          type="text"
          // onChange={postalCodeChangeHandler}
          id="City"
          ref={cityInputRef}
        />

        {!formInputValidity.cityIsValid && (
          <p>please enter correct name of the city!</p>
        )}
        <div className={styles.buttons}>
          <button
            className={styles.buttonCancel}
            type="button"
            onClick={props.onClick}
          >
            Cancel
          </button>
          <button className={styles.buttonConfirm} type="button"onClick={confirmHandler}>
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
