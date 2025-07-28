// The value of this depends on the execution context:
// Global context
// Function context
// Object method context
// Using this with call, apply, and bind
// Arrow functions
// Class context
// Event handlers

// Global Context (non-strict mode)
console.log(this);  // In browser, refers to window        // in Node, refers to {}

// Inside a Regular Function
// a. Non-strict mode
function show() {
  console.log(this);
}
show(); // window (in browser)        // in Node ,Object [global] {....}
// b. Strict mode                   // In strict mode, this inside a standalone function is undefined
"use strict";
function show() {
  console.log(this);
}
show(); // undefined                  // in Node ,Object [global] {....}

// Inside an Object Method
const person = {
  name: "Kayamuddin",
  greet() {
    console.log(this.name);
  }
};
person.greet(); // Kayamuddin

// Using this with call, apply, and bind
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };
function say(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
say.call(person1, "Hello"); // Hello, Alice           FuncName.call(ObjName, "Argument")
say.apply(person2, ["Hi"]); // Hi, Bob                FuncName.apply(ObjName, [Argument])
const boundSay = say.bind(person1);                   
boundSay("Good Morning");   // Good Morning, Alice    
//
function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2,5); // fixes `a = 2`   `b = 5`      // null: This is the value for this (not used in multiply, so it's okay to pass null)
console.log(double()); // 10
const double1 = multiply.bind(null, 2); // fixes `a = 2`
console.log(double1()); // NaN
const double2 = multiply.bind(null, 2); // fixes `a = 2`
console.log(double2(5)); // 10

/*
| Method    | Invokes Function? | Sets `this` | Argument Format         |
| --------- | ----------------- | ----------- | ----------------------- |
| `call()`  | ✅ Yes             | ✅ Yes       | Separate values: `a, b` |
| `apply()` | ✅ Yes             | ✅ Yes       | Array: `[a, b]`         |
| `bind()`  | ❌ No (returns fn) | ✅ Yes       | Separate values: `a, b` |
*/


// Arrow Functions and this
// Arrow functions do not have their own this. They inherit it from the parent scope
const user1 = {
  name: "Kayamuddin",
  greet: () => {
    const name = "Shehzan";
    console.log(this.name);
  }
};
user1.greet(); // undefined
//
const user2 = {
  name: "Kayamuddin",
  greet() {
    const name = "Shehzan";
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};
user2.greet(); // Kayamuddin

// In Classes
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
const p = new Person("Kayamuddin");
p.greet(); // Hi, I'm Kayamuddin

/* DOM Event Handlers
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log(this); // the button element
});
//
btn.addEventListener("click", () => {
  console.log(this); // inherits from outer scope (usually window)
});
// Use regular functions when you want this to refer to the HTML element.
*/

/*
| Context                | What `this` refers to             |
| ---------------------- | --------------------------------- |
| Global (non-strict)    | `window` (or `global` in Node.js) |
| Global (strict)        | `undefined`                       |
| Object method          | The object                        |
| Function (non-method)  | `undefined` or `window`           |
| Arrow function         | Inherits from outer scope         |
| Class method           | The instance                      |
| DOM handler (function) | The DOM element                   |
| DOM handler (arrow)    | Lexical scope (not the element)   |
*/

// Tricky Question
const obj = {
  name: "Kayamuddin",
  getName: function () {
    return this.name;          // this in standalone function call
  }
};
const get = obj.getName;
const get1 = obj.getName();
console.log(get()); // undefined
console.log(get); // [Function: getName]
console.log(get1); // Kayamuddin           // in arrow Func 'undefined'

// Arrow vs Regular Function
const person3 = {
  age: 25,
  regular: function () {
    console.log(this.age);
  },
  arrow: () => {
    console.log(this.age);
  }
};
person3.regular(); // 25
person3.arrow();   // undefined

// Binding and setTimeout
const obj2 = {
  value: 42,
  showValue: function () {
    setTimeout(function () {
      console.log(this.value);
    }, 1000);
  }
};
obj2.showValue();  // undefined

const obj3 = {
  value: 42,
  showValue: function () {
    setTimeout(() => {
      console.log(this.value);
    }, 1000);
  }
};
obj3.showValue();    // 42