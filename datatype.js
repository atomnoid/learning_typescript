"use strict";
// basic types
// primitive types (number, string, boolean, null, undefined, symbol, bigint)
// array types
// tuple types
// enum types
// any type
// void type, null, undefined types, never type, object type, void type
Object.defineProperty(exports, "__esModule", { value: true });
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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var j = Color.Red; // enum
var k; // any type
function logMessage() {
    console.log("This function returns nothing");
}
var l = { name: "Alice", age: 30 }; // object 
let arr = [12, "hello",];
var numberM;
(function (numberM) {
    numberM[numberM["NUM"] = 1] = "NUM";
    numberM[numberM["NUM2"] = 2] = "NUM2";
})(numberM || (numberM = {}));
numberM.NUM;
// it is like a help book where you can find the data you have mentioned before in the code.
//# sourceMappingURL=datatype.js.map