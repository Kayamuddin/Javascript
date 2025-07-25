// Array
// An Array is a special object used to store multiple values in a single variable.
// it is non-primitive it share original memory location


// checking array
Array.isArray([1, 2, 3]); // true
Array.isArray("hello");   // false

/* Creating Arrays
let fruits = ['apple', 'banana', 'mango'];
let numbers = new Array(1, 2, 3, 4);
let empty = []; // Empty array

// Accessing Elements
fruits[0];        // "apple"
fruits[1];        // "banana"
fruits.length;    // 3
*/ 
// Modifying Elements
let fruits = ['apple', 'banana', 'mango'];
f=fruits;
f[1] = 'orange';   // Changes "banana" to "orange"           // ['apple', 'orange', 'mango']

f.push('grape');   // Adds to end                            // ['apple', 'orange', 'mango', 'grape']

f.pop();           // Removes last element                   // ['apple', 'orange', 'mango']

f.unshift('kiwi'); // Adds to start                          // ['kiwi', 'apple', 'orange', 'mango']

f.shift();         // Removes first element                  // ['apple', 'orange', 'mango']

f.splice(1, 1, "x"); // removes "orange", adds "x"           // ['apple', 'x', 'mango']
    // ([],remove 1Elm, add x  )

let fruit = ["apple", "banana", "cherry"];
let result = fruit.slice(0, 2); // ["apple", "banana"] // shallow copy it doesn't change original array

[1, 2, 3, 2].indexOf(2);       // 1
[1, 2, 3, 2].lastIndexOf(2);   // 3

[1, 2, 3].includes(2); // true

[1, 5, 10].find(n => n > 6); // 10

[1, 5, 10].findIndex(n => n > 6); // 2

[1, 2, 3].forEach(n => console.log(n));

[1, 2, 3].map(n => n * 2); // [2, 4, 6]

[1, 2, 3, 4].filter(n => n % 2 === 0); // [2, 4]

[1, 2, 3].reduce((sum, n) => sum + n, 0); // 6

[1, 2, 3].some(n => n > 2); // true

[1, 2, 3].every(n => n > 0); // true

[3, 1, 2].sort();       // [1, 2, 3]
["b", "a"].sort();      // ["a", "b"]

[1, 2, 3].reverse();    // [3, 2, 1]

[1, 2].concat([3, 4]); // [1, 2, 3, 4]

["a", "b", "c"].join("-"); // "a-b-c"       // convert array to String

[1, 2, 3].toString(); // "1,2,3"           // convert array to String

new Array(3).fill(0); // [0, 0, 0]

[1, [2, [3]]].flat(0);       // [1, [2, [3]]]         same
[1, [2, [3]]].flat();//1      // [1, 2, [3]]          all 1 sub child
[1, [2, [3]]].flat(2);      // [1, 2, 3]              all 1 and 2 sub chid
[1, [2, [3]]].flat(Infinity);      // [1, 2, 3]       all sub child

[1, 2, 3].flatMap(n => [n, n * 2]); // [1, 2, 2, 4, 3, 6]     // 1,2 // 2,4 // 3,6

[10, 20, 30].at(-1); // 30
[10, 20, 30].at(2); // 30

let a = [1,2,[3,4,[5]]];
let b = [6,7,[8]]             
const spreadOpr = [...a, ...b]       // it will help in single Dim.. Array
console.log(spreadOpr);   // [ 1, 2, [ 3, 4, [ 5 ] ], 6, 7, [ 8 ] ]

console.log(Array.isArray("Hitesh"))   // false

console.log(Array.from("Hitesh"))      // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // empty array // []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));   // [100,200,300]






/*
| Method        | Description                                   |
| ------------- | --------------------------------------------- |
| `push()`      | Add to end                                    |
| `pop()`       | Remove from end                               |
| `shift()`     | Remove from start                             |
| `unshift()`   | Add to start                                  |
| `splice()`    | Add/remove items at any index                 |
| `slice()`     | Returns a portion of the array                |
| `concat()`    | Merge arrays                                  |
| `indexOf()`   | First index of a value                        |
| `includes()`  | Check if value exists                         |
| `reverse()`   | Reverse the array                             |
| `sort()`      | Sort the array (lexicographically by default) |
| `join()`      | Convert to string                             |
| `map()`       | Create new array by applying a function       |
| `filter()`    | Filter items based on a condition             |
| `forEach()`   | Loop through items                            |
| `reduce()`    | Reduce to single value                        |
| `find()`      | Find first matching element                   |
| `findIndex()` | Index of first matching element               |
*/
/*
//  Looping Through Arrays
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(fruit => console.log(fruit));

for (let fruit of fruits) {
  console.log(fruit);
}

// Multidimensional Arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];
console.log(matrix[1][2]); // 6
console.log(matrix);       // [[1, 2, 3],[4, 5, 6]]
console.log(matrix.flat());  // [1,2,3,4,5,6]   // convert multi to single dimensional array




let arr = [1, 2, 3, 4, 5];

arr.map(x => x * 2);        // [2, 4, 6, 8, 10]
arr.filter(x => x % 2 === 0); // [2, 4]
arr.reduce((a, b) => a + b);  // 15
arr.includes(3);              // true
arr.slice(1, 3);              // [2, 3]
*/






/* shallow copy: it create new memory space using old array clone
| Type               | Description                                                                     |
| ------------------ | ------------------------------------------------------------------------------- |
| ✅ **Shallow Copy** | Only top-level elements are copied; nested objects/arrays are still referenced. |
| ✅ **Deep Copy**    | Everything is fully copied, including nested structures (new memory).           |


////////////// Shallow Copy Methods for Arrays
const arr = [1, 2, 3];
const copy = arr.slice();  //// slice() (no arguments)
const arr = [1, 2, 3];
const copy = [...arr];     //// spread (...)
const arr = [1, 2, 3];
const copy = Array.from(arr);   //// Array.from()
const arr = [1, 2, 3];
const copy = [].concat(arr);     //// concat()

////////////// Deep Copy Methods for Arrays
const arr = [[1], [2]];
const deepCopy = structuredClone(arr);     //// structuredClone() ✅ modern and safe
const arr = [[1], [2]];
const deepCopy = JSON.parse(JSON.stringify(arr));     //// JSON.parse(JSON.stringify(...)) ⚠️ not always safe // Limitations: Doesn't support undefined, function, Symbol, circular refs.

| Method                        | Copy Type | Nested Object Copy? | Notes                            |
| ----------------------------- | --------- | ------------------- | -------------------------------- |
| `slice()`, `spread`, `concat` | Shallow   | ❌ No                | Fast, easy                       |
| `structuredClone()`           | Deep      | ✅ Yes               | Best native deep clone           |
| `JSON.stringify/parse`        | Deep      | ✅ Yes (but limited) | Avoid if data has functions etc. |

| Action                       | Original Changed?        |
| ---------------------------- | ------------------------ |
| Change primitive in copy     | ❌ No                     |
| Add/remove from copy         | ❌ No                     |
| Change nested object in copy | ✅ Yes (affects original) |

In shallow copy, original array structure doesn't change —
but nested objects/arrays are still shared, so changes to them will reflect in the original.

// Primitive Values     
const original = [1, 2, 3];
const copy = original.slice(); // shallow copy
copy[0] = 99;
console.log(original);     // [1, 2, 3] => ✅ NOT changed
👉 Because 1, 2, 3 are primitives (copied by value) — safe!

// Nested Arrays or Objects
const original = [[1], [2], [3]];
const copy = original.slice(); // shallow copy
copy[0][0] = 99;
console.log(original);     // [[99], [2], [3]] => ❗ CHANGED   
👉 Because copy[0] and original[0] point to the same inner array, modifying one affects the other.

🔁 In a shallow copy, the original array itself does not change 
but if it contains nested objects or arrays, changes to those can affect the original.
🔁 What is Deep Copy?
A deep copy means the entire structure — including all nested arrays/objects — is completely duplicated in new memory.
So:
Primitives ✅ copied
Nested arrays/objects ✅ also copied (not shared)

*/
