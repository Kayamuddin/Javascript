// ****************** Scope ******************
/*
| Scope Type           | Description                                          |
| -------------------- | ---------------------------------------------------- |
| 🔸 Global Scope      | Variables accessible from anywhere                   |
| 🔸 Function Scope    | Variables accessible only inside a function          |
| 🔸 Block Scope       | Variables accessible only inside `{}` blocks         |
| 🔸 Lexical Scope     | How nested scopes access variables from outer scopes |
| 🔸 Module Scope      | Variables inside modules (ES6 `import/export`)       |
| 🔸 Dynamic Scope (❌) | Not in JS, but worth mentioning                      |
*/

// Global Scope
if (true) {
    var globalVar = "I'm global";
    function show() {
        console.log(globalVar); // ✅ Accessible
    }
    show();
    console.log(globalVar); // ✅ Accessible
}
console.log(globalVar);  // ✅ Accessible
// globalVar is accessible anywhere in the file (or browser console)

// Function Scope
// Variables declared with var inside a function are scoped only to that function
function greet() {
  var message = "Hello";
  console.log(message); // ✅ Accessible here
}
greet();
// console.log(message); // ❌ ReferenceError

// Block Scope (introduced in ES6)
// let and const are block scoped — they exist only inside {}
if (true) {
  let x = 10;
  const y = 20;
  console.log(x, y); // ✅ 10, 20
  if(true){
    console.log(x, y); // ✅ 10, 20
  }
}
// console.log(x, y); // ❌ ReferenceError

// Lexical Scope (Scope Chain)
// Lexical scope means a function can access variables defined in its outer scope (where it was written).
function outer() {
  let a = "outer";
  function inner() {
    console.log(a); // ✅ "outer"
  }
  inner();
}
outer();

// Module Scope (ES6 Modules)
// When using ES6 modules (import / export), each file has its own module scope
/* file: math.js
const PI = 3.14;
export default PI;
// file: app.js
import PI from './math.js';
console.log(PI); // ✅ 3.14
// Variables in one module are not visible globally unless exported
*/

// Dynamic scope would mean:
// A function's variables depend on where it was called, not where it was defined.
// JS uses lexical scope instead — based on definition.

// Variable Shadowing
let x = 1;
function test() {
  let x = 2;
  console.log(x); // 2 — inner x "shadows" outer x
}
test();
console.log(x); // 1 — global x unchanged



// ************* Hoisting ***************
// This means you can use variables or functions before they are declared — but only partially depending on how they are declared.

// Hoisting with var
console.log(a); // undefined
var a = 5;

// Temporal Dead Zone (TDZ)
// Applies to let and const before they are declared
console.log(x1); // ❌ ReferenceError
console.log(x2); // ❌ ReferenceError
let x1 = 5;
const x2 = 5;

// Hoisting with Function Declarations
greet(); // ✅ Works
function greet() {
  console.log("Hello!");
}

// Hoisting with Function Expressions
sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function () {
  console.log("Hi!");
};

// Hoisting with Arrow Functions
add(2, 3); // ❌ TypeError: add is not a function
var add = (a, b) => a + b;