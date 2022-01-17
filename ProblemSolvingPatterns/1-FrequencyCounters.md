# Frequency Counters
    - this pattern uses objects or sets to collect values/frequencies of values
- this can often avoid the need for nested loops or o(n^2) operations with arrays/strings

## Example problem
    - write a function called same which accepts two arrays. return true if every value in the array has it's corresponding value squared in the 2nd array. the frequency of values must be the same.

```js
same([1,2,3],[4,1,9]) // true
same([1,2,3],[1,9]) // false
same([1,2,1],[4,4,1]) // false - (must be same frequency of values) to return true, the 2nd input would have to be [1,4,1]
```

## Naive Solution
```js
const same = (arr1,arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i=0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}

// time complexity: O(n^2)
```

## Refactored Solution
```js
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])

// time complexity - O(n)
```

## Main Idea of Frequency Counters
- use an object to construct a profile breaking down the contents of some linear structure like an array or string
- quickly compare that breakdown to how another object looks that was constructed from a string or array