/* write a function called same which accepts two arrays. 

return true if every value in the array has it's corresponding value squared in the 2nd array. 

the frequency of values must be the same. 

the order of the second input array does not matter.
*/

// Unoptimized/"Naive" Solution
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

same([1,2,3],[4,1,9]); // true
same([1,2,1],[1,4,4]);  //false 

function sameOptimized(arr1, arr2){
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

// sameOptimized([1,2,3,2,5], [9,1,4,4,11])