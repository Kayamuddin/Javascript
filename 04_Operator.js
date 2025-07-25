/*// Arithmetic Operator
| Operator | Description         | Example        | Result      |
| -------- | ------------------- | -------------- | ----------- |
| `+`      | Addition            | `5 + 2`        | `7`         |
| `-`      | Subtraction         | `5 - 2`        | `3`         |
| `*`      | Multiplication      | `5 * 2`        | `10`        |
| `/`      | Division            | `5 / 2`        | `2.5`       |
| `%`      | Modulus (Remainder) | `5 % 2`        | `1`         |
| `**`     | Exponentiation      | `2 ** 3`       | `8`         |
| `++`     | Increment           | `a++` or `++a` | `a = a + 1` |
| `--`     | Decrement           | `a--` or `--a` | `a = a - 1` |



// Assignment Operators
| Operator | Description         | Example   | Equivalent To |
| -------- | ------------------- | --------- | ------------- |
| `=`      | Assignment          | `x = 10`  |               |
| `+=`     | Add and assign      | `x += 5`  | `x = x + 5`   |
| `-=`     | Subtract and assign | `x -= 5`  | `x = x - 5`   |
| `*=`     | Multiply and assign | `x *= 5`  | `x = x * 5`   |
| `/=`     | Divide and assign   | `x /= 5`  | `x = x / 5`   |
| `%=`     | Modulus and assign  | `x %= 5`  | `x = x % 5`   |
| `**=`    | Exponent and assign | `x **= 2` | `x = x ** 2`  |



// Comparison Operator
| Operator | Description              | Example     | Result  |
| -------- | ------------------------ | ----------- | ------- |
| `==`     | Equal to (loose)         | `5 == '5'`  | `true`  |
| `===`    | Equal to (strict)        | `5 === '5'` | `false` |
| `!=`     | Not equal to (loose)     | `5 != '5'`  | `false` |
| `!==`    | Not equal to (strict)    | `5 !== '5'` | `true`  |
| `>`      | Greater than             | `5 > 3`     | `true`  |
| `<`      | Less than                | `5 < 3`     | `false` |
| `>=`     | Greater than or equal to | `5 >= 5`    | `true`  |
| `<=`     | Less than or equal to    | `5 <= 3`    | `false` |



// Logical Operator
| Operator | Description | Example         | Result     |
| -------- | ----------- | --------------- | ---------- | 
| `&&`     | Logical AND | `true && false` | `false`    |
|  |       | Logical OR  | least one true  | Logical OR |
| `!`      | Logical NOT | `!true`         | `false`    | 


// Bitwise Operators
| Operator | Description           | Example         |
| -------- | --------------------- | --------------- |
| `&`      | AND                   | `5 & 1` → `1`   |
| \`       | \`                    | OR              |
| `^`      | XOR                   | `5 ^ 1` → `4`   |
| `~`      | NOT                   | `~5` → `-6`     |
| `<<`     | Left shift            | `5 << 1` → `10` |
| `>>`     | Right shift           | `5 >> 1` → `2`  |
| `>>>`    | Zero-fill right shift | `-5 >>> 1`      |



// String Operators
| Operator | Description       | Example           | Result            |
| -------- | ----------------- | ----------------- | ----------------- |
| `+`      | Concatenation     | `'Hi ' + 'there'` | `"Hi there"`      |
| `+=`     | Append and assign | `str += '!'`      | `str = str + '!'` |


// Type Operators
| Operator     | Description                                | Example                       |
| ------------ | ------------------------------------------ | ----------------------------- |
| `typeof`     | Returns the type of a variable             | `typeof 'hello'` → `'string'` |
| `instanceof` | Checks if object is an instance of a class | `obj instanceof Array`        |



// Ternary Operator
condition ? exprIfTrue : exprIfFalse
let result = (age >= 18) ? 'Adult' : 'Minor';

// Comma Operator
let a = (4, 2, 3 ,5); // a = 5  // Evaluates multiple expressions and returns the last one.

// Nullish Coalescing Operator (??)
let name = userInput ?? 'Default';  // Returns the right-hand side if the left-hand side is null or undefined.

// Delete Operator
delete obj.property; // Deletes a property from an object

// In Operator
'age' in person; // true or false    // Checks if a property exists in an object

// Optional Chaining Operator (?.)
object?.property
object?.[key]
object?.method?.()   /// syntax
let city = user?.address?.city; // Used to safely access deeply nested properties.
const user = {
  name: 'Ali',
  address: {
    city: 'Mumbai'
  }
};
console.log(user.address.city);       // Mumbai
console.log(user.contact?.phone);     // undefined (no error)
const obj = {
  sayHi: () => 'Hello!'
};
console.log(obj.sayHi?.());  // "Hello!"
console.log(obj.sayBye?.()); // undefined (no error)
const users = [{ name: 'John' }, null, { name: 'Mary' }];
users.forEach(user => {
  console.log(user?.name); // John, undefined, Mary
});

// Void Operator
void(0); // undefined    // Evaluates an expression and returns undefined
function sayHi() {
  return 'Hi!';
}
console.log(void sayHi()); // undefined
<button onclick="void someFunction();">Submit</button> //  Prevent Redirect on Button Click
console.log(void 0 === undefined); // true
*/