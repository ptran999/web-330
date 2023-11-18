/* 
    Title: calorie-converter.js
    Author: Phuong Tran
    Date: 11/14/2023
    Description:  The CalorieConverter class.
*/

// Import the FoodModel class
import { FoodModel } from "./food-model.js"

//Create the CaloriesConverter class with data and a method to find food
export class CalorieConverter {
    //populate static variable with 6 FoodModel objects
    static data = [
        new FoodModel(1007, 'Egg', 78),
        new FoodModel(1008, 'Apple', 95),
        new FoodModel(1009, 'Hamburger', 354),
        new FoodModel(1010, 'Fries', 400),
        new FoodModel(1011, 'Banana', 105),
        new FoodModel(1012, 'Soda', 150)
    ]

    static find(str_foodName) {
        //Return a new array of data with the object matching the parameter string
        return CalorieConverter.data.filter(food => food.name.toLowerCase() === str_foodName.toLowerCase());
    } 
   
}


