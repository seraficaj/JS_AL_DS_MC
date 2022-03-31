# Common Recursion Pitfalls
- No return base case.
    - leads to stack overflow (exceeds max call stack size)
- not returning the correct input for next call of function
    - also leads to stack overflow