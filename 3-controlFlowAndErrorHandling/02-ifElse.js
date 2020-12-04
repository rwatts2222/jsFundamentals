let temp = 75;

// Read as, if "temp" is less than 70, console.log "Wear a jacket", if "temp" is NOT less than 70, console.log "No jacket necessary"
if (temp < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}

/*
CHALLENGE
************
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let name = "Ryan";

//Bronze
if (name == "Ryan") {
    console.log(name)
} else {
    console.log("Hello, what is your name?");
}

//Silver
if (name == "Ryan") {
    console.log("Hello, my name is", name)
} else {
    console.log("Hello, what is your name?")
}

//Gold
if (name == "Ryan") {
    console.log("Hello, my name is", name)
} else {
    console.log("Hello, is your name", name + "?")
}

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    Gold:
    If the first letter of a string is uppercase, console.log that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

let name = "zAchARy";

//Bronze
// if the first letter is EQUAL to an upper case version of the first letter
if (name [0] == name [0].toUpperCase()) {
    console.log(name);
} else {
    console.log("hey this isn't written correctly")
}

//Silver
if (name[0] == name[0].toUpperCase()) {
    console.log(name[0]); // or console.log(name.charAt(0));
} else {
    console.log(name.slice(1).toLowerCase())
}

//Gold
if (name[0] == name[0].toUpperCase()) { // or console.log(name.charAt(0));
    console.log(name.charAt(0)) + (name.slice(1).toLowerCase()) // or name[0]
} else {
    console.log("not true body:", name.charAt(0).toUpperCase() + (name.slice(1).toLowerCase()));
} 

/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 25;

if (age < 18) {
    console.log("Sorry, you're too young to do anything.");
} else if (age >= 18 && age < 21) {
    console.log("You can vote!");
} else if (age >= 21 && age < 25) {
    console.log("You can drink!");
} else if (age >= 25) {
    console.log("You can rent a car!");
}