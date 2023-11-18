/*
    Title: appetizer.js
    Author: Phuong Tran
    Date: 11/05/2023
    Description: the Appetizer class     
*/

// import the Product class
import { Product } from "./product.js"

// export the Appetizer class and inherit from the Product class
export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price)
    }
}
