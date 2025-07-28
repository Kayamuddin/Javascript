// ...var in parameter then it is rest operator
// ...var in argument then it is spread operator
/* Function Declaration (Named Function)
console.log(greet("Kayam")); // Hello Kayam         // Hoisted — You can call it before the function is defined
function greet(name) {
  return "Hello " + name;
}

// Function Expression
// console.log(greet("Khan"));                      // Not hoisted — Cannot call before definition
const greet = function(name) {
  return "Hi " + name;
};
console.log(greet("Khan")); // Hi Khan

// Anonymous Function                               // A function with no name, often used in expressions like
setTimeout(function() {
  console.log("Hello after 1 second");
}, 1000);

// Constructor Function                             // Using the Function constructor to create a function:
const sum = new Function("a", "b", "return a + b");
console.log(sum(2, 3)); // 5

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("I run automatically!");
})
();

// Parameters vs Arguments
function greet(name) { // 'name' is a parameter
  console.log("Hello " + name);
}
greet("Kayam"); // "Kayam" is an argument

// Callback Functions
function processUserInput(callback) {
  const name = "Kayam";
  callback(name);
}
processUserInput(function (name) {
  console.log("Hello " + name);
});

// Function Constructor
const add = new Function("a", "b", "return a + b");
console.log(add(2, 3)); // 5




*/

// ***********ES6+ Functions (Modern JavaScript)*************
//  Arrow Functions                                // Implicit return (no {} or return) for single expressions
const add = (a, b) => a + b;
const greet1 = (name) => {
  return "Hello " + name;
};
// Arrow functions do NOT have:
// Their own this
// arguments object
// Cannot be used as constructors

// Default Parameters
function greet(name = "Guest") {
  return "Hello " + name;
}
console.log(greet()); // Hello Guest

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))  // [500, 2000]


// Spread Syntax (Used with functions)                // Expands arrays into individual arguments:
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3

// Enhanced Object Method Shorthand
const user = {
  name: "Kayam",
  greet() {
    console.log("Hi " + this.name);
  }
};
user.greet(); // Hi Kayam

// Function Name Inference
const sayHi = function() {
  const name = "Kayamuddin"
};
console.log(sayHi.name); // "sayHi"             it .name return the name of function














/* Arrow Function vs Regular Function
| Feature                    | Regular Function | Arrow Function |
| -------------------------- | ---------------- | -------------- |
| Has `this` binding         | ✅ Yes            | ❌ No           |
| Can be used as constructor | ✅ Yes            | ❌ No           |
| Has `arguments` object     | ✅ Yes            | ❌ No           |
| Hoisted                    | ✅ Yes            | ❌ No           |
*/

// Return Statement                              // If no return, function returns undefined
function getName() {
  return "Kayam";
}
console.log(getName()); // Kayam

// Closures (Advanced Concept)                       // A function can access variables from its outer scope even after the outer function has returned.
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2

// Named vs Anonymous Function
// Named
function namedFn() {
  console.log("I have a name");
}
// Anonymous
const anonFn = function () {
  console.log("I have no name");
};

// object Parameter
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
const user1 = {
    username: "hitesh",
    prices: 199
}
handleObject(user1)
handleObject({
    username: "sam",
    price: 399
})

// Array Parameter
const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));   // 400
console.log(returnSecondValue([200, 400, 500, 1000])); // 400