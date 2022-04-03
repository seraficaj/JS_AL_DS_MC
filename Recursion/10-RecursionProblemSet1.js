// 1. Write a function called power which accepts a base and exponent. Return the power of the base to the exponent. (power ^ exponent). Do not worry about negative bases and exponents.

const power = (base, exponent) => {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
};

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// 2. Get factorial of num recursively.

const factorial = (num) => {
    if (num < 0) return 0;
    if (num <= 1) return 1;
    return num * factorial(num - 1);
};

// 3. Find product of array.

const product = (arr) => {
    if (arr.length === 0) return 1;
    // multiply first index by result of next slice
    return arr[0] * product(arr.slice(1));
};

const recursiveRange = (num) => {
    if (num === 1) return 1;
    return num + recursiveRange(num - 1)
}

const fibonacci = (num) => {
    if (num <= 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2)
}