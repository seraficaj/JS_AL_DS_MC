# Objects and Big O

- Objects are **unordered, key-value pairs**

- When to use objects
    - when you don't need an order
    - when you need fast access/insertion and removal

- Big O of Objects
    - Insertion O(1)
    - Removal O(1)
    - Searching - O(n)
        - this is not looking for a specific key
        - refers to checking if a value exists inside a value somewhere in the object
        - this may involve checking all properties, therefore O(n)
    - Access - O(1)

- Big O of Object Methods
    - Object.keys - O(n)
    - Object.values - O(n)
    - Object.entries - O(n)
    - hasOwnProperty - O(1)
        - checks if property exists and returns a boolean
    