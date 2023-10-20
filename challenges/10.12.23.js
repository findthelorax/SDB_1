/* 
    Write a program that uses a loop, conditionals, and console log to print all the numbers from 1 to 30 inclusive and follows the rules below:

    1. For numbers evenly divisiby by 3, print "Fizz" instead of the number.
    2. For numbers evenly divisiby by 5, print "Buzz" instead of the number.
    3. For numbers that are evenly divisible by both 3 and 5, print "Fizz Buzz" instead of the number, making sure that the program still prints "Fizz" or "Buzz" for numbers divisible by only 3 or 5 and not both.
    4. For any number that is not divisibly by either 3 or 5, print the number itself.
*/


/*
    - Create a function called "fizzBuzz".
    - Within the function, create a loop that counts from 1 to 100.
      - Create a variable within the loop called "response".
    - For each iteration, evaluate the expression (i). 
      - For numbers evenly divisible by 3, store "Fizz" within "response".
      - For numbers evenly divisible by 5, store "Buzz" within "response".
      - For numbers evenly divisible by both 3 and 5, store "Fizz Buzz" within "response".
      - For numbers not divisible by either, store the value of the expression.
    - log the response variable within the console for each iteration.
    
    - After the function has completed, log a string that details how many different 
      "Fizz", "Buzz", and "Fizz Buzz" were found.
    
      example: "There were X Fizz Buzz, X Fizz, and X Buzz counted."
      hint:
        What kind of operator helps us with finding out division with remainders? 
        Consider how to store the values outside of the function.  
*/

/* 
function fizzBuzz(num){
    for ( num = 1; num <= 30; num ++ )
        if (num % 3 === 0 && num % 5 === 0)
            console.log('FIZZ BUZZ');
        else if (num % 3 === 0)
            console.log('FIZZ');
        else if (num % 5 === 0)
            console.log('BUZZ');
        else console.log(num);
}
fizzBuzz();
*/

let response;
function fizzBuzz() {
    for ( i = 1; i <= 100; i ++ )
    if (i % 3 === 0 && i % 5 === 0) {
        response = 'FIZZ BUZZ';
        console.log(response);
    }
    else if (i % 3 === 0) {
        response = 'FIZZ';
        console.log(response);
    }
    else if (i % 5 === 0) {
        response = 'BUZZ';
        console.log(response);
    }
    else response = i;
    console.log(response);
}
fizzBuzz();
console.log(response);