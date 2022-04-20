// make a function that capitalizes the first letter of each word in an array of strings
const capitalizeFirst = (arr) => {
    if (arr.length == 1) {
        return [arr[0][0].toUpperCase() + arr[0].substr(1)];
    }
    const res = capitalizeFirst(arr.slice(0, -1));
    const str =
        arr.slice(arr.length - 1)[0][0].toUpperCase() +
        arr.slice(arr.length - 1)[0].substr(1);
    res.push(str);
    return res;
};

// write a function that returns the sum of all even numbers in an object which may contain nested objects

const nestedEvenSum = (obj) => {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }
    return sum;
};

// write a function that takes in an array of words and returns a new array containing each word with all letters capitalized

const capitalizeWords = (arr) => {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
    }
    let result = capitalizeWords(arr.slice(0, -1));
    result.push(arr.slice(arr.length - 1)[0].toUpperCase());
    return result;
};

// write a function which takes in an object and fins all of the values which are numbers and converts them to strings

const stringifyNumbers = (obj) => {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            newObj[key] = obj[key].toString();
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
};

// write a function called collectStrings which accepts an object and returns an array of all values in the object that have a typeof string

const collectStrings = (obj) => {
    let stringsArr = [];

    function gatherStrings(o) {
        for (let key in o) {
            if (typeof o[key] === "string") {
                stringsArr.push(o[key]);
            } else if (typeof o[key] === "object") {
                return gatherStrings(o[key]);
            }
        }
    }

    gatherStrings(obj);

    return stringsArr;
};
