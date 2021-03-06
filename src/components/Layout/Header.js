import MealImg from "../Assets/Meals.JPG";
import styles from "./Header.module.css";
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header_content}>
        <h1>Eatery</h1>
        <HeaderCartButton onClick={props.cartclickHandler} />
      </header>
      <div className={styles.navbar_img}>
        <img src={MealImg} alt="table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
