/*
    FOR IN LOOPS

    - great for iterating over values in an object. Properties in an object are what are known as enumerable properties.  Enumerable simply means that the properties can be counted.
            - for in loops iterate over an objects enumerable properties
            - to distinguish from for of loops, think of for in loops needing a key put in
*/

// objects hold what are called key/value pairs
let student = {
//   key    value              - values are assigned using a :, not a =
    name: 'Peter',
    awesome: true,
    degree: 'JavaScript',
    week: 1
}

for (let item in student) {
    console.log(item);
    console.log(student[item]); // gives the value of the key
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat in catArray) {
    //console.log(cat);  // gives the index
    console.log(catArray[cat]); // gives the value of the index
}

// Challenge: write a for in Loop that capitalizes the first letter of a name and lowercases the rest of the name.

let name = "sPongeBoB";
let capName;

for (let index in name) {
    // console.log(index); // gives indexes of name variable - 0, 1, 2 etc
    if (index == 0) {
        capName = name[index].toUpperCase();
    } else {
        capName += name[index].toLowerCase();
    }
}

console.log(capName);