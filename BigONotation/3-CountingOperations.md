# 3 Counting Operations

Instead of using time, which could vary, **an algorithm's speed can be determined by number of simple operations that the computer has to perform**

In this example, there are three operations:
```
function addUpTo(n) {
    return n * (n + 1) /2;
}
```
- a multiplication
- an addition
- a division

But in this example:
```
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i<= n; i++) {
        total += 1;
    }
    return total;
}
```
How many operations are there?

Not a static number because there will be more operations as the value of n grows bigger.

**the number of operations grows proportionally with n**