/*
    Title: beverage.js
    Author: Phuong Tran
    Date: 11/05/2023
    Description: the Beverage class     
*/

// import the Product class
import { Product } from "./product.js"

// export and inherit the Beverage class  from the Product class
export class Beverage extends Product { 
    constructor(name, price) {
        super(name, price)
    }
}
