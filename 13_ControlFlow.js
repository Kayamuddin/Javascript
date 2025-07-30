// Control flow in JavaScript refers to the order in which code is executed. 
// JavaScript typically runs code top to bottom, but control flow statements let us make decisions, repeat tasks, and jump between parts of code.

// Conditional Statements
let condition = false;

// Ternary Operator (shorthand for if...else)
let age = 18;
let access = (age >= 18) ? "Allowed" : "Denied";
console.log(access);

if ( 1==1 ) console.log("if shorthand notation Excuted");         // shorthand

if ( 1==1) {                                                       // if(condition){ // for multi-line code }
    console.log("if Excuted");
}

if (0) console.log("Truthy");                                     // shorthand
else console.log("Falsy"); // Output: Falsy
if ( 1==2 ) {                                                       // if(condition){ // for multi-line code }
    console.log("if-else if Excuted");
} else {
    console.log("if-else else Excuted");
}

if ( 1==3 ) {                                                       // else if(condition) // for multi-condition code
    console.log("else-if block 1 Excuted");
} else if ( 1==2 ) {
    console.log("else-if block 2 Excuted");
} else if ( 1==0 ) {
    console.log("else-if block 3 Excuted");
} else {
    console.log("else-if block 4 Excuted");
}

// switch case
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("You chose Apple");
    break;
  case "banana":
    console.log("You chose Banana");
    break;
  default:                                 // excute if all case condition not match
    console.log("Unknown fruit");
}

// 🔁 Try...Catch (Error Control Flow): Used for handling exceptions and errors.
try {
  console.log("try Block");
  let result = someUndefinedVar + 1;               // it try this code if there is error it excute catch block
  console.log("try Block 2");
} catch (error) {                                   // Output:
  console.log("Error caught:", error.message);      // try Block
}                                                   // Error caught: someUndefinedVar is not defined





let a = 5;
let b = "5";
if (a == b) console.log("Equal (==)");      // true
if (a === b) console.log("Equal (===)");    // false
if (a !== b) console.log("Not equal (===)");// true
if (a > 3 && b < 10) console.log("Both true");  // Both true

/*
| Operator | Type                | Description                                      | Example     | Result  |
| -------- | ------------------- | ------------------------------------------------ | ----------- | ------- |
| `==`     | Equality (loose)    | Checks if values are equal (ignores type)        | `5 == '5'`  | `true`  |
| `===`    | Equality (strict)   | Checks if values and types are equal             | `5 === '5'` | `false` |
| `!=`     | Inequality (loose)  | Checks if values are not equal (ignores type)    | `5 != '5'`  | `false` |
| `!==`    | Inequality (strict) | Checks if values or types are not equal          | `5 !== '5'` | `true`  |
| `>`      | Greater than        | Checks if left is greater than right             | `10 > 5`    | `true`  |
| `<`      | Less than           | Checks if left is less than right                | `3 < 5`     | `true`  |
| `>=`     | Greater or equal    | Checks if left is greater than or equal to right | `5 >= 5`    | `true`  |
| `<=`     | Less or equal       | Checks if left is less than or equal to right    | `4 <= 5`    | `true`  |

| Operator | Type | Description                          | Example        | Result  |
| -------- | ---- | ------------------------------------ | -------------- | ------- |
| `&&`     | AND  | True if **both** sides are true      | `true && true` | `true`  |
| '||'     | OR   | True if **at least one** side is true| `false || true`| `true`  |
| `!`      | NOT  | Inverts the truthiness               | `!true`        | `false` |

| Operator     | Type               | Description                                         | Example                | Result      |
| ------------ | ------------------ | --------------------------------------------------- | ---------------------- | ----------- |
| `??`         | Nullish Coalescing | Returns right only if left is `null` or `undefined` | `null ?? "default"`    | `"default"` |
| `?.`         | Optional Chaining  | Safely access property if it exists                 | `user?.name`           | `undefined` |
| `typeof`     | Type checking      | Returns data type as string                         | `typeof 5`             | `"number"`  |
| `instanceof` | Instance checking  | Checks if object is instance of class               | `arr instanceof Array` | `true`      |
*/


/*
// Falsy Values
| Value       | Type      | Explanation                 |
| ----------- | --------- | --------------------------- |
| `false`     | Boolean   | Obviously falsy             |
| `0`         | Number    | Zero is falsy               |
| `-0`        | Number    | Negative zero is also falsy |
| `0n`        | BigInt    | Zero in BigInt is falsy     |
| `""`        | String    | Empty string is falsy       |
| `null`      | Object    | Represents "no value"       |
| `undefined` | Undefined | Default uninitialized value |
| `NaN`       | Number    | Not-a-Number is falsy       |

// Truthy Values
| Value                   | Type     | Why Truthy?                        |
| ----------------------- | -------- | ---------------------------------- |
| `true`                  | Boolean  | Clearly truthy                     |
| `{}`                    | Object   | Any object (even empty) is truthy  |
| `[]`                    | Array    | Even empty array is truthy         |
| `" "`                   | String   | Non-empty string is truthy         |
| `"false"`               | String   | It's a string, not boolean `false` |
| `42`, `-42`             | Number   | Any non-zero number is truthy      |
| `Infinity`, `-Infinity` | Number   | Considered truthy                  |
| `function() {}`         | Function | Functions are objects → truthy     |


check(false);        // Falsy
check(0);            // Falsy
check("hello");      // Truthy
check("");           // Falsy
check([]);           // Truthy
check({});           // Truthy
check(null);         // Falsy
check(undefined);    // Falsy
check(NaN);          // Falsy
check("0");          // Truthy (non-empty string)
check("false");      // Truthy


// Summary: Topics You Must Master
| Topic                      | Description                                |
| -------------------------- | ------------------------------------------ |
| Comparison Operators       | `==`, `===`, `!=`, `<`, `>` etc.           |
| Logical Operators          | `&&`, `|'                                  |
| Falsy & Truthy Values      | All 7 falsy and truthy concepts            |
| Type Coercion Rules        | Especially in loose comparisons            |
| Ternary & Short-Circuiting | Clean logic handling                       |
| Optional Chaining (`?.`)   | Safe property access                       |
| Nullish Coalescing (`??`)  | Default values only for `null/undefined`   |
| Conditional Structures     | `if`, `switch`, loops, `break`, `continue` |
| Real-World Applications    | Auth, config, UI display, validation       |

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values
// "0", 'false', " ", [], {}, function(){}

// Terniary Operator
// condition ? true : false

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// Short-Circuiting with && and ||
// JavaScript uses short-circuit evaluation, meaning it stops as soon as the result is known
&& (AND)
condition && doSomething();   // syntax
If the first value is falsy, JS skips the second.
If the first is truthy, JS returns the second.
let isLoggedIn = true;
isLoggedIn && console.log("Welcome!"); // Logs "Welcome!"

|| (OR)
value || defaultValue          // syntax
If the first value is truthy, it's returned.
Otherwise, returns the second.
let username = "";
let name = username || "Guest";
console.log(name); // "Guest"
0 || 100     // 100
0 ?? 100     // 0 ✅ (because 0 is not null/undefined)   // if first is null/undefined then second

| Expression          | Result  | Why?                               |
| ------------------- | ------- | ---------------------------------- |
| `5 == "5"`          | `true`  | String is coerced to number        |
| `0 == false`        | `true`  | `false → 0`                        |
| `"" == false`       | `true`  | `"" → 0`, `false → 0`              |
| `null == undefined` | `true`  | Special case                       |
| `[] == ""`          | `true`  | `[].toString() → ""`               |
| `[] == 0`           | `true`  | `[].toString() → "" → 0`           |
| `[1] == 1`          | `true`  | `[1].toString() → "1" → 1`         |
| `false == "0"`      | `true`  | `"0" → 0`, `false → 0`             |
| `null == 0`         | `false` | `null` only equals `undefined`     |
| `"5" - 2`           | `3`     | `"5"` → `5`                        |
| `"5" + 2`           | `"52"`  | `2` → `"2"` (string concatenation) |
| `true + 1`          | `2`     | `true → 1`                         |
| `null + 1`          | `1`     | `null → 0`                         |
| `undefined + 1`     | `NaN`   | `undefined → NaN`                  |
| `[] + 1`            | `"1"`   | `[] → "" → "1"` (string concat)    |
*/