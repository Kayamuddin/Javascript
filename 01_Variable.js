console.log("Vari" 
    +   "able"); //Variable

// Variables


/* Declare
const NotChangeableAndNotEmpty = 0
all non-primitive values (like arrays, objects, functions, etc) can have their internal contents changed, 
even if they are declared using const
📦 Why?
Because objects and arrays are reference types — const only locks the reference (the memory address), not the internal contents.

let memory1;

var memory2;
name = "Kayamuddin"
console.log(name); //Kayamuddin
*/


/* 1.Scope
function Let() {
    if (true) {
        let BlockScoped=10
        console.log(BlockScoped) //10
    }
    console.log(BlockScoped) // unDeclare Error
}
Let()
function Var() {
    if (true) {
        var functionScoped=10
    }
    console.log(functionScoped) //10
}
console.log(functionScoped) // unDeclare Error
Var()
*/

/* 2.Hoisting
console.log(a); // Error Not Found
let a = "Let"
console.log(b); // Run undefined
var b = "Var"
*/

/* 3.Re-declaration
let a = "Let"
let a = "Re-Let" // SError Can't Re-delcare in same scope
let b = "Let"
if (true) {
    let b = "Re-Let"
}
var c = "Var"
var c = "Re-Var" // Allow Re-declare in everywhere
*/

/* 4.Global Object Property(Window)
let a = 1
console.log(window.a); //undefined
var b = 2
console.log(window.b); //1
*/