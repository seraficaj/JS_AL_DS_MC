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