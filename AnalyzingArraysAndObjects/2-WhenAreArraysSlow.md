# When Are Arrays Slow?

Arrays are **ordered lists**

# When to use arrays?
- When you need order
- When you need fast access/insertion and removal 

# Big O of Arrays
- Insertion - It depends where insertion happens
    - Adding an item at the end is O(1). 
    - Adding an item at the beginning is O(n)
        - every element has to be re-indexed 
- Removal - It depends on where removal happens
    - Removing item at the beginning is O(n)
        - every item has to be re-indexed
    - Removing an item as the end is O(1)
- Searching - O(n)
- Access - O(1)
    - any index in an array can be accessed in O(1) time regardless of its position