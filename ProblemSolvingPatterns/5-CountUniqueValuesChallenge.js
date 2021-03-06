/*
Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/

const countUniqueValues = (arr) => {
    if (arr.length === 0) return 0;
    //pointer represents starting index
    let i = 0;
    //loop for second pointer to compare each number
    for (let j = 1; j < arr.length; j++){
        if (arr[i] !== arr[j]) {
            i++;
            //move value of arr[j] to current position. 
            //the index of arr[i] is also the count of unique values
            arr[i] = arr[j];
        }
        // if nothing happens, j moves on to next index
    }
    return i + 1;
}
console.log(countUniqueValues([1,2,2,5,7,7,99])); 