/*
Description: CS 111 Project 5
Author: Jasper Cacioppi
*/

function factorial (num) {
    // Step 1: Set -1 as a default result for values < 0 (invalid input)
    if (num < 0) {
        x = -1
    // Step 2: Test if input is > 0, calculate factorial and set result to calculated value
    }else if (num > 0) {
        y = num
        for (x = num; x > 1; x--) {
            y = y*(x-1)
        }
        return y
    // Step 3: Test if input = 0, set result to 1
    }else if (num == 0) {
        x = 1
    }
    // Return result
    return x

}

  console.log(factorial(1));



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function guessNumber (target, min, max) { 
    x=""
    do {
         x = getRandomInt(min,max);
         if (x != target) {
             console.log(x)
         }
    } while (x != target);
    return x
    
}


console.log(guessNumber(4,1,10));
