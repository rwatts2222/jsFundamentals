/*
    - Loops offer us a quick and easy way to do something repeatedly, or Loop over something

    - There are many different kinds of loops, but they all do roughly the same thing:
        -the loop will repeat until a specified condition evaluates to false

        - for Loop
        - do while Loop
        - while Loop
        - for in Loop
        - for of Loop

        -for Loop takes in 3 parameters
            1. initial expression
            2. condition
            3. increment expression

            ***separated by semi colon
*/

//      1.               2.              4. 
for (let i = 0;        i < 10;          i++) {  // ++ is same as i += 1
//       3. 
    console.log(i);
} 

/*
    1. set variable
    2. condition to be met:  The loop will continue to run until this condition evaluates as false
    3. for loop body: code to be ran as long as condition evaluates as true
    4. incrementer: the number in which we want to increase the value of our variable by

        - these steps will continue to repeat until the condition evaluates as false
*/

// Challenge: using a for Loop, count to 20, by 2

for (let i = 0; i <21; i += 2) {
    console.log(i);
}

// Challenge: using a for Loop, count from 10 to 0, going down by 1

for (let i = 10; i > -1; i -= 1) {
    console.log(i);
}

// Challenge: using a for loop, count from 0, going down by 2, to -24

for (let i = 0; i > -25; i -= 2) {
    console.log(i);
}

// Challenge: using a for Loop, go through a name and display each letter individually
let name = 'Spongebob';
// console.log(name.length);
//                 0  <    9
for (let num = 0; num < name.length; num++) {
    // console.log(name.charAt(num));
   console.log(name.charAt(num));
}

// Challenge: write a for loop that adds up all numbers from 1-50 (should equal 1275) Hint: you will need another variable outside of the for loop to capture the sum

let sum = 0;

for (let i = 1; i <= 50; i++) {
    sum += i;
    console.log(sum);
}
    