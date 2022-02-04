import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";

import MealItem from "./MealItem/MealItem";
const Dummy_Meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "finest fish and veggies",
    price: 22.99
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A German Speciality!",
    price: 16.5
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, Raw and Meaty",
    price: 12.99
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy and green",
    price: 18.99
  }
];
const AvailableMeals = () => {
  const MealsList = Dummy_Meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });
  return (
    <Card className={styles.mealCard}>
      <ul>{MealsList}</ul>
    </Card>
  );
};
export default AvailableMeals;
