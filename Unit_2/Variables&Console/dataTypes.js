// * Data Types

/* 
    Booleans: can only be true or false

*/

let on = true;
let off = false;

console.log(on, off);

/* 
    Null
    - is an empty value.
    - Think of if like an empty container: nothing is in it but it still exists as a space to fill.
*/

let empty = null;
console.log(empty);

/* 
    Undefined
    - No value is assigned and does not act like an empty container.
*/

let undef = undefined; // instead of assigning our undef variable a datatype of undefined, we can simply just declare the varaible.
console.log(undef); // undefined

let correct; // write like this instead
console.log(correct); // undefined

/* 
    Numbers
    - Numbers are literally numbers in JS. No special characters are needed to write them.
*/

let degrees = 98;
console.log(degrees);

let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999

let rounded = 9999999999999999; // 16 9's: JS gives you space for 15 9s before it rounds up
console.log(rounded); // 10000000000000000

let notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004// JS rounds out at a certain number, so if math is needed, be aware

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; // we can still do math with JS, though
console.log(numbersAreHard); // 0.3

// Quick cool thing:
let a = Number("42");
console.log(a);