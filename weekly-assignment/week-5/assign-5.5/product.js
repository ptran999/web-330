/*
 Title: product.js
 Author: Phuong Tran
 Date: 11/17/2023
 Description: export class Product  
*/

// Create a class named Product with a constructor and two parameters: name and price

export class Product {
    constructor(name, price){
        this.name = name
        this.price = price
//Add a new property for id
        this.id = Math.random().toString(16).slice(2) 
    }

}