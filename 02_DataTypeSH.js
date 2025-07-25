// typeof|typeof() // to find type
// Stack and Heap Memory
/* Stack (Primitive are stack)
let a = 10;         // Stored in stack
let b = a;          // Copy of a (also in stack)
b = 20;             // Changing b does not affect a
console.log(a);     // 10
Reference variable gets its own copy in the stack.
*/
/* Heap (Non-Primitive are Heap)
let obj1 = { name: "Alice" };  // Object is in heap
let obj2 = obj1;               // Reference copied, both point to same heap object
obj2.name = "Bob";
console.log(obj1.name);        // Bob (because both refer to same object)
reference variable gets original loction in the Heap
*/

// Datatypes

//Primitive Datatype
let int = 1;   //number
let float = 3.14;   //number
let string = "String";  //string
let boolean = true;  //boolean
let undefined;  //undefined
let sym = Symbol("id");  //symbol
let BigInt = 123456789012345678901234567890n; // or 2^53-1  //bigint
/*let Null = null;  //object  
The type tag for objects was 000.
The type tag for null was also set to 000 by mistake.
*/
console.log(typeof Null);

// Non-Primitive (Reference) Datatype
let object = { name: "Alice", age: 25 };  //object
let Array = [1, 2, 3, 4];   //object
// Date, RegExp, Map, Set, WeakMap, WeakSet
function greet() {
  console.log("Hello!");
}   //function
const functionName = (parameters) => {
  // function body
}   //function