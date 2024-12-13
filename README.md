# JavaScript Bug: Incorrect Handling of Undefined Values

This repository demonstrates a common JavaScript bug involving the incorrect handling of `undefined` values. The function `foo` aims to return 0 for both `null` and `undefined` inputs, but it currently only does so for `null`.  This is because `undefined` does not have a `length` property, and the code results in a runtime error. This can be a tricky bug to debug because it only surfaces when using the `undefined` value. 

## Bug Description:
The function `foo` should return 0 if the input `a` is either `null` or `undefined`. However, it currently only handles `null` correctly. When `undefined` is passed as an argument, an error occurs because `undefined` does not have the property length.

## Solution:
The solution involves explicitly checking for both `null` and `undefined` using strict equality (===) and making sure to return 0 for either case. This ensures a robust function that handles different input types gracefully. 

## How to reproduce the bug:
1. Clone this repository.
2. Run `node bug.js`.

## How to run the solution:
1. Clone this repository.
2. Run `node bugSolution.js`.