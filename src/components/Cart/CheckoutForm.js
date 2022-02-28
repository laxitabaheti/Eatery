// import { useState } from "react";
import { useRef } from "react";
import styles from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  // const [name, setName] = useState("");
  // const [street, setStreet] = useState("");
  // const [postalcode, setPostalCode] = useState("");

  // const nameChangeHandler = (event) => {
  //   setName(event.target.value);
  // };
  // const streetNameChangeHandler = (event) => {
  //   setStreet(event.target.value);
  // };
  // const postalCodeChangeHandler = (event) => {
  //   setPostalCode(event.target.value);
  // };

  const confirmHandler = (event) => {
    event.preventDefault();

    const userName = nameInputRef.current.value;
    const userStreet = streetInputRef.current.value;
    const userPostalCode = postalCodeInputRef.current.value;
    const userCity = cityInputRef.current.value;
    const userData = {
      userName,
      userPostalCode,
      userStreet,
      userCity
    };
    console.log(userData);
    nameInputRef.current.value = " ";
    streetInputRef.current.value = " ";
    postalCodeInputRef.current.value = " ";
    cityInputRef.current.value = " ";

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

        <label htmlFor="Street">Street</label>
        <input
          type="text"
          id="Street"
          //  onChange={streetNameChangeHandler}
          ref={streetInputRef}
        />

        <label htmlFor="Postal Code">Postal code</label>
        <input
          type="text"
          // onChange={postalCodeChangeHandler}
          id="Postal Code"
          ref={postalCodeInputRef}
        />
        <label htmlFor="City">City</label>
        <input
          type="text"
          // onChange={postalCodeChangeHandler}
          id="City"
          ref={cityInputRef}
        />
        <div className={styles.buttons}>
          <button type="button" onClick={props.onClick}>
            Cancel
          </button>
          <button>Confirm</button>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
