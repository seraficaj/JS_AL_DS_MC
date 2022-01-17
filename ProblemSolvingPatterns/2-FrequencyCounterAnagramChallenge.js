/*
Given 2 strings, write a function to determine if the 2nd string is an anagram of the 1st. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as the word cinema from the letters of iceman. Assume all inputs will be single words made up lowercase letters and no numbers.

validAnagram('','') => true
validAnagram('aaz', 'zza') => false
validAnagram('qwerty','qeywrt') => true

*/

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let str1Counter = {};
    let str2Counter = {};

    for (let char of str1) {
        str1Counter[char] = (str1Counter[char] || 0) + 1;
    }
    for (let char of str2) {
        str2Counter[char] = (str2Counter[char] || 0) + 1;
    }

    for (let char in str1Counter) {
        if (!(str1Counter[char] === str2Counter[char])) {
            return false;
        }
    }
    return true;
}

validAnagram('','');
validAnagram('aaz', 'zza');
validAnagram('qwerty','qeywrt');
