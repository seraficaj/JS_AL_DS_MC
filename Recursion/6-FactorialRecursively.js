const factorialNum = (num) => {
    if (num === 2) return 1;
    return num * factorialNum(num - 1);
}

console.log(factorialNum(5));