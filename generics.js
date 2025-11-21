// Generics
// Generics function
// Generic interfaces
// Generic classes
// generic function
function log(val) {
    console.log(val);
}
log("hello world");
function yoyo(a, b, c) {
}
yoyo("hello", "world", 5);
function fruitdetails(obj) {
}
fruitdetails({ name: "mango", price: 50, key: 1 });
// generic class
var bottlemaker = /** @class */ (function () {
    function bottlemaker(content) {
        this.content = content;
    }
    return bottlemaker;
}());
var b1 = new bottlemaker("water");
var b2 = new bottlemaker(100);
