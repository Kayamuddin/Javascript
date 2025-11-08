/*
Map Methods
Why use Map instead of Object?
| Feature       | `Map`                                   | `Object`                        |
| ------------- | --------------------------------------- | ------------------------------- |
| Key types     | Any type (object, function…)            | Strings & Symbols only          |
| Order of keys | Ordered                                 | Unordered                       |
| Iterable      | Yes                                     | No (need `Object.keys()`, etc.) |
| Size property | `map.size`                              | `Object.keys(obj).length`       |
| Performance   | Better for frequent additions/deletions | Okay for static structures      |

| Method            | Description             | Example                       |
| ----------------- | ----------------------- | ----------------------------- |
| `set(key, value)` | Add or update an entry  | `map.set('name', 'Kayam')`    |
| `get(key)`        | Get the value by key    | `map.get('name')` → `'Kayam'` |
| `has(key)`        | Check if a key exists   | `map.has('name')` → `true`    |
| `delete(key)`     | Remove a key-value pair | `map.delete('name')`          |
| `clear()`         | Remove all entries      | `map.clear()`                 |
| `size`            | Get number of entries   | `map.size`                    |
*/

const userMap = new Map();
userMap.set('name', 'Kayam');
userMap.set('age', 25);
userMap.set('isVerified', true);
console.log(userMap.get('name'));     // "Kayam"
console.log(userMap.has('age'));      // true
console.log(userMap.size);            // 3
userMap.delete('isVerified');
console.log(userMap.has('isVerified')); // false

// Iterating over a Map
for (const [key, value] of userMap) {
  console.log(`${key}: ${value}`);
}
// OR
userMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

// Using Objects as Keys
const objKey = { id: 1 };
const map = new Map();
map.set(objKey, 'Object as key');
console.log(map.get(objKey)); // "Object as key"






// Set
/*
| Feature         | Description                                |
| --------------- | ------------------------------------------ |
| Unique values   | Cannot have duplicate items                |
| Any value type  | Can store numbers, strings, objects, etc.  |
| Maintains order | Elements appear in insertion order         |
| Iterable        | You can loop over it with `for...of`, etc. |

| Method          | Description              | Example               |
| --------------- | ------------------------ | --------------------- |
| `add(value)`    | Adds a value             | `set.add(1)`          |
| `has(value)`    | Checks if value exists   | `set.has(1)` → `true` |
| `delete(value)` | Removes a value          | `set.delete(1)`       |
| `clear()`       | Removes all values       | `set.clear()`         |
| `size`          | Returns number of values | `set.size`            |
*/

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(2); // duplicate, ignored
numbers.add(3);
console.log(numbers);         // Set(3) {1, 2, 3}
console.log(numbers.has(2));  // true
console.log(numbers.size);    // 3

// Iterating a Set
const set = new Set(["a", "b", "c"]);
for (const value of set) {
  console.log(value);
}
// OR
set.forEach(value => {
  console.log(value);
});

// Convert Set to Array
const set1 = new Set([1, 2, 3]);
const arr = Array.from(set1);     // [1, 2, 3]

// Remove Duplicates from Array Using Set
const nums = [1, 2, 2, 3, 4, 4];
const unique = [...new Set(nums)];
console.log(unique);  // [1, 2, 3, 4]

/* ✅ Set vs Array
| Feature      | `Set`          | `Array`                     | 
| ------------ | -------------- | --------------------------- |
| Unique items | ✅ Yes         | ❌ No (need manual filter) |
| Index-based  | ❌ No          | ✅ Yes                     |
| Performance  | Faster lookups  | Slower for includes        |
*/