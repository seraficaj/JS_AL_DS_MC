# Multiple Pointers

    - Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

- very efficient for solving problems with minimal space complexity as well

## An example

Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

```
sumZero([-3,-2,-1,0,1,2,3]) // [3,-2]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
```

## Using the multiple pointers pattern

Do not do the naive solution! 
- the naive solution nested loops to compare each possible pair in the sorted array!

Instead, make two pointers
- 1 pointer at the beginning
- 1 pointer at the end
- sum the value of both pointers:
    - if sum is less than 0, go to 1 pointer after the beginning
    - if sum is greater than 0, go to 1 pointer before the end
    - if sum is 0, return the value of each pointer

```js
function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


sumZero([-4,-3,-2,-1,0,1,2,5])
```