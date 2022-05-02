# Naive String Search
- finding substrings in a string
- how can you find the number of times a substring appears in a string?
    - the naive approach involves checking pairs of characters individually

## Pseudocode
- loop over the longer string
- loop over the shorter string
- if the characters don't match, break out of the inner loop
- if character do match, keep going until the end of the shorter string
- if substring loop complete, increment count of matches
- return count of matches