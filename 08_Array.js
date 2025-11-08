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

/* Array Methods That Modify the Original Array
| Method         | Description                                                | Return Value             |
| -------------- | ---------------------------------------------------------- | ------------------------ |
| `push()`       | Adds one or more elements to the end                       | New length               |
| `pop()`        | Removes the last element                                   | Removed element          |
| `shift()`      | Removes the first element                                  | Removed element          |
| `unshift()`    | Adds one or more elements to the beginning                 | New length               |
| `splice()`     | Adds/removes/replaces elements                             | Removed elements (array) |
| `reverse()`    | Reverses array in-place                                    | Modified array           |
| `sort()`       | Sorts array in-place                                       | Modified array           |
| `fill()`       | Fills all or part of the array with a value                | Modified array           |
| `copyWithin()` | Copies part of array to another location in the same array | Modified array           |
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

[1, 2, 3].reverse();    // [3, 2, 1]

[3, 1, 2].sort();       // [1, 2, 3]
["b", "a"].sort();      // ["a", "b"]

// arr.fill(value, start, end)
let arr5 = [1, 2, 3, 4, 5];
arr5.fill(0);             // → [0, 0, 0, 0, 0]      // Fill all elements with 0
arr5.fill(7, 2);          // → [0, 0, 7, 7, 7]      // Fill from index 2 with 7
arr5.fill(9, 1, 3);       // → [0, 9, 9, 7, 7]      // Fill from index 1 to 3 (exclusive)
let filled = new Array(3).fill({ x: 1 });
filled[0].x = 100;
console.log(filled);      // [{ x: 100 }, { x: 100 }, { x: 100 }]
let safeFill = new Array(3).fill().map(() => ({ x: 1 }));
safeFill[0].x = 100;
console.log(safeFill);    // [ { x: 100 }, { x: 1 }, { x: 1 } ]

let arr = [10, 20, 30, 40, 50];
// arr.copyWithin(target, start, end)
arr.copyWithin(1, 3);    // [10, 40, 50, 40, 50]
// Start copying from index 3 (40)
// Copy to index 1
// Copy [40, 50] over starting at index 1
[1, 2, 3, 4, 5].copyWithin(0, 3);        // → [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 1, 3);     // → [2, 3, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(-2, 0, 2);    // → [1, 2, 3, 1, 2]




/* 🔁 Return a New Array (Do NOT Modify Original)
| Method                                  | Description                                                                       |
| --------------------------------------- | --------------------------------------------------------------------------------- |
| `Array.prototype.map()`                 | Creates a new array with the results of calling a function on every element.      |
| `Array.prototype.filter()`              | Creates a new array with elements that pass the test.                             |
| `Array.prototype.slice()`               | Returns a shallow copy of a portion of an array.                                  |
| `Array.prototype.concat()`              | Merges two or more arrays without modifying them.                                 |
| `Array.prototype.flat()`                | Flattens nested arrays into a new array.                                          |
| `Array.prototype.flatMap()`             | Like `map()`, but also flattens the result by one level.                          |
| `Array.prototype.toSorted()` ✅ ES2023   | Returns a sorted **copy** of the array (non-destructive).                         |
| `Array.prototype.toReversed()` ✅ ES2023 | Returns a reversed **copy** of the array.                                         |
| `Array.prototype.toSpliced()` ✅ ES2023  | Returns a copy with elements added/removed (non-destructive version of `splice`). |
| `Array.from()`                          | Creates a new array from an array-like or iterable object.                        |
| `Array.of()`                            | Creates a new array from the arguments.                                           |
| `Array.with(index,newVal)`              | Creates a new array with replace element.                                         |
| `Array.prototype.entries()`             | Returns a new Array Iterator object with `[index, value]` pairs.                  |
| `Array.prototype.keys()`                | Returns a new Array Iterator of keys.                                             |
| `Array.prototype.values()`              | Returns a new Array Iterator of values.                                           |
| `Array.prototype.reduce()`              | Can return any type, often used to build a new array or value.                    |
| `Array.prototype.reduceRight()`         | Same as `reduce` but right to left.                                               |
| `Array.prototype.join()`                | Returns a string (not an array, but worth noting).                                |
*/
let OldArr = [1,2,3,4,'a','b'];

const str = "hello";                           // spread Operator
const chars = [...str];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']
let arrz = [...OldArr];          // shallow copy it doesn't change original array

let new1 = OldArr.map(n => n * 2);      // [ 2, 4, 6, 8, NaN, NaN ]

let new2 = OldArr.filter(n => n % 2 === 0);  // [2, 4]
                            // condition

// .slice(start, end) of index
let new3 = OldArr.slice();  // shallow copy it doesn't change original array    // [ 1, 2, 3, 4, 'a', 'b' ]
// OldArr.slice(4)     // [ 'a', 'b' ]
// OldArr.slice(0,4)   // [ 1, 2, 3, 4 ]

let new4 = OldArr.concat(["c","d"],["e","f"]);       // [ 1, 2, 3, 4, 'a', 'b', 'c', 'd', 'e', 'f' ]
// let newArr = [...OldArr, ...['c','d','e','f']];   // [ 1, 2, 3, 4, 'a', 'b', 'c', 'd', 'e', 'f' ]

// .flat(depth)
let new5 = [1, [2, [3]]].flat(0);       // [1, [2, [3]]]    // shallow copy it doesn't change original array
// [1, [2, [3]]].flat();//1      // [1, 2, [3]]          spread all 1 sub(depth) child
// [1, [2, [3]]].flat(2);      // [1, 2, 3]              spread all 1 and 2 sub chid
// [1, [2, [3]]].flat(Infinity);      // [1, 2, 3]       spread all sub child

// arr.map(...).flat()
let new6 = [1, 2, 3].flatMap(n => [n, n * 2]);   // with map → [[1, 2], [2, 4], [3, 6]] with both → [1, 2, 2, 4, 3, 6]

let new7 = [3, 1, 2].toSorted();  // [1, 2, 3]

let new8 = [1, 2, 3].toReversed();  // [3, 2, 1]

// toSpliced(start, deleteCount, ...items)
let new9 = [1, 2, 3, 4].toSpliced(1, 2, 'a', 'b');   // [1, 'a', 'b', 4]

let new10 = Array.from("Hitesh")      // [ 'H', 'i', 't', 'e', 's', 'h' ]
// Array.from({name: "hitesh"})) // empty array // []

let score1 = 100, score2 = 200, score3 = 300;
let new11 = Array.of(score1, score2, score3)   // [100,200,300]

// with(index, newValue)
let new12 = [10, 20, 30].with(1, 22).with(0,11);   // [11, 22, 30]

const fruits1 = ["apple", "banana", "cherry"];
const iterator = fruits1.entries();
console.log(iterator); // Object [Array Iterator] {}
console.log(iterator.next().value); // [0, "apple"]
console.log(iterator.next().value); // [1, "banana"]

let new13 = [...['a', 'b', 'c'].keys()];   // [ 0, 1, 2 ]
// let new13 = Array.from(['dog', 'cat', 'cow'].keys());    // [ 0, 1, 2 ]
// let new13 = ['a', 'b', 'c'].keys();
// for (let key of new13) {
//   console.log(key);
// }
// // Output:
// // 0
// // 1
// // 2

let new16 = [1, 2, 3].reduce((sum, currVal) => sum + currVal, 0); // 6    // it initialize sum value is 0
                            // var                          , var=0       // sum is accumulator



console.log(new13);

[1, 2, 3, 2].indexOf(2);       // 1
[1, 2, 3, 2].lastIndexOf(2);   // 3

[1, 2, 3].includes(2); // true

[1, 5, 10].find(n => n > 6); // 10

[1, 5, 10].findIndex(n => n > 6); // 2

[1, 2, 3].forEach(n => console.log(n));

[1, 2, 3].some(n => n > 2); // true

[1, 2, 3].every(n => n > 0); // true

["a", "b", "c"].join("-"); // "a-b-c"       // convert array to String

[1, 2, 3].toString(); // "1,2,3"           // convert array to String

[10, 20, 30].at(-1); // 30
[10, 20, 30].at(2); // 30

let a = [1,2,[3,4,[5]]];
let b = [6,7,[8]]             
const spreadOpr = [...a, ...b]       // it will help in single Dim.. Array
console.log(spreadOpr);   // [ 1, 2, [ 3, 4, [ 5 ] ], 6, 7, [ 8 ] ]

console.log(Array.isArray("Hitesh"))   // false






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


// Practice of Database
const books = [                                                                 // this is my database 
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
const userBooks = books.filter( (bk) => { 
  return bk.publish >= 1995 && bk.genre === 'History';
})
console.log(userBooks);
/* Output:
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/