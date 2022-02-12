// 1. Write a func called sameFrequency. Given 2 integers, find out if the two nums have the same frequency of digits. Your solution must have O(n) time complexity.

function sameFrequency(num1, num2) {
    function digitsFreq(str) {
        let container = {};
        for (let digit of str) {
            container[digit] = (container[digit] || 0) + 1;
        }
        return container;
    }
    let digits1 = digitsFreq(num1.toString());
    let digits2 = digitsFreq(num2.toString());
    console.log(digits1, digits2);
    for (let key in digits1) {
        if (!(digits1[key] === digits2[key])) {
            return false;
        }
    }
    return true;
}
// console.log(sameFrequency(3589578, 5879385));
// console.log(sameFrequency(22, 222));


// 2. Write a func called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any dupes among the args passed in. You can solve this problem using the frequency counter pattern or the multiple pointers pattern.

function areThereDuplicates() {
    let arr = [...arguments];
    let container = {};
    for (let index in arr) {
        container[arr[index]] = (container[arr[index]] || 0) + 1;
        console.log(index);
        console.log(container);
        if (container[arr[index]] > 1) return true;
    }
    return false;
};

console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true