/*
 - switch statements execute a block of code depending on different cases
    - the switch statement is often used together with a break or a default keyword (or both). These are both optional.
    - the break keyword breaks out of the switch block. This will stop the execution of more code or case testing inside the block. If break is omitted, the next code block in the switch statement is executed.
    - the default keyword specifies some code to run if there is no case match. There can only be one default keyword in a switch. Although this is optional, it is recommended that you use it, as it takes care of unexpected cases.
*/

let num = 6;
    // true is the key for the switch.  if the case is true, it will run the log code
switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran')        
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    case (num > 5):
        console.log('case 3 ran');
        break;
    default:
        console.log('did not work');
}

// run any code here if a "break" is reached

let officeCharacter = "Pam";

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is ...");
        break;
    case "Dwight":
        console.log("German words");
        break;
    case "Jim":
        console.log("Bears...");
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
        // ^^ using the `` is easier than this:
        console.log('I\'m sorry,' + " " + officeCharacter + ",", 'but do I know you?');   // (same result though)
        break;
}
