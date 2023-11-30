/* 
    Title: required-field.js
    Author: Phuong Tran
    Date: 11/23/2023
    Description: A module of Future Value App.
*/

// Create a class named RequiredField
export class RequiredField {
    // Create a constructor and supply it with two parameters: name and field
    constructor(name, field){
        this.name = name;
        this.field = field;
    }
    
    // Create a function named validate
    validate() {
        // Will return true if this.field is a string value and false if not
        return Boolean(this.field);
    }
    
    // Create a function named getMessage() and return the string message
    getMessage() {
        return this.name + " is a required field.";
    }

}