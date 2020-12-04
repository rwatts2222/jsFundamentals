let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hot Dog'];

// regular for loop
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

// forEach() method
food.forEach(function(foodItem) {
    console.log(foodItem)
})

// forEach() method - fat arrow function
food.forEach(foodItem => console.log(foodItem));

// ------------the above 3 methods have the same console.log-----------------------

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hot Dog'];

for (let i = 0; i < food.length; i++) {
    listMyFood(food[i]);
}

function listMyFood(foodItem) {        
    console.log(foodItem)
}
// ^^ this block of code does same thing as forEach() method - fat arrow function

// CHALLENGE: look at MDN docs for forEach() method.  In the forEach() method, include the optional index parameter, and print that index to console

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hot Dog'];

// concise body arrow function
food.forEach((foodItem, index)  => console.log(foodItem, index));

// block body arrow function
food.forEach((foodItem, index) => {
    console.log(foodItem, index);
})

// function declaration
food.forEach(function(foodItem, index) {
    console.log(foodItem, index);
})

/*
CHALLENGE
************
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ['Phantom Menance', 'Attack of the Clones', 'Revenge of the Sith', 'Solo', 'Rogue One', 'A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'];

movies.forEach(movie => console.log(movie));
movies.push('Kill Bill');
movies.splice(0, 1, 'Big Fish');
console.log(movies);