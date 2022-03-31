# Helper Method Recursion

```js
function outer(input) {
    let outerScopedVar = [];
    function helper(helperInput) {
        //modify outerScopedVar
        helper(helperInput--);
    }
    helper(input);
    return outerScopedVar;
}
```

Helper Method is a recursion is a design pattern: 
- there is an outer function 
- and a recursive inner helper function

this pattern is useful for creating a value- like an array- that needs to persist between each call of the recursive function.

Another Example

```js
function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
```
