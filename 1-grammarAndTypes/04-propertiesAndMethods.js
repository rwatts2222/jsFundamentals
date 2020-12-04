/*
    PROPERTIES AND METHODS

        - In most cases, properties are qualities related to the data we're working with, and methods are actions we can perform on the data we're working with.  Using a method causes something to happen to the data, while using a property returns information about the data

        -.property and methods()
            -methods have parentheses behind them, properties do not
*/

// STRING PROPERTIES

//Length is a property because it returns info about the data.
let myName = 'Ryan';
console.log(myName.length);

//if the above is run, it gives the number of characters in 'Ryan'

//STRING METHODS

let myDogsName = 'Luna';
console.log(myDogsName.toUpperCase()); // change a string to uppercase

let home = 'My home is Indianapolis';
console.log(home.includes('Indianapolis'));

// challenge: use google, find MDN documentation for string methods.  Research the string '.split()' method, and use and implement it to get an array back from a string.

let sent = 'This setnence will be split into individual parts';
console.log(sent.split('')); // splits at each individual character
console.log(sent.split(' ')); // split at each space in the original string
console.log(sent.split(',')); // split at the comma