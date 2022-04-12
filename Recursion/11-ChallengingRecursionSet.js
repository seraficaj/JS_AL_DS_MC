// 1. Return a new string in reverse.

function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    if (str.length === 1) return str;
    return reverse(str.slice(1)) + str[0];
  }
  
  // reverse('awesome') // 'emosewa'

  //2. Write a function which returns true if string passed to it is a palindrome. Otherwise, return false.

  function isPalindrome(str) {
    if (str.length === 1 || str.length === 0) return true;
    if (str.length === 2) {
      str[0] === str[1] ? true : false;
    }
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1));
    return false;
  }

  //3. Write a function called someRecursive which accepts an array and a callback. Function returns true if a single value in array returns true when passed to the callback. Otherwise, return false.

  function someRecursive(arr, cb) {
    if (arr.length === 0) return false;
    if (cb(arr[0])) return true;
    return someRecursive(arr.slice(1), cb)
  }

  //4. Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

  function flatten(arr) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result = result.concat(flatten(arr[i]));
      } else {
        result.push(arr[i]);
      }
    }
    return result;
  }