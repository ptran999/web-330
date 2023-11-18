/*
    Title: dessert.js
    Author: Phuong Tran
    Date: 11/05/2023
    Description: the Dessert class     
*/

// import the Product class
import { Product } from "./product.js"

//export the Dessert class
export class Dessert extends Product {
    constructor(name, price) {
        super(name, price)
    }
}

