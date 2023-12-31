/* // values can now be used individually
//  taking info a user would give and reshaping for my obj to give to my database

// get something from user
let obj = {
    name: 'John',
    last: 'Doe'
}

// sort it
const { first, last } = obj;

// shape object how we need
let database = [{}.{}.{}];
let myObj = {
    last
}

// add to database
database.push(myObj); */

/* 
    - Syntax is on the left side of assignment operator
    - Great for pulling info out of an array and assigning data to it's own variable
*/

const fullName = ['Jane', 'Doe'];

// const fName = fullName[0];
// const lName = fullName[1];

const [firstName, lastName] = fullName;
// console.log(firstName, lastName);

console.log(`Hello, ${firstName} ${lastName}`);


//! Spread
/* 
    - denoted by three consecutive periods: ...
    - pulls out all the elements of an array and gives them to you as standalone elements.

* Concept of the spread operator - NOT syntax

const fullName = [ 'Rocket', 'Racoon' ];

...fullName // 'Rocket', 'Racoon'

const elements = ...fullName;

*/

const copiedFullname = [...fullName];
console.log(copiedFullname);

fullName.push('III');
// console.log(fullName, copiedFullname);

// console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(...prices));

//! Rest
/* 
    - collects together into a single element
*/

const fullName2 = [
    'Jane', 'Doe', 'III', {month: 3, date: 22, year: 1973}, 'testOne', 2, 4, true
];

const [ fName, lName,,, ...otherInfo ] = fullName2;
console.log(fName);
console.log(lName);
console.log(otherInfo);



// Create the `series` variable
var series = [0, 1];

// Why are the instructions telling us to pop() but says nothing about pop() removing items from the array and doesn't inluding anything about adding them back in.

while (series.length < 10 ) {
    var n2 = series.pop();
    var n1 = series.pop();
    var sum = (n1 + n2);
    series.push(n1, n2, sum);
}

// Print the Fibonacci sequence to the console

console.log(series);

console.log(series.pop(-2));
console.log(series.slice(-2));
series.push( series[0] + series[1] )
console.log(series.length)
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34
