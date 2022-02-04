import styles from "./MealsSummery.module.css";

const MealsSummery = () => {
  return (
    <section className={styles.summery_card}>
      <h2>Delicious Food, Delivered To You!!</h2>
      <p>
        Choose your favourite meal from our broad selection of availabel meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All of our meals are cooked with high-quality ingredients,just-in-time
        and o course by experienced chefs !
      </p>
    </section>
  );
};

export default MealsSummery;
