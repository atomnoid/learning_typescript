// basic types
// primitive types (number, string, boolean, null, undefined, symbol, bigint)
// array types
// tuple types
// enum types
// any type
// void type, null, undefined types, never type, object type, void type

// primitive types and reference types

var a = 10; // number
var b = "hello"; // string
var c = true; // boolean
var d = null; // null
var e = undefined;      
var z = Symbol("sym"); // symbol
var g = 9007199254740991n; // bigint
var h = [1, 2, 3]; // array
var i = [1, "two", true]; // tuple
enum Color {
    Red,
    Green,
    Blue
}
var j = Color.Red; // enum
var k; // any type
function logMessage(): void {
    console.log("This function returns nothing");
}
var l = { name: "Alice", age: 30 }; // object 
let arr: [number, string] = [12, "hello",];


enum numberM {
    NUM = 1,
    NUM2 = 2,
}
numberM.NUM;
// it is like a help book where you can find the data you have mentioned before in the code.
