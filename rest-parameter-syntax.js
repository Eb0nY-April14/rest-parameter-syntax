/**
 * To run this file in Gitpod, use the 
 * command "node rest-parameter-syntax.js" in the terminal
 */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum);

/* Extra arguments are ignored. Javascript ignores the rest of 
the arguments starting from the 4th which is a problem. */
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2:", sum2);

// Function using ...rest is the solution to this problem.
/* Any extra parameters passed into the function will be 
squashed into a new parameter called rest which will be an 
array within the function. The parameter can be called 
anything we like but 'rest' seems appropriate to show that 
it means the rest of the parameters */
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum;
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3:", sum3);
