/* 
    Array
        - Denoted with square brackets []
        - Indices start at zero 0
        - Using a property called "length", we can find the sum of data stored.
*/

//            0        1         2         3
let list = [`milk`, `bread`, `chicken`, `coffee`];

console.log(list[2]);
console.log(list.length);

list[0] = 'chocolate milk';
console.log(list);

let avengers = [
    `Nick`, 2, false, `Steve`, `Bruce`,
    [ `Tony`, 8, true ]
    ];

console.log(typeof avengers);
console.log(avengers instanceof Array);

console.log(avengers[4]);
console.log(avengers[5][2]);
console.log(`Hello, ${avengers[0]}. Hello, ${avengers[5][0]}`);

//! Array Methods

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// .push()  //adds item to end of the array
food.push('Pizza'); // Does need some argument to push or add to array. Adds to the end of the array.
console.log(`PUSH: `, food); //added Pizza

// .pop()  //removes item from the end of the array
food.pop();
console.log(`POP: `, food); //removed 'Pizza'

// .shift()  //removes item from the beginning of the array
food.shift();
console.log(`SHIFT: `, food); //removed 'Pecan Pie'

// .unshift(add item, [optional])  //adds item to the beginning of the array
food.unshift('Hamburger', 'Salad');
console.log(`UNSHIFT: `, food); //

// .splice(target position, how many removed from target position, replaced with what)
food.splice(1, 1, 'Tacos');
console.log(`SPLICE: `, food); //position 1, remove 1('Salad'), add 'Tacos'

food.splice(1, 0, 'Steak');
console.log(`SPLICE2: `, food); //position 1, remove none, add 'Steak'

food.splice(3, 1);  //splice in without data to remove
console.log(`SPLICE: `, food); //position 3, remove 1('Shrimp')

let rgb = ['red','green','blue'];
console.log(rgb.toString());
console.log(typeof rgb);
