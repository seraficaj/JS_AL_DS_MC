# The Sliding Window Pattern
    - The Sliding Window Pattern creates a **window** which can either be an array or number from one position to another.

    - Depending on a certain condition, the window either increases or closes (and a new window is created)

    - Very useful for keeping track of a subset of data in an array/string, etc. that is continuous in some way.

## Examples
    - find the longest sequence of unique characters in a string

```
uniqueCharacters("hellothere") // returns "lother"
```

    - write a function named maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

```
maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([], 4) // null
```

- the naive solution to maxSubarraySum is to create a a subarray variable to hold n elements and then loop over and sum together each sub array's elements, then move on to the next index as the starting point of the next sub array.
    - this has a time complexity of O(n^2)
```js
function maxSubarraySum(arr, num) {
  if ( num > arr.length){
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++){
    temp = 0;
    for (let j = 0; j < num; j++){
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
```

- an efficient O(n) solution uses the Sliding Window Pattern instead of checking each index's sub array:

```js
const maxSubarraySum = (arr,num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    // first possible sum
    for (let i=0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    // move the sub array through to end of array
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
```