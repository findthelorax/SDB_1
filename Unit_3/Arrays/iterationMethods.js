// ! Iteration Methods
/* 
    - Do Not destroy the original array
    - take in callback function
    - loop through arrays
    - must have a return
*/

let fruits = ['apple', 'pear', 'mango', 'orange', 'pineapple'];

let vegetables = ['tomato', 'candy', 'squash', 'mango', 'pineapple'];

// create a variable to get a return and hold the data
// look at our fruits and pass in our filter  //our parameter 'fruit' - run some logic -

//* arrow function with block body
const filteredFruit = fruits.filter(fruit => {
    // console.log('Parameter: ', fruit);
    let result = fruit != 'mango';
    // console.log('Inside Filter: ', result);
    return result;
});

// console.log(filteredFruit);

let fruit1 = 'pineapple';
console.log(fruit1.includes('apple'));

//* arrow function with concise body
const filteredFruit2 = fruits.filter(fruit => !fruit.includes('apple'));
console.log(filteredFruit2);

// Function Example
function removeMango(fruit) {
    return fruit != 'mango'
}

const filteredFruit3 = fruits.filter(removeMango);
console.log(filteredFruit3);

const filteredFruit4 = vegetables.filter(removeMango);
console.log(filteredFruit4);


/* 
    ! Challenge
        How do you remove the 5s from the array?
        Store it in a new variable and console.log that variable
 */


let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];

function remove5s(num) {
    return num !== 5
}

const noFives = myNumberArray.filter(remove5s)
console.log(noFives);

let myNumberArray = [3,5,7,3,5,5,5,2,7,2,12,5];
const noFives = myNumberArray.filter(num => (parseInt(num)!==5));
console.log(noFives);

//! Challenge
// Using the provided array, you will need to use array methods to update the task list. After each request, be sure to print (console log) the result of the tasks array.

let tasks = [
    'organize desk', 'have lunch', 'balance budget', 'read'
];

// Add "make a grocery list"
tasks.push('make a grocery list');
console.log(tasks);

// Change "have lunch" with "meet Bob for lunch". Be sure to keep the order of the array.
tasks.splice(1, 1, 'meet Bob for lunch');
console.log(tasks);

// remove "organize desk" as if "completed", shortening the task list.
tasks.splice(0, 1);
console.log(tasks);

// Add three more tasks that need to be done before lunch. ("sweep porch", "send email to Jane", "read article"). Order doesn't matter.
tasks.unshift('sweep porch', 'send email to Jane', 'read article');
console.log(tasks);

// Remove "make grocery list" as that won't be needed to be done until tomorrow. 
tasks.pop();
console.log(tasks);

// Console log the value of how many items are in the tasks array.
console.log(tasks.length);

//* Extra 
// Use the array provided and see if you can find a method to help organize this unordered array. The result should be in numeric order.
const unordered = [1,5,2,7,9];
const ordered = unordered.sort();
console.log(ordered);


let movies = [
    { name: "Top Gun 2", category: 'Action' },
    { name: "Scary Movie 5", category: 'Horror' },
];

console.log(movies[0].name);

movies.push({ name: "IT", category: 'Horror' });
movies.push({ name: "Get Out", category: 'Horror' });
movies.push({ name: "Taken", category: 'Action' });

// callback A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

const actionMovies = movies.filter(movie => movie.category === 'Action');
const horrorMovies = movies.filter(movie => movie.category === 'Horror');

console.log('Horror', horrorMovies);
console.log('Action', actionMovies);

//! .forEach()

let newFoodList = [
    'apple', 'pear','mushroom','cheese','peach'
];

for(let f = 0; f < newFoodList.length; f++) {
    console.log(newFoodList[f])
};

newFoodList.forEach((item, i) => console.log('For Each: ', item, "index: ", i));

/*
    - (Go look at MDN docs to remind you):
    - Create an array containing movies titles
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = [
    'Ski School',
    'IP Man',
    'Fullmetal Alchemist',
    'Hellraiser'
];

movies.forEach(movie => console.log(movie));

movies.push('Caddyshack');

// movies.forEach(movie => console.log(movie));

movies.splice(1, 1, 'Out Cold');

movies.forEach(movie => console.log(movie));

//! .find()

let tmnt= [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];

let character = 'Leo';
console.log('Find: ', tmnt.find(c => c == character));

//! .map()
let numArray = [];
let fizzBuzzArray = [];

for(let i = 0; i < 101; i++) numArray.push(i);

numArray.map(x => {
    if(x % 15 === 0) fizzBuzzArray.push(x);
});

console.log(fizzBuzzArray);

/*
- First check if you are working with an array
    - Using a method, flip the values within the array 
    (what was in index 4 is now in 0, 3 to 1, etc.)
    - Using a method, print the values of the newly arranged array
    
    hint: 
        - search something like "arrays", "javascript", "reverse"
        - look in your notes to see how we can check if something is an array
*/
let arr = [1, 2, 3, 4, 5];

(arr instanceof Array) ? (arr.reverse(), console.log(arr)) : console.log('Not an Array');