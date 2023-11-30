/* 
    Title: finance-calculator.js
    Author: Phuong Tran
    Date: 11/23/2023
    Description: A module of Future Value App.
*/

// Create a class named FinanceCalculator
export class FinanceCalculator {

    // Create a static property named MONTHS_IN_YEAR 
    static MONTHS_IN_YEAR = 12


    // Create a function named calculateFutureValue with three parameters: monthlyPayment, rate, and years
static calculateFutureValue(monthlyPayment, rate, years) {
    
    // Create a variable named month and assign it the parameter years times the property MONTHS_IN_YEAR
    let months = years * FinanceCalculator.MONTHS_IN_YEAR;
    
    // Create a variable named interestRate and assign it the calculation: 1 + rate / 100
    let interestRate = 1 + rate / 100;
    
    // Create a variable named presentValue and assign it the monthlyPayment parameter times the months variable
    let presentValue = monthlyPayment * months;
    
    // Create a variable named futureValue and assign it the calculation: presentValue *(Math.pow(interestRate, months))
    let futureValue = presentValue * (Math.pow(interestRate, months));

    // Return the futureValue and set the precision to two decimal places
    return futureValue.toFixed(2);
}

// Create a static function named convertToCurrency with a single parameter named field
static convertToCurrency(field) {
    // Create a variable named currencyFormatter & setting style to currency USD
    let currencyFormatter = new Intl.NumberFormat('en-US', { 
        style: 'currency',
        currency: 'USD'
    });

    // Return the currencyFormatter.format() function, passing-in the field parameter
    return currencyFormatter.format(field);
}

}