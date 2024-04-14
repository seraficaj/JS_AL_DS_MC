/* 
Radix Sort 

Radix sort is a special sorting algo that works on lists of number (integers). It does not use comparisons

It exploits the facts that information about the size of a number is encoded in the number of digits.

More digits = a bigger number!
*/

/* Radix Sort Helper Functions*/

// getDigit returns the digit in num at the given place value

function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}


// digitCount(num) returns the number of digits in a number

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits returns the number of digits in the largest numbers in an array
function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}

/*
Pseudocode

- define a funcion that accepts a list of numbers and returns the largest number of digits in that list
- loop from k = 0 up to largest num of digits
- for each iteration of the loop:
    - create buckets for each digit (0 to 9)
    - place each number in the corresponding bucket based on its kth digit
- replace our existing array with values in our buckets, starting with 0 and going up to 9
- return the list at the end
*/