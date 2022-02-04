import { Fragment } from "react";
import styles from "./index.module.css";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";

export default function App() {
  return (
    <Fragment className={styles.body}>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}
