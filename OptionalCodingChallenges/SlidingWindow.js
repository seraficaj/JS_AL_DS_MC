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
    let start = 0;
    let pointer = 0;
    let sum = 0;
    let minLength = Infinity;
    while (start < arr.length) {
        if (sum < num) {
            sum += arr[pointer];
            pointer++;
        } else if (sum >= num) {
            minLength = Math.min(minLength, pointer - start);
            sum -= arr[pointer];
            pointer++;
        }
    }
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 because [4,3] is the smallest subarray
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 because [62] is greater than 52

// 3. Find Longest Substring. 

function findLongestSubString(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start,seen[char])
        }
        // index - start of substring + 1 (to include current char in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char to avoid double count
        seen[char] = i + 1
    }
    return longest;
}
