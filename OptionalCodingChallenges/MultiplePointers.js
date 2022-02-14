/*
Write a function called averagePair. Given a sorted array of integers and a target avg, determine if there is a pair of values in the array where the avg of the pair equals the target average. There may be more than one pair that matches the avg target.

Bonus constraints:
Time: O(n)
Space: O(1)
*/

function averagePair(arr,avg){
    let start = 0;
    let next = arr.length - 1;
    while (next > start) {
        if ((arr[next] + arr[start]) / 2 < avg) {
            start++
        } else if ((arr[next] + arr[start]) / 2 > avg) {
            next--
        } else if ((arr[next] + arr[start]) / 2 === avg) {
            return true;
        }
    }
    return false;
}

// console.log(averagePair([1,2,3],2.5));
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
// console.log(averagePair([-1,0,3,4,5,6], -4.1))
// console.log(averagePair([],4));

/*
 Write a function which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/

function isSubsequence(str1,str2) {
    let i = 0;
    let j = 0;

    while (j < str2.length) {
        if (str1[i] === str2[j]) {
            i++
        }
        if (i >= str1.length) {
            return true;
        }
        j++ 
    }
    return false;
}

console.log(isSubsequence("hello", "hello world")); //true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "acb")); // false