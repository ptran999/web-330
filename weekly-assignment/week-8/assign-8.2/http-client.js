/*
 Title: http-client.js
 Date: 12/05/2023
 Author: Phuong Tran
 Description: Export class HttpClient
*/

// Create a class named HttpClient
export class HttpClient{
    // Create an async function named get w/ two parameters: url & params.
    async get(url, params = ''){ 
        
        // Instantiate a new URL object w/ url param & assign the results to the url parameter
        let urlObject = new URL(url);
        
        // Instantiate a new URLSearchParams object w/ params parameter & assigning it to the url.search property
        let paramsObject = new URLSearchParams(params);
        urlObject.search = paramsObject

        // Create an object literal named res and using the fetch() API passing in the
        // url.toString() variable and specific the request as a GET request
        const res = await fetch(urlObject.toString(), {
            method: "GET",
        })
        
        // Return the res object literal as JSON
        return res.json();
    }
}

