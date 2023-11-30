/*
 Title: shopping-cart.js
 Author: Phuong Tran
 Date: 11/17/2023
 Description: export class ShoppingCart
 */

export class ShoppingCart {
    constructor() {
    this.products = []
    }

    // track the total orders
    count() {
        return this.products.length
    }

    // add products to the local array
    addProduct(product) {
        this.products.push(product)
    }

    // using generate a list of products
    *[Symbol.iterator]() {
        for(let i of this.products) {
            yield i
        }
    }

}