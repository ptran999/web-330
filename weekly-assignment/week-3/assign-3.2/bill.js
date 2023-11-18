/*
    Title: bill.js
    Author: Phuong Tran
    Date: 11/05/2023
    Description: the Bill class     
*/
//import { Product } from "./product.js"
// creating Bill class and export 
export class Bill {

    // creating a constructor with 4 empty array
    constructor(_beverages, _appetizers, _mainCourses, _desserts) {
        this._beverages = []
        this._appetizers = []
        this._mainCourses = []
        this._desserts = []
    }

    // creating function addBeverage with one parameter and push it to beverage array
    addBeverage(beverage) {
        this._beverages.push(beverage)
    }

    // creating function appetizer with one parameter and push to addAppetizer array
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer)
    }

    // creating function addMainCourse with one parameter and push to MainCourse array 
    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse)
    }

    // creating function addDesert with one parameter and push to desert array
    addDessert(dessert) {
        this._desserts.push(dessert)
    }

    // creating function getTotal 
    getTotal() {
        let total = 0

        // add and parse the total and assign to the variable
        let beverageTotal = this._beverages.forEach(function(beverage)
            {
                total =+ parseFloat(beverage.price)
            }
        )

        // add and parse the total and assign to the variable
        let appetizerTotal = this._appetizers.forEach(function(appetizer) 
            {
                total += parseFloat(appetizer.price)
            }
        )

        // add and parse the total and assign to the variable
        let mainCourseTotal = this._mainCourses.forEach(function (mainCourse) 
            {
                total += parseFloat(mainCourse.price)
            }
        )
        
        // add and parse the total and assign to the variable
        let dessertTotal = this._desserts.forEach(function(dessert)
            {
                total += parseFloat(dessert.price)
            }
        )
            console.log(total)
        // return the total price
        return total.toFixed(2)

    }

} 
