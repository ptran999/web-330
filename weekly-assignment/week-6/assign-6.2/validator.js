/* 
    Title: validator.js
    Author: Phuong Tran
    Date: 11/23/2023
    Description: Future Value App
*/


// Add import all the class RequiredField, FloatField, FloatMinField, FloatMaxField
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

// validate the information 
export class Validator 
{
    // Creating two class properties: validators and messages with an empty array
    validators = [];
    messages = [];
    
    // Create a class constructor with two parameters: name and field
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    // Create a function named addRequiredField() 
    addRequiredField() {
        this.validators.push(new RequiredField(this.name, this.field));
    }
    
      // Create function named addRequiredFloatField() 
    addRequiredFloatField() {
        this.validators.push(new FloatField(this.name, this.field));
    }
    
    // Create a function named addFloatMinField() with a single parameter for min
    addFloatMinField(min) {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }
    
    // Create a function named addFloatMaxField() with a single parameter for max
    addFloatMaxField(max) {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
    
    // Create a function named validate()
    validate() {
        // Use a for…of statement to declare statement
        for (let validator of this.validators) {
           
            if (!validator.validate()) {
                this.messages.push(validator.getMessage());
            }
        }
        
        return this.messages.length == 0;
    }
}