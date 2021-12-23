# Simplifying Big O Expressions

## Rules for Counting Operations

-   Constants Don't Matter
    -   O(2n) => O(n)
    -   O(500) => O(1)
    -   O(13n^2) => O(n^2)
-   Smaller Terms Don't Matter
    -   O(n + 10) => O(n)
    -   O(1000n + 50) => O(n)
    -   O(n^2 + 5n + 8) => O(n^2)
-   Analyzing complexity with Big O Can Get Complicated

## Big O Shorthands

1. Arithmetic Operations are constant
2. Variable assignment is constant
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

## More Examples

```js
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
```
has a time complexity of O(n) because the numbers of operations simplifies down to n times

```js
function logAtMost5(n) {
     for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
```
has a time complexity of O(1) because the number of operations is constant as n approaches infinity. it will always print 5 if n is high enough in value
