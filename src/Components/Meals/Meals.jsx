import Meal from "../Meal/Meal";
import {  useLoaderData } from "react-router-dom"

export const Meals = () => {
    const mealsCategories = useLoaderData();
    const meals = mealsCategories.categories;
    console.log(meals)
    return (
    <div>

<div className="mt-5">
        <h1 className="text-3xl font-semibold text-center">Total meals {meals.length}</h1>
            <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            {
                meals.map((meal) =><Meal key={meal.idCategory} meal={meal}></Meal>)
            }
            </div>
        </div>
    </div>
  )
}
