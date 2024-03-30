/*

Merge Sort
- combo of 3 things:
    - splitting
    - sorting
    - merging
- exploits the fact that arrays of 0 or 1 element are already sorted
- works by decomponsing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
    - AKA Divide and Conquer algorithm
- How does Merge Sort work?
    - first, split the array in half
    - keep splitting until you have many single item arrays
    - merge back into sorted arrays
        - each sub array is subsequently sorted and merged until the original array's length 
        
*/

/*
- in order to implement merge sort, implement a function responsible for merging two sorted arrays
- given 2 sorted arrays, the helper merge function should create a new array which is: 
    - also sorted, and 
    - consists of all elements in the 2 input arrays
- this function should run in O(n+m) time and O(n+m) space and should not modify parameters passed to it
    - n and m represent the 2 input arrays
    - if n grows super large, but m does not, it should just be closer to O(n). Often, both inputs will be the same size.
    - bottom line: the algo will iterate over each item in both arrays
*/

// Pseudocode
/*
    - create an empty array, take a look at the smallest values in each input array
    - while there are still values we haven't looked at:
        - if the value in the 1st array < value in 2nd array:
            - push value in 1st array into our results
            - move on to next value in 1st array
        - if value in first array > value in 2nd array:
            - push value of the 2nd array into our results
            - move on to next value in 2nd array
        - once we exhaust one arrau, push in all remaning values from other array
*/

// implementation of merging the arrays (sorting wil lcome next)
function mergeArrays(arr1, arr2) {
    let results = [];

    // represent index positions in both input arrays
    let i = 0;
    let j = 0;

    // while loop to compare and merge input arrays
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    // add remaining values from arr1 or arr2 if one of the input arrays gets completely exhausted

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

mergeArrays([1, 10, 50], [2, 14, 99, 100]);

// What about the sorting part?

/*
most merge sort implementations make use of recursion (calling the function inside itself until a break condition is met)

Merge Sort Pseudocode:
- break up the array into halves until you have arrays that are empty or have 1 element
    - this can accomplished with the .slice() method
    - recursively call mergeSort to continue to break the halves into more halves until all the arrays have 1 or 0 elements 
- once we have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array 
- once the array has been merged back together, return the merged and sorted array
*/

// IMPLEMENTATION
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let midPt = Math.floor(arr.length / 2);
    let leftSide = mergeSort(arr.slice(0, midPt));
    // leaving off the second input in .slice extends the slice to the end of array
    let rightSide = mergeSort(arr.slice(midPt));
    // notice how the actual sorting happens inside the mergeArrays function
    return mergeArrays(leftSide, rightSide);
}

const randomNums = [
    Math.floor(Math.random() * 500),
    Math.floor(Math.random() * 500),
    Math.floor(Math.random() * 500),
    Math.floor(Math.random() * 500),
];
console.log(randomNums);
console.log(mergeSort(randomNums));
