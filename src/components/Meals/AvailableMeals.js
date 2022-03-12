import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

import MealItem from "./MealItem/MealItem";
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [httpError, setHttpError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchMeal = async () => {
      const response = await fetch(
        "https://mealapp-f7acc-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Wrong");
      }

      const data = await response.json();
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        });
      }

      setIsLoading(false);
      setMeals(loadedMeals);
    };

    fetchMeal().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
      console.log(httpError);
    });
  }, []);

  if (isLoading) {
    return <p className={styles.loading_Title_Display}>Loading......</p>;
  }
  if (httpError) {
    return (
      <section className={styles.error_Title_Display}>{httpError}</section>
    );
  }

  const MealsList = meals.map((meal) => {
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
