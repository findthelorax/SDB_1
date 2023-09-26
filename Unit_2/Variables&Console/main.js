// Single Line Comment: CTRL + /
/* Multi Line Comment:
    SHIFT + ALT + A */

// * Variables

/* 
    Variable are named containers for storing data values.

    We name the variables so that we can refer to them and the values they hold at a later time.  Consider that we are naming these variables to help us be directed to a value type.

    We can create a variable through 3 different keywords:
        1. var
        2. let
        3. const
        4. (none)
*/

let a = 2;
//  (1)  (2) (3) (4)
    let   b   =   1;

/* 
    1. Keyword in JS used to denote the creation of a variable

    2. Name of the variable (can be anything, should pertain to the data), what the developer refers to/calls on the get the stored value.
        - Should be camelCase (lowerCaseFirstLetter)

    3. Operator 
        =
        ==
        ===
        !=
        > / >=
        < / <=

    4. Value: Starting data value
*/

// * Declaration Vs Initialization

// Declaration: declaring a variable but not assigning it.
let x;
console.log("Declaration of x: ", x);

let apple;

// Initialization: setting a value to a variable.
let y = 4;

let life = 42;

// Reassign: reassign declared or initialized variable values (except: [not / const] keyword variables)
x = 20;
console.log("Initialization 1: ", x)

x = 100;
console.log("Initialization 2: ", x)

apple = 12;

// * Assigning to other variables / create variables from variables!

let firstName = "Brett";
let lastName = "Ferrante";

let fullName = firstName + " " + lastName;
let fullN = firstName + lastName;

/* 
    * CONSOLE 

    .log(), this is the log method of the console, log will print whatever it is passed.
*/

console.log(fullName);

// Use multiple items/variables in a console.log()

let today = "Great!";
const javaScript = "So much fun!";

console.log(today, javaScript);

today = "Super!";
javaScript = "meh";

console.log(today, javaScript); // TypeError: Assignment to constant variable.

