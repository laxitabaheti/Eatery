import { useState } from "react";
import styles from "./index.module.css";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";
export default function App() {
  const [cartDisplay, SetCartDisplay] = useState(false);
  const CloseCartHandler = () => {
    SetCartDisplay(false);
  };

  const CartDisplayHandler = () => {
    SetCartDisplay(true);
  };
  return (
    <CartProvider>
      <div className={styles.body}>
        {cartDisplay && <Cart onClose={CloseCartHandler} />}
        <Header cartclickHandler={CartDisplayHandler} />
        <main>
          <Meals />
        </main>
      </div>
    </CartProvider>
  );
}
