/*
    Title: maincourse.js
    Author: Phuong Tran
    Date: 11/05/2023
    Description: the MainCourse class     
*/

//import the module the Product class
import { Product } from "./product.js";

//export the MainCourse class
export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price);
    }
}
