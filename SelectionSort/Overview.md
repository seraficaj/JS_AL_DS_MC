# Selection Sort

-   similar to Bubble Sort, but instead of first placing large values into sorted position, it places small values into sorted position
-   in other words, the smallest value is always moved to the front of the array

## pseudo code

-   store 1st elem as smallest value you've seen so far
-   compare this item to the next item in the arr until you find a smaller number
-   if smaller num is found
    -   designate the smaller num to be the new min and continue until end of arr
    -   if the min(index) is not the value you intially began with, swap the two values
    -   repeat this with the next elem until the array is sorted
    -   the swap needs to happen or no new min will ever be found

## implementation in JavaScript

```js
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // min = index of smallest value in arr
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // prevent unneeded swaps if lowest value is already at start of arr
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
selectionSort([34, 22, 10, 19, 17]);
```

## Big O Complexity

-   Worst Case: O(n^2)
    -   has to compare all elements to all other elements
-   Selection Sort is better than Bubble Sort if you want to minimize the number of swaps
    -   there is only one swap at the end of the loop
    -   otherwise it's not very good

## ES2015 Syntax

```js
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        return ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    };
    for (let i = 0; i < arr.length; i++) {
        let min = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) swap(arr, i, min);
    }
    return arr;
}
```
