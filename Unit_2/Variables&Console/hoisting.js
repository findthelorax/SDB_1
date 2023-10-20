/* 
! Hoisting
    - JS reads from top to bottom in two different passes.
        1st pass:
            - Made by the compiler. This is where hoisting is initiated.
            - Compiled for execution.
        2nd pass:
            - Variables are assigned.
            - Executes any hoisted code.
*/

let names = 'Everly';
console.log(names);

b();

function b() {
    console.log(`I have been hoisted!`);
}
