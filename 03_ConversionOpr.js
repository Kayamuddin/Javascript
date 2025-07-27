// Implicit conversion
let result1 = '5' + 3;     // '53' → Number 3 is converted to string
let result2 = '5' - '3';    // 2   → String '5 and 3' is converted to number
let result3 = true + 1;   // 2   → true is converted to 1
let result4 = false + '1';   // false1   → false is converted to string
let result5 = false - 'a';   // -1   → false is converted to string
let result6 = null + 1;   // 1   → null is converted to 0
let result7 = undefined + 1; // NaN → undefined can't be converted to number
console.log(result1);

// Explicit Conversion 
Number()
parseInt()
parseFloat()
String()
(val).toString()
Boolean()



Number("123");    // 123
parseInt("123.45");  // 123
parseFloat("123.45"); // 123.45
+"123";           // 123 (Unary + operator)
String(123);      // "123"
let str = (123).toString(); // "123"
console.log(typeof str);
Boolean(0);       // false
Boolean("hello"); // true
let r=!!"hello";        // true (Double NOT trick)
console.log(r);
