/*

Merge Sort
- combo of 3 things:
    - splitting
    - sorting
    - merging
- exploits the fact that arrays of 0 or 1 element are already sorted
- works by decomponsing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
    - AKA Divide and Conquer algorithm
- How does Merge Sort work?
    - first, split the array in half
    - keep splitting until you have many single item arrays
    - merge back into sorted arrays
        - each sub array is subsequently sorted and merged until the original array's length 
        
*/

/*
- in order to implement merge sort, implement a function responsible for merging two sorted arrays
- given 2 sorted arrays, the helper merge function should create a new array which is: 
    - also sorted, and 
    - consists of all elements in the 2 input arrays
- this function should run in O(n+m) time and O(n+m) space and should not modify parameters passed to it
    - n and m represent the 2 input arrays
    - if n grows super large, but m does not, it should just be closer to O(n). Often, both inputs will be the same size.
    - bottom line: the algo will iterate over each item in both arrays
*/

// Pseudocode
/*
    - create an empty array, take a look at the smallest values in each input array
    - while there are still values we haven't looked at:
        - if the value in the 1st array < value in 2nd array:
            - push value in 1st array into our results
            - move on to next value in 1st array
        - if value in first array > value in 2nd array:
            - push value of the 2nd array into our results
            - move on to next value in 2nd array
        - once we exhaust one arrau, push in all remaning values from other array
*/

function mergeSort(){
    
}

mergeSort([1,10,50],[2.14.99,100])