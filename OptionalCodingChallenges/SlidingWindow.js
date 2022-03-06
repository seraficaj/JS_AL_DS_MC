// 1. Given an arr of integers and a num, write a function called MaxArraySum which finds the max sum of a contiguous subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original, but [100, 300] is not.

const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
};
maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([2, 3], 3); // null

// 2. Given an arr of integers and a num, write a function called minSubArrayLen which finds the min length of a continguous subarray with the sum >= the number passed to the function. If there isn't one, return 0 instead.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original, but [100, 300] is not.

function minSubArrayLen(arr, num) {
    // largest possible array size
    let result = Infinity;
    // set up window
    let left = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        while (sum >= num) {
            // compare between current length and window
            result = Math.min(result, i - left + 1);
            sum -= arr[left];
            left++;
        }
    }
    if (result === Infinity) {
        return 0;
    }
    return result;
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 because [4,3] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 because [62] is greater than 52

/*
Write a function called findLongestSubstring which accepts a str and returns length of the longest substr with all distinct characters.
*/

const findLongestSubstring = (str) => {
    let start = 0;
    let chars = {};
    let longest = 0;

    for (let i=0; i < str.length; i++) {
        let char = str[i];
        if (chars[char]) {
            start = Math.max(start, chars[char]);
        }

        longest = Math.max(longest, i - start + 1);
        chars[char] = i + 1;
    }
    return longest;
}

findLongestSubstring('') //0
findLongestSubstring('rithmschool') //7
findLongestSubstring('thisisawesome') //6