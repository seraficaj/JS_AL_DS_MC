# Step 2 - Concrete Examples

## Explore Examples
- Coming up with examples can help you understand the problem better

- Examples also provide sanity checks that show the solution works how it should

- User Stories are an example
    - Given an input (user action) what should happen?
- Unit Tests are another example

- Start with simple examples with an input and output
- Progress to more complex examples
- Then edge cases
    - empty inputs
    - invalid inputs

## Example Exercise
    - write a function that takes in a string and returns count of each character in the string

### Simple Examples

```js
charCount("aaaa"); // returns {a:4}
charCount("hello");
```
^ Are all letters in the alphabet counted? This should be clarified

### More complex examples
```
charCount("My phone number is...")
```
^ What about numbers in capital letters?

### Empty Examples
`charCounts()` should return what? what about an empty string?

### Invalid Inputs
`charCounts(null)`
