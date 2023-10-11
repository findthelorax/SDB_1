/* 
    Ternary Conditional Statement
    - Super cool syntax
    - A shortcut for writing an if, if/else, or else/if statement.
    - (condition) ? true result : false result;
    - Ternaries REQUIRE the default/else catch all, has to have both true and false results for condition
*/

// let num = 6; // Yes!
let num = -1; // Nope! Nada!

// Ternary:

(num > 0) ? console.log('Yes!') : console.log('Nope!');

// Instead of:
if (num > 0) {
    console.log('Yes!')
} else {
    console.log('Nada!')
}

// Ternary with two conditions vs Else If statement

// let x = 1; // result in all goodbyes
// let x = -5; // all hi console logs
let x = 0; // all hello console logs

//Else if statement
if (x == 0) {
    console.log("hello");
} else if (x < 0) {
    console.log("hi");
} else {
    console.log("goodbye");
}

// Ternary 
(x == 0) ? console.log("Hello!") : (x < 0) ? console.log("Hi!") : console.log("Goodbye!");

// Other way to write ternary
(x == 0) ? console.log("Hello! V2") 
    : (x < 0) ? console.log("Hi! V2") 
    : console.log("Goodbye! V2");