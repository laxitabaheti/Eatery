import Modal from "../UI/Modal";
import React, { useContext, useState } from "react";
import CartContext from "../Store/CartContext";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

import CheckoutForm from "./CheckoutForm";

const Cart = (props) => {
  const CartCxt = useContext(CartContext);
  const totalAmount = `$${CartCxt.totalAmount.toFixed(2)}`;
  const cartHasItems = CartCxt.items.length > 0;
  const itemInCardAddHandler = (item) => {
    CartCxt.addItem({ ...item, amount: 1 });
  };
  const itemInCardRemoveHandler = (id) => {
    CartCxt.removeItem(id);
  };
  const [isOrdering, setIsOrdering] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const orderHandler = () => {
    setIsOrdering(true);
  };

  const submitOrderHandler = async (userdata) => {
    setIsSubmitting(true);
    await fetch(
      "https://mealapp-f7acc-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userdata,
          orderItems: CartCxt.items
        })
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    CartCxt.clearCart();
  };

  const cartItem = (
    <ul className={styles.cartList}>
      {CartCxt.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={itemInCardAddHandler.bind(null, item)}
          onRemove={itemInCardRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const CartModalContent = (
    <React.Fragment>
      {cartItem}
      <div className={styles.cartAmount}>
        <span>Total Amount </span>
        <span>{totalAmount}</span>
      </div>
      {isOrdering && (
        <CheckoutForm onConfirm={submitOrderHandler} onClick={props.onClose} />
      )}{" "}
      {!isOrdering && (
        <div>
          <button onClick={props.onClose} className={styles.closeButton}>
            Close
          </button>
          {cartHasItems && (
            <button onClick={orderHandler} className={styles.orderButton}>
              Order
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  );

  const submittingModalContent = <p>Sending order ...</p>;

  const didSubmitModalContent = (
    
      
      <div>
        Order Placed
        <button onClick={props.onClose} className={styles.closeButton}>
          Close
        </button>
      </div>
   
  );

  return (
    <Modal onClick={props.onClose}>
      {!isSubmitting && !didSubmit && CartModalContent}
      {isSubmitting && !didSubmit && submittingModalContent}
      {didSubmit && !isSubmitting && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
