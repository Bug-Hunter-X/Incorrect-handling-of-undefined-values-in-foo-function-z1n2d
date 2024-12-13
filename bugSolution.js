function foo(a) {
  if (a === null || a === undefined) {
    return 0; 
  }
  return a.length; 
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo([1,2,3])); // Output: 3