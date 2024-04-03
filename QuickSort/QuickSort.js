/*
INTRO NOTES
- like merge sort, exploits the fact that arrays of 0 or 1 length are always sorted
- works by selecting 1 elem (called the "pivot") and finding the idx where the pivot should end up in the sorted arr
- once the pivot is positioned appropriately, quick sort can be applied (recursively) on either side of the pivot
*/