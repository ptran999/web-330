/*
    Title: tran_palindrome.js
    Author: Phuong Tran
    Date: 10-29-2023
    Description: An app that checks if a string is palindrome or not
    Source: https://www.w3schools.com/jsref/jsref_split.asp
            https://www.w3schools.com/jsref/jsref_reverse.asp
            https://www.w3schools.com/jsref/jsref_join.asp
*/
// Create a function named getTodaysDate() and return value date with parameter “en-US”
function getTodaysDate() {
    return new Date().toDateString("en-US")
}

// Create a function getLength() with a single parameter for a string value
function getLength(stringValue) {
    return stringValue.length
}

// Create a function reverse() 
function reverse(stringValue) {

    //split the string value to a character array
    const charArray = stringValue.split('') 

    // reverse the letters in the string of array  
    charArray.reverse() 

    // create a new string based on the reversed string
    const newString = charArray.join('') 
    return newString 
}

// Create a function isPalindrome() with if else statement inside the body
function isPalindrome(stringValue) {

    //call the reverse() function and use if else statement to return the value
    if(reverse(stringValue) === stringValue) {return true} 
    else {return false}
}

// Create onclick function for checkPhrase button
document.getElementById("btnCheckPhrase").onclick = () => {

    // Capture the input value from users
    let txtPhrase = document.getElementById("txtPhrase").value

    // assigning "assignResults" to the div "assign-results"
    let assignResults = document.getElementById("assign-results")

    // assigning "resultHeader" to the div "assign-results-header"
    let assignResultHeader = document.getElementById("assign-results-header") 

    // storing value from functions to the variables
    let today = getTodaysDate()
    let len = getLength(txtPhrase)
    let reversePhrase = reverse(txtPhrase)

    // Create a string variable header that match the output 
    let header = "Date: " + today + "<br>" + "Original Phrase: " + txtPhrase + "<br>" + "Reversed Phrase: " + reversePhrase + "<br>" + "Phrase Length: " + len

    //Assigning the header variable to the assign-results-header div
    assignResultHeader.innerHTML = header

    //Use if else statement check if txtPhrase is palindrome
    if(isPalindrome(txtPhrase.toLowerCase())) {
        return assignResults.innerHTML = txtPhrase + "<b><u> is </u></b>" +  "a palindrome!"
    } else {
        return assignResults.innerHTML = txtPhrase + "<b><u> is not </u></b>" + "a palindrome!"
    }
}

