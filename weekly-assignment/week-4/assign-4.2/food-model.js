/* 
    Title: food-model.js
    Author: Phuong Tran
    Date: 11/14/2023
    Description: export the FoodModel class.
*/

//Create the "FoodModel" class with 3 parameters id, name, calories and export the class
export class FoodModel {
    constructor(id, name, calories) {
        this.id = parseInt(id);
        this.name = name;
        this.calories = parseInt(calories);
    }

}