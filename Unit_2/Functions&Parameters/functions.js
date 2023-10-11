/*
! Functions
    - Block of code that performs a particular task.
    - Simplified program that runs a task when invoked.
*/

/* 
! Function Declaration
    (1)       (2)
    function hi() {

            console.log('Hi');
    }

    1: Keyword
    2: Name of the function
        - parenthesis is for parameter
*/
function hi() {
    console.log('Hi!');
}

/* 
! Function Expression
    (1)
    let hey = function hello() {
        console.log('Hi!');
    }

    1: The variable "hey" is now representative of the function "hello".

    * Does NOT get hoisted.
*/

let hey = function hello() {
    console.log('Hi again')
}

/* 
! Invoking Functions
    function hi() {
        console.log('hi');
    }

    (1)
    hi();

    1: This is how we call, or "invoke" our function.
*/

function greetings() {
    console.log('Hello');
}

hi();
greetings();
console.log(greetings);

// count 1 to 10

function counting() {
    for (x = 1; x <= 10; x ++) {
        console.log(x);
    }
}

counting();

// Given an array, create a function that lists out the values individually. 

let arr = ['This', 'is', "really", `cool`];

let arrList = function arrList() {
    for(value of arr) {
        console.log(value);
        // tough to pull item number with array without logic
    }
}
arrList();

let dogArray = [
    "Husky",
    "Shih Tzu",
    "Corgi",
    "Catahoula",
    "Shiba",
    "Golden Retriever"
];

function callDogs() {
    console.log(dogArray);
    for(dog in dogArray) {
        console.log(dogArray[dog]);
    }
}
callDogs();

