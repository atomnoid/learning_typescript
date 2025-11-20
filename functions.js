// Functions
// Function types
// Optional and default parameters
// Rest parameters
// Function overloads
// Function
function abcd() {
    return "hello world";
}
// and if function is not returning anything than we can use void type
function apple() {
}
// Call back function [()=>void]
function user(name, cb) {
}
user("aayush", function (value) {
    console.log(value);
});
// Callback function with no parameters (when it is not returning anything)
function aayush(name, age, cb) {
}
aayush("aayush", 20, function () {
    console.log("callback function called");
});
// Functions with arguments
function potato(name, price, cb) {
    cb("potatoes are fresh");
}
potato("aloo", 56, function (arg) {
    console.log(arg);
});
