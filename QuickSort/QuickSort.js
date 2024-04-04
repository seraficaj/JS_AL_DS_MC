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
*/