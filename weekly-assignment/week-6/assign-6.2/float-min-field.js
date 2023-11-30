/* 
  Title: float-min-field.js
  Author: Phuong Tran
  Date: 11/23/2023
  Description: A module of Future Value App.
*/

// Create a class named FloatMinField and export it
export class FloatMinField {

    // Set the parameters to class properties
    constructor(name, field, min) {
      this.name = name
      this.field = field
      this.min = min
    }
  
  // Create validate function
    validate() {
  
       // ParseFloat the field value and return true if the value is greater than min
       if (parseFloat(this.field) > this.min) {
        return true;
      }
        else {
         return false;
      }
    }
  
  // Create getMessage function
    getMessage() {
      return this.name + " must be more than " +  this.min + ". You entered " + this.field + "."
    }
  }
  