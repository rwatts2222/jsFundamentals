/*
    FOR OF LOOPS

        - where for in loops look at enumerable, countable properties, for of loops look at iterable properties
            -iterable properties are properties that we can parse through with numbers, or indices

        - for in Loops: better suited for objects
        - for of Loops: better suited for arrays
*/

// using a for loop with an object will result in error since for of loops look at iterable properties, and objects have what are known as enumerable, or countable, properties
let student = {
        name: 'Peter',
        awesome: true,
        degree: 'JavaScript',
        week: 1
    }

    for (let item of student) {
        console.log(item);
    }

    let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

    for (let cat of catArray) {
        console.log(cat);
    }

    // for (let i = 0; i < catArray.length; i++) {
    //    console.log(catArray[i]);
    //}   this code does the same as previous forOfLoop