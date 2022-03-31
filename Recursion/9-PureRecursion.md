# Pure Recursion (no helper methods)

```js
function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
    // all arrays returned from each recursive call get .concat-ted at the end
    // .concat joins 2 arrays together into 1 array
    // .slice takes everything after index 0 in an array   
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
```

Pure Recursion Tips
- array methods like slice, spread operator, and .concat make copies of arrays that don't mutate the original array
- strings are immutable. use .slice, substr, substring to make copies of strings
- to make copies of objects, use Object.assign or spread operator