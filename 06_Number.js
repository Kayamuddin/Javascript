const num1 = new Number(100)
console.log(num1);  // [Number: 100]
console.log(typeof num1);  // object

/*
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()

| Method                            | Description                                          |
| --------------------------------- | ---------------------------------------------------- |
| `Number.isFinite(value)`          | Checks if the value is a finite number.              |
| `Number.isInteger(value)`         | Checks if the value is an integer.                   |
| `Number.isNaN(value)`             | Checks if the value is `NaN`.                        |
| `Number.isSafeInteger(value)`     | Checks if the value is a safe integer.               |
| `Number.parseFloat(value)`        | Parses a string and returns a floating point number. |
| `Number.parseInt(value, [radix])` | Parses a string and returns an integer.              |

*/

/*
let num = 123.456;
console.log(num.toFixed(2));          // "123.46" 
console.log(num.toFixed(3));          // "123.456"    //set the floating point units

console.log(num.toPrecision(5));      // "123.46"   
console.log(num.toPrecision(7));      // "123.4560"   //set how many number display, number must bigger than before float unit, here is 3

console.log(num.toExponential(1));    // "1.2e+2"
console.log(num.toString());        // "123.456"  // typeof string
console.log(num.valueOf());           // 123.456

let num2 = 1000000;
console.log(num2.toLocaleString());   //10,00,000
console.log(num2.toLocaleString('en-US'));   //1,000,000
*/



/* ******************Math**********************
| Method          | Description                        | Example                 |
| --------------- | ---------------------------------- | ----------------------- |
| `Math.PI`	      | Ratio of circumference to diameter |  3.141592653589793      |
| `Math.random()` | Random float between 0 and 1	   | Math.random() → 0.12345 |
| `Math.round(x)` | Rounds to the nearest integer      | `Math.round(4.6)` → `5` |
| `Math.floor(x)` | Rounds **down** to nearest integer | `Math.floor(4.9)` → `4` |
| `Math.ceil(x)`  | Rounds **up** to nearest integer   | `Math.ceil(4.1)` → `5`  |
| `Math.trunc(x)` | Removes fractional digits          | `Math.trunc(4.9)` → `4` |
| `Math.abs(x)`   | Absolute value                     | `Math.abs(-7)` → `7`    |

| Method              | Description         | Example                      |
| ------------------- | ------------------- | ---------------------------- |
| `Math.pow(x, y)`    | x to the power of y | `Math.pow(2, 3)` → `8`       |
| `Math.sqrt(x)`      | Square root         | `Math.sqrt(9)` → `3`         |
| `Math.cbrt(x)`      | Cube root           | `Math.cbrt(27)` → `3`        |
| `Math.max(a, b, …)` | Max value           | `Math.max(10, 5, 20)` → `20` |
| `Math.min(a, b, …)` | Min value           | `Math.min(10, 5, 20)` → `5`  |

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
*/