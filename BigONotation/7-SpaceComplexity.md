# Space Complexity

- Space Complexity - How much additional memory needs to be allocated in order to the run an algorithm?

## Space Complexity Rules
1. Most primitives (booleans, numbers, undefined, null) are constant space
2. String require O(n) space (where n is the string length)
3. Reference types are generally O(n) where is n is the length (for arrays) or number of keys (for objects)

```js
function sum(arr) {
    let total = 0;
    for (let i =0 ; i<arr.length; i++) {
        total += arr[i];
    }
    return total;
}
```

No matter the size of arr, there are only 2 variables defined in this function. Therefore, this algorithm has a space complexity of O(n). There will always be 2 variables.


```js
function double(arr) {
    let newArr = [];
    for (let i=0; i<arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
```
The input space grows in proportion to size of input arr. Therefore, this algorithm has a space complexity of O(n).