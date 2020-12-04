/*
    SCOPE

        - how a computer keeps track of all the variables we create in our code
        - whenever we open {}, we create a new local scope.  Any variables that we create are only available in that local scope and not available globally.
        - globally scoped variables are accessible anywhere in our document
*/

let x = 12;

function scope() {
    let x = 33;
    console.log(x);
}

scope(); // calling the function by its name, followed by parentheses, 'invokes' or calls the function, telling it to run
console.log(x); // 12

//--------------------------------

let y = 12;

function newScope() {
    y = 33;
    y = 44;
    y = 55;
    console.log(y); // 55
}

newScope();
console.log(y); // 55

/*
    VAR vs LET

        - while var and let seem to operate the same - they have a lot of the same functionality (both allow us to declare and initialize variable) - they also behave differently from one another
            - var is scoped to the nearest function body {}, and let is scoped to the nearest enclosing body {}
*/

var testOne = 'this is a test';
let testTwo = 'this is another test';

console.log(testOne, testTwo);

// VAR
var x = 12;

function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x); // 45
    }
    console.log(x); // 45
}

varTest();
console.log(x); // 12

// -------------------------------------

// LET
let y = 12;

function letTest() {
    var y = 33;
    if (true) {
        let y = 45;
        console.log(y);
    }
    console.log(y);
}

letTest();
console.log(y);