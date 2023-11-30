/*
 Title: cart-component.js
 Author: Phuong Tran
 Date: 11/17/2023
 Description: export class CartComponent  
*/

// Create a CartComponent that extends JavaScripts HTMLElement object
export class CartComponent extends HTMLElement {
    constructor() {
        super()
    }

    // Add a function connectedCallback() and set the innerHTML to a string 
    connectedCallback() {
        // display html when the tags are used
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> 
            (<span id="cart-count"></span>)`
    }
}

// define how the custom component will be called
customElements.define('cart-component', CartComponent)