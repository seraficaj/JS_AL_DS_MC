# 2. Timing Our Code

## An Example

Suppose we want to write a function that calculates the sum of all numbers from 1 up to and including some number n.

```
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i<= n; i++) {
        total += 1;
    }
    return total;
}
```

This is another solution:
```
function addUpTo(n) {
    return n * (n + 1) /2;
}
```

## Which is better?
For this exercise, it's also important to consider what "better" should mean?

In this case, the **speed** of the code - **how long it takes to run** will determine which is better.

## Why not use timers?
- Manually timing the length of functions isn't reliable because:
    - different machines will record different times for the same operation
    - the same machine will record different times for the same operation
    - for fast algorithms, speed measurements may not precise enough