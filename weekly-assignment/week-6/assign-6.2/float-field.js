/* 
    Title: float-field.js
    Author: Phuong Tran
    Date: 11/23/2023
    Description: A module of Future Value App
    Source: https://hackernoon.com/checking-if-a-value-is-a-number-in-javascript-with-isnan  
*/

// Create a class named FloatField
export class FloatField {
    // Create a constructor with two parameters: name and field
    constructor(name, field) {
        this.name = name
        this.field = field
    }
  
    // Create a function named validate
    validate() {
        // Check for NaN values
        if (!isNaN(this.field)) {
          return true;
      }
      else {
          return false;
      }
    }
  
    // Create a function named getMessage() and return the string message
    getMessage() {
      return this.name + " must be a float value. You entered " +  this.field + "."
    }
  }
  