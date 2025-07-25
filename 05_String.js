let str = "Hello, World!";
typeof str; // "string"

let name = "Kayamuddin";
console.log(`Hello my name ${name}`);
// Backticks ( ` ) define template literals, Variable interpolation: ${variable}

let strObj = new String("Hello"); // new String() creates a string object, not a primitive string
typeof strObj; // "object"

console.log(str.length);        // 13    start from 1
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"

// Search & Match
"hello".includes("ll");       // true
"hello".indexOf("l");         // 2
"hello".lastIndexOf("l");     // 3
"hello".startsWith("he");     // true
"hello".endsWith("lo");       // true
"hello".match(/l/g);          // ['l', 'l']
"hello".search("l");          // 2

// Substring Extraction
"JavaScript".slice(2,5);     // "vaS"
"JavaScript".slice(-1,5);     // no output no error
"JavaScript".substring(4); // "Script"
"JavaScript".substr(4, 3); // "Scr" (deprecated)

//  Replace
"Hi bob Bob Bob".replace("Bob", "Alice"); // "Hi bob Alice Bob"
"aa-aa".replaceAll("a", "b");     // "bb-bb"

// Split and Join
"red,green,blue".split(","); // ["red", "green", "blue"]
["a", "b", "c"].join("-");    // "a-b-c"

// Trim
"   hello   ".trim();     // "hello"
"   hello   ".trimStart(); // "hello   "
"   hello   ".trimEnd();   // "   hello"

// Pad       ^number of units
"5".padStart(3, "0"); // "005"
"5".padEnd(3, "0");   // "500"
// Repeat
"ha".repeat(3);       // "hahaha"

// Custom Methods with String.prototype
String.prototype.reverse = function() {  // we can create own methods
  return this.split("").reverse().join("");
};
console.log("hello".reverse()); // "olleh"

// Prototype Chain of String
let str1 = "text";
console.log(str1.__proto__ === String.prototype); // true
console.log(String.prototype.__proto__ === Object.prototype); // true
// String Instance → String.prototype → Object.prototype → null



/* Prototype
anchor: ƒ anchor()
at: ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
*/



/*
| Method                        | Description                                    | Example                                    |
| ----------------------------- | ---------------------------------------------- | ------------------------------------------ |
| `charAt(index)`               | Returns the character at the specified index   | `'Hello'.charAt(1)` → `"e"`                |
| `charCodeAt(index)`           | Returns the UTF-16 code of the character       | `'A'.charCodeAt(0)` → `65`                 |
| `codePointAt(pos)`            | Returns Unicode code point (for emoji/symbols) | `'💖'.codePointAt(0)`                      |
| `concat(...strings)`          | Concatenates two or more strings               | `'Hi'.concat(' ', 'there')`                |
| `includes(substring)`         | Checks if string contains substring            | `'Hello'.includes('lo')`                   |
| `endsWith(substring)`         | Checks if string ends with specified text      | `'hello.js'.endsWith('.js')`               |
| `startsWith(substring)`       | Checks if string starts with specified text    | `'hello.js'.startsWith('hel')`             |
| `indexOf(substring)`          | First index of substring, or `-1`              | `'hello'.indexOf('l')` → `2`               |
| `lastIndexOf(substring)`      | Last index of substring                        | `'hello'.lastIndexOf('l')` → `3`           |
| `match(regex)`                | Matches a string against regex                 | `'abc123'.match(/\d+/)`                    |
| `matchAll(regex)`             | Returns all regex matches as an iterator       | `Array.from('abc123abc'.matchAll(/abc/g))` |
| `padStart(length, padStr)`    | Pads from the start                            | `'5'.padStart(3, '0')` → `'005'`           |
| `padEnd(length, padStr)`      | Pads from the end                              | `'5'.padEnd(3, '0')` → `'500'`             |
| `repeat(count)`               | Repeats the string                             | `'ha'.repeat(3)` → `'hahaha'`              |
| `replace(search, replace)`    | Replaces part of the string                    | `'abc'.replace('b', 'x')`                  |
| `replaceAll(search, replace)` | Replaces all instances                         | `'a-a-a'.replaceAll('a', 'x')`             |
| `slice(start, end?)`          | Extracts part of string                        | `'hello'.slice(1, 3)` → `'el'`             |
| `split(separator, limit?)`    | Splits into array                              | `'a,b,c'.split(',')`                       |
| `substring(start, end?)`      | Returns substring between indices              | `'hello'.substring(1, 3)`                  |
| `toLowerCase()`               | Converts to lowercase                          | `'ABC'.toLowerCase()`                      |
| `toUpperCase()`               | Converts to uppercase                          | `'abc'.toUpperCase()`                      |
| `trim()`                      | Removes whitespace from both ends              | `'  hi  '.trim()`                          |
| `trimStart()` / `trimLeft()`  | Removes leading spaces                         | `'  hi'.trimStart()`                       |
| `trimEnd()` / `trimRight()`   | Removes trailing spaces                        | `'hi  '.trimEnd()`                         |
| `toString()`                  | Returns string itself                          | `'abc'.toString()`                         |
| `valueOf()`                   | Returns primitive value                        | `'abc'.valueOf()`                          |
| `localeCompare(str)`          | Compares strings (local-aware)                 | `'a'.localeCompare('b')`                   |
| `normalize(form)`             | Normalizes Unicode text                        | `'é'.normalize('NFD')`                     |

String.prototype.constructor → Returns the function that created the prototype (usually String)
String.prototype.length → undefined directly, but each instance has a length
String.prototype[@@iterator]() → Returns default string iterator (for for...of)
*/