# Introducing BIG O

Big O Notation is a way to formalize fuzzy counting.

It allows us to formally talk about how the runtime of an algorithm grows as the input grows

Details don't matter. Only trends.

## Big O Formal Definition

**"An Algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant time f(n) as n increases.**

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

As n grows, what trendline would appear?

Big O is always the **worst case scenario** - the upper bound of the possible size for input.

## Example
```js
function addUpTo(n) {
    return n * (n+1) / 2;
}
```

has a runtime of O(1) because there are always 3 operations regardless of n's size.

```js
const appUpTo(n) => {
    let total = 0;
    for (let i= 1; i <= n; i++) {
        total += i;
    }
    return total
}
```
has a runtime of O(n) because the number of operations is bounded by a muliple of n (10n and so on)

```js
function printAllPairs(n) {
    for (var i=0; i < n; i++) {
        for (var j-0; j < n; j++;) {
            console.log(i,j)
        }
    }
}
```
has an O(n^2) because there is an O(n) operation sinde of an O(n) operation