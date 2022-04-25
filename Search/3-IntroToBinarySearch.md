# Binary Search
- Binary search is a much faster form of search
- you can remain half of the remaining elements at a time rather than checking each element one at a time!
- binary search ONLY works on sorted arrays

## How Binary Search Works:
- array has to be sorted first
- pick left and right points. then a middle in between them
    - if value is greater or lesser than the midpoint, eleminate half and reset the window

## Binary Search Pseudocode
- function accepts a sorted array and a value to find
- create left pointer at array start and right pointer at end of array
- while loop, while left pointer comes before the right pointer
    - create middle pointer
    - if value found, return index
    - if value too small, move left pointer up
    - if value too large, move right pointer down
- return -1 if value never found