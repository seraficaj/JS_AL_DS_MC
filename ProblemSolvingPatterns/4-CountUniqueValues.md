# Count Unique Values

## Naive solution
- compare each number to every other number in the array

```js
/*
Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
*/
```

Problem Solving Approach
- start pointers at the first and second indexes
- if i and j are the same, move j forward
- j continues to move forward until it's different from i
- i changes its value to j and moves up one index, moving unique values to the front of the array
- j moves forward from index
- rinse and repeat
