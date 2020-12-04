/*
    ARROW FUNCTIONS

    - arrow functions, aka fat arrow functions, are a more precise way to write a function expression - not a function declaration
        - function expressions do NOT get hoisted, unlike function declarations
*/

// BLOCK BODY ARROW FUNCTION
let hello = () => { // any parameters that your function may hold, will go inside the set of parentheses
    console.log('Hello world');
}

hello();

// regular function expression
let hello = function () {
    
}

// CONCISE BODY ARROW FUNCTION
let hello = () => console.log('Hello world');

hello();

/*
    NOTE: concise body arrow functions return any value by default, whereas block body functions do not - we need to implicitly specify what value we want to return.
*/

// CONCISE BODY vs BLOCK BODY

// concise body arrow function

// when there's a single parameter, it's not necessary to include parentheses where the parameter would go
let apples = number => console.log(`There are ${number} apples`);
apples(10);
apples(5);
apples('five');

// parentheses ARE needed when no parameters or multiple parameters are provided

// no parameters
let apples = () => console.log('');

//multiple parameters
let apples = (numberOne, numberTwo) => console.log('');

// ---------------------------------------------------------------------------

// block body arrow functions

let apples = number => {
    console.log(`There are ${number} apples.`);
}

apples(10);
apples('ten');
apples(false);

// When your function needs to perform more complex or multiple tasks, use block body function. When your function needs to perform a singlular or simple task, a concise body arrow function is preferred.