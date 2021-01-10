/**
 * Part 1:
 *    What will print and why?
 *      1 2 undefined
 *      a is initialized to 1 and printed by console.log(a). Then y defines the variable a = 2 inside the function and prints that value by console.log(a). It then calls x, which defines a variable a but does not set an initial value, so that console.log(a) prints undefined.
 *    What will change if we delete line 15? Why?
 *      undefined will become 1 because then it prints the global variable a, which equals 1.
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => {
  let a = 2;
  console.log(a);
}

const y = () => {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
