# Bubble Sort 
A sorting algo where largest values "bubble up to top" one at a time

## Steps
- start looping from i representing the end of the array. go towards the beginning.
- start an inner loop with a var called j from beginning of array until j = i -1;
- if arr[j] > arr[j+1], swap those 2 values
- return sorted array

## implementation
```js
function bubblesort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                // swap here
                let temp  = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr;
};
```
this implementation is not ideal. the inner loop always tries to compare against every item in the array.

additionaly, the var j can reach beyond the length of the array and will result in comparisons towards undefined

## improved implementation
- start at end of array
- this results in considerably less comparisons
```js
function bubblesort(arr) {
    for (let i = arr.length; i > arr.length; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                // swap here
                let temp  = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    return arr;
};
```

why is bubble sort still less than ideal?