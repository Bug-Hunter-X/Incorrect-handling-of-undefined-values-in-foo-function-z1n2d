function foo(a) {
  if (a == null) {
    return 0; 
  }
  return a.length; 
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: undefined.  Should be 0
console.log(foo([1,2,3])); // Output: 3