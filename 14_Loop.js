// 🔁 Loops
// For Loop: Used to repeat code a known number of times
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// While Loop: Repeats as long as a condition is true
let i = 0;
while (i < 3) {
  console.log("i is", i);
  i++;
}

// Do...While Loop: Executes at least once, then checks condition.
let j = 0;
do {
  console.log("j is", j);
  j++;
} while (j < 3);

// for...of loop: Best for iterating over iterables like arrays, strings, maps, sets.
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value);
}

// for...in loop: Best for iterating over object keys
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
}

// Array.forEach() method: Functional style of looping arrays
const arr1 = [1, 2, 3];
arr1.forEach((value, index) => {
  console.log(index, value);
});

/*
| Loop         | Use With          | Break/Continue | Can use `await`   |
| ------------ | ----------------- | -------------- | ----------------- |
| `for`        | arrays, numbers   | ✅              | ✅ (with async fn) |
| `while`      | custom conditions | ✅              | ✅                 |
| `do...while` | run at least once | ✅              | ✅                 |
| `for...of`   | arrays, strings   | ✅              | ✅                 |
| `for...in`   | objects           | ✅              | ✅                 |
| `forEach()`  | arrays            | ❌              | ❌                 |
*/

// 🔁 Loop Control Statements
// break: Exits the loop entirely.
for (let i = 0; i < 5; i++) {             // Output: 0
  if (i === 3) break;                                1
  console.log(i);                                    2
}

// continue: Skips the current loop iteration.
for (let i = 0; i < 5; i++) {            // Output: 0
  if (i === 2) continue;                            1
  console.log(i);                                   3 
}                                                   4


/*
| Feature                         | `for...of`                             | `for...in`                              | `forEach()`                           |
| ------------------------------- | -------------------------------------- | --------------------------------------- | ------------------------------------- |
| ✅ Iterates over                | **Values** of iterable objects         | **Keys** (property names) of objects    | **Values** of arrays                  |
| 🧠 Works on                     | Arrays, strings, sets, maps, NodeLists | Objects (and arrays, not recommended)   | Arrays (and NodeLists sometimes)      |
| 🔢 Returns                      | Value (`item`)                         | Key/index (`string`)                    | Value (`item`)                        |
| 📛 Modifies original            | ❌ No                                  | ❌ No                                  | ❌ No                                 |
| 🔁 Can use `break` / `continue` | ✅ Yes                                 | ✅ Yes                                 | ❌ No (`break`/`continue` don't work) |
| 🕒 Async/await                  | ✅ Works well                          | ✅ Not applicable                      | ❌ Doesn’t support `await`            |
| 🏷️ Index Access                 | ❌ Use `entries()` or manual counter   | ✅ Returns index (as string)           | ✅ `forEach((val, idx) => {})`        |
| 🔄 Stops early                  | ✅ With `break`                        | ✅ With `break`                        | ❌ Executes fully                     |

// When to Use What?
| Scenario                   | Recommended Loop                       |
| -------------------------- | -------------------------------------- |
| Loop through object keys   | `for...in`                             |
| Loop through array values  | `for...of` or `forEach`                |
| Need to `break`/`continue` | `for...of`                             |
| Need `index` and `value`   | `forEach` or `for...of` + `.entries()` |
| Asynchronous looping       | `for...of` + `await`                   |
| Loop through `Map`, `Set`  | `for...of`                             |
| Loop through `NodeList`    | `for...of` or `forEach`                |
*/

/*
The for...of loop in JavaScript is used to iterate over iterable objects such as:
Arrays, Strings, Maps, Sets, NodeLists, Generators, Arguments object (not plain objects)
*/
const numbers = [10, 20, 30];      // Example with Array
for (const num of numbers) {
  console.log(num); // 10, 20, 30
}
const name = "Kayam";             // Example with String
for (const char of name) {
  console.log(char); // K, a, y, a, m
}
const uniqueNumbers = new Set([1, 2, 2, 3]);  // Example with Set
for (const number of uniqueNumbers) {
  console.log(number); // 1, 2, 3
}
const map = new Map([                   // Example with Map
  ['name', 'Kayam'],
  ['age', 25]
]);
for (const [key, value] of map) {          // Output:
  console.log(`${key}: ${value}`);         // name: Kayam
}                                          // age: 25
// If you want to iterate over objects, use for...in or Object.entries() with for...of
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}
function* greetGenerator() {               // Using for...of with Generator
  yield 'Hello';
  yield 'World';
  yield '!';
}                                          // Output: Hello
for (const word of greetGenerator()) {     //         World
  console.log(word);                       //         !
}
/*    Using for...of on a NodeList
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<script>
  const items = document.querySelectorAll('li'); // NodeList
  for (const item of items) {                    // Output: Item 1
    console.log(item.textContent);               //         Item 2
  }                                              //         Item 3
</script>
*/



// for...in Loop in JavaScript: The for...in loop is used to iterate over the enumerable properties (keys) of an object.
const user = {                        // Looping over an object
  name: 'Kayam',
  age: 25,
  isAdmin: true
};
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
const arr2 = [10, 20, 30];            // for...in with Arrays (not ideal)
for (const index in arr2) {
  console.log(index, arr2[index]); // 0 10, 1 20, 2 30
}
// Skip inherited properties using hasOwnProperty()
const obj1 = Object.create({ inherited: true });
obj1.own = 'yes';
for (const key in obj1) {
  if (obj1.hasOwnProperty(key)) {
    console.log(key); // own
  }
}
/*
| Feature        | `for...in`            | `for...of`                  |
| -------------- | --------------------- | --------------------------- |
| Iterates over  | Keys (property names) | Values of iterable objects  |
| Works on       | Objects               | Arrays, strings, maps, sets |
| Use on arrays  | ❌ Not ideal         | ✅ Best choice              |
| Use on objects | ✅ Yes               | ❌ Throws error             |
*/


/* 🔁 forEach() in JavaScript: forEach() is an Array method used to execute a function once for each element in the array
array.forEach(function(element, index, array) {
  // code to execute for each element
});
element: current element
index (optional): current index
array (optional): the entire array
*/
const numbers1 = [1, 2, 3];                    // Output: 0 1 [ 1, 2, 3 ]
numbers1.forEach((num, index,arr) => {         //         1 2 [ 1, 2, 3 ]
  console.log(index,num,arr);                  //         2 3 [ 1, 2, 3 ]
});

// With Named Function
function printItem(item) {
  console.log(item);
}
const fruits = ["🍎", "🍌", "🍇"];
fruits.forEach(printItem);

// Array with Object
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )

/*
const nodeList = document.querySelectorAll('li');        // Convert NodeList to Array 
Array.from(nodeList).forEach((item) => {
  console.log(item.textContent);
});
*/
/*
| Feature            | `forEach()`                                 |
| ------------------ | ------------------------------------------- |
| `break`/`continue` | ❌ Not allowed                              |
| `return`           | ✅ Ends current iteration, but not the loop |
| Async/Await        | ❌ Doesn’t wait for promises                |
| Works on Arrays    | ✅ Yes                                      |
| Works on NodeList  | ✅ Sometimes (modern browsers only)         |
*/
/*
| Feature          | `forEach()`   | `map()`         | `for...of`    | `for`   |
| ---------------- | ------------- | --------------- | ------------- | ------- |
| Reads values     | ✅            | ✅             | ✅            | ✅     |
| Gets index       | ✅            | ✅             | ❌            | ✅     |
| Modifies array   | ✅ (manually) | ❌ returns new | ✅ (manually) | ✅     |
| Skips with break | ❌            | ❌             | ✅            | ✅     |
| Async/await safe | ❌            | ❌             | ✅            | ✅     |
*/