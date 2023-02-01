# Insertion Sort

- builds up the sort by gradually creating a larger left half which is always sorted
  - instead of finding the largest / smallest elem at a time, it places each element into a sorted "left half"

## Pseudocode

- start by picking 2nd element because the sorted portion will be considered the 1st elem
  - in effect, the "left half" begins with one thing already in it
  - continue to next elem and if it is incorrect order:
    - iterate through sorted portion
    - place elem in correct place
  - repeat until array is sorted
