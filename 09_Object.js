// Using Object Literal
// We can change object value even the object is const
// const newObj = {...oldObj};                          // Best way to create copy of Object with new memory space


/*
// Using new Object()
const car = new Object();    // singleton Object
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2022;

const mySym = Symbol("key1")
const person = {                // Non-singleton Object
  name: "Kayamuddin",                      // String
  "full name": "Kayamuddin Khan",          
  age: 25,                                 // Number
  isVerified: true,                        // Boolean
  spouse: null,                            // Null
  address: undefined,                      // Undefined
  bigNumber: 12345678901234567890n,        // BigInt
  id: Symbol("userId"),                    // Symbol
  [mySum]: "myValue1"                      // [Symbol(key1)]: 'myValue1'
  hobbies: ["coding", "music"],            // Array
  location: { city: "Delhi", pin: 110001 },// Object
  greet: function() {                      // Function
    console.log("Hello!");
  },
  dob: new Date("1999-01-01"),             // Date
  pattern: /^[a-z0-9]+$/,                  // RegExp
  map: new Map([["key", "value"]]),        // Map
  set: new Set([1, 2, 3])                  // Set
};
// Console all individually
console.log("name [string]:", person.name);                   
console.log(person['name']);                                  // "Kayamuddin"
console.log(person['full name']);                             // "Kayamuddin Khan"
// console.log(person.'full name'); //Error
console.log(person[mySym])
console.log("age [number]:", person.age);
console.log("isVerified [boolean]:", person.isVerified);
console.log("spouse [null]:", person.spouse);
console.log("address [undefined]:", person.address);
console.log("bigNumber [bigint]:", person.bigNumber);
console.log("id [symbol]:", person.id);
console.log("hobbies [array]:", person.hobbies);
console.log("location [object]:", person.location);
console.log("greet [function]:", person.greet());
console.log("dob [date]:", person.dob);
console.log("pattern [regexp]:", person.pattern);
console.log("map [map]:", person.map);
console.log("set [set]:", person.set);

// Using a Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person("Ali", 30);

// Using Class (ES6+)
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a noise.");
  }
}
const dog = new Animal("Dog");
dog.speak(); // Dog makes a noise.

// Accessing Object Properties
person.name         // Dot notation
person["age"]       // Bracket notation

// Updating / Adding / Deteting Properties
person.age = 26;          // Update
person.city = "Delhi";    // Add new property
delete person.city;       // Delete an property

// Looping Through Object
for (let key in person) {
  console.log(key,": ",person[key]);
}
*/
/* Object Method
| Method                       | Description                             |
| ---------------------------- | --------------------------------------- |
| `Object.keys(obj)`           | Returns an array of keys                |
| `Object.values(obj)`         | Returns an array of values              |
| `Object.entries(obj)`        | Returns an array of key-value pairs     |
| `Object.assign(target, src)` | Copies properties                       |
| `Object.freeze(obj)`         | Freezes the object (no changes allowed) |
| `Object.seal(obj)`           | Can't add/delete, only update           |
*/

const person1 = {
    name: "Kayamuddin",
    age: 19,
    greet: function() {                      
      console.log("Hello!");
    }
};
Object.keys(person1)        // [ 'name', 'age', 'greet' ]
Object.values(person1)      // [ 'Kayamuddin', 19, [Function: greet] ]
Object.entries(person1)     // [ [ 'name', 'Kayamuddin' ] ,[ 'age', 19 ] ,[ 'greet', [Function: greet] ] ]  // convert Object to Array
// Object.freeze(person1)      // Freezes the object (no changes allowed) like add, update, delete
// person1.name = "Shehzan Khan";  // No Error but value can't change
/*
Object.seal(person1);
person1.age = 26;          // ✅ Allowed: modifying existing property
person1.city = "Delhi";    // ❌ Not allowed: adding new property
delete person1.name;       // ❌ Not allowed: deleting property
*/
Object.assign(person1, { city: "mumbai", id: 18 });    // it add city and id in person1
const obj2 = {email: "k@gmail.com"}
Object.assign(person1, obj2);     // add data of obj2 to person1 obj
console.log(person1);             // at this line there is no greeting & greetingTwo function

const obj3 = {1: "obj3", 2: "obj3"}
const obj4 = {2: "obj4", 3: "obj4"}
const obj5 = {5: "obj5", 1: "obj5"}
const obj6 = { obj3, obj4, obj4 }
const obj7 = Object.assign({}, obj3, obj4, obj5)
console.log(obj7);     // { '1': 'obj5', '2': 'obj4', '3': 'obj4', '5': 'obj5' }

const obj8 = obj3;                                // it create copy of Object with old memory space
console.log(obj8==obj3);     // true
const obj9 = Object.assign({}, obj3);             //  it create copy of Object with new memory space
console.log(obj9==obj3);     // false
const obj10 = {...obj3};                          // Best way to create copy of Object with new memory space
console.log(obj10);
console.log(obj10==obj3);    // false



person1.greeting = function(){
    console.log("Hello JS person1");
}
person1.greetingTwo = function(){
    console.log(`Hello JS person1, ${this.name}`); //Hello JS person1, Kayamuddin
}
console.log(person1.greeting());   // Hello JS person1
console.log(person1.greeting);     // [Function (anonymous)]



// Destructing in Object
/*
// Basic Syntax:
const person = { name: "Kayam", age: 25 };
const { name, age } = person;
console.log(name); // "Kayam"
console.log(age);  // 25
*/
/*
Rename while destructuring:
const person = { name: "Kayam", age: 25 };
const { name: fullName, age: years } = person;
console.log(fullName); // "Kayam"
console.log(years);    // 25
*/
/*
Default values:
const person = { name: "Kayam" };
const { name, age = 30 } = person;
console.log(age); // 30
*/
/*
Nested object destructuring:
const user = {
  id: 101,
  profile: {
    username: "kayam",
    location: "India"
  }
};
const { profile: { username, location } } = user;
console.log(username); // "kayam"
console.log(location); // "India"
*/
/*
Rest operator with destructuring:
const person = { name: "Kayam", age: 25, country: "India" };
const { name, ...rest } = person;
console.log(name); // "Kayam"
console.log(rest); // { age: 25, country: "India" }
*/


/* "Nested" means one thing is inside another.
In programming, a nested object or array is one that is stored inside another object or array.
const regularUser = {
    email: "some@gmail.com",
    fullname: {    // nested
        userfullname: {    //nested
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
| Term          | Example          | Type                              |
| ------------- | ---------------- | --------------------------------- |
| Nested Array  | `[1, [2, 3]]`    | Array inside array                |
| Nested Object | `{a: {b: 2}}`    | Object inside object              |
| Mixed Nesting | `{a: [1, 2, 3]}` | Array inside object or vice versa |
*/