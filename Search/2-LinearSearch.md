# Linear Search

Suppose you have an array of states in the USA. How do you find if the array contains the name of a state?

The simplest way to search for a value is to look at every element in the array and check if it's the value you want.

In an unsorted array, this is also the best way to find an item.

JavaScript has many methods that use Linear Search:
- indexOf
- includes
- find
- findIndex

## Linear Search Pseudocode

```js
const linearSearch  = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        } 
    }
    return -1;
} 
```

## Big O
- Best Case: O(1)
- Avg Case: O(n)
- Worst Case: O(n)