/*
INTRO NOTES
- like merge sort, exploits the fact that arrays of 0 or 1 length are always sorted
- works by selecting 1 elem (called the "pivot") and finding the idx where the pivot should end up in the sorted arr
- once the pivot is positioned appropriately, quick sort can be applied (recursively) on either side of the pivot
*/

/*
Pivot Helper Function Overview
- the pivot helper function arranges elements in an arrray on either side of pivot
- given an array, this helper function should designate an element as the pivot
- it should rearrange the elements in the array such that:
- all values less than the pivot are moved to the left of the pivot (beginning of array --> pivot)
- all values greater than the pivot are moved to the right of the pivot (pivot --> end of array)
- the order of elems on either side of pivot does not matter
- the helper function should arrange the elems in place
- that is, it should not create a new array
- when complete the helper should return the idx of the pivot
*/

/*
Picking which point should be a pivot
- the runtime of Quick Sort depends on the value of the pivot
- ideally, the pivot should be chosen so that it's roughly the median value in the data set that is being sorted
- at first, we will choose the 1st elem to be the pivot
- this has some consequences on the runtime
*/

/*
Pivot Pseudocode

- accept 3 args:
- array
- start idx (default value = 0)
- end idx (default value = arr.length - 1)
- grab the pivot from start of array
- store current pivot idx in a var (keep track of where pivot should end up)
- loop thru array from start to end
- if (pivot > current elem) 
  - increment the pivot idx var by 1
  - swap the current elem with elem at pivot idx
- swap the starting elem (i.e the pivot) with the pivot idx
- return the pivot idx
*/

/* Pivot Helper Implementation */
function pivot(arr, start = 0, end = arr.length + 1) {
    // swap helper function
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    /*
  ES2015 Swap Function
  const swap(array,i,j) => {
    [array[i],array[j]] = [array[j],array[i]]
  }
  */

    let pivotPt = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivotPt > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

/* 
Quick Sort Pseudocode 
- call the pivot helper on the array
- when the helper returns the updated pivot idx,
  - recursively call the pivot helper on the subarray on the left and right sides of that idx
- no new new arrays are made, this happens in place
- your base case occurs when you consider a subarray with less than 2 elems
*/

/* Quick Sort Implementation */
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIdx - 1);
        // right
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}
