// classes and objects 
// class definition
// constructors
// access modifiers (public, private, protected)
// readonly properties
// optional properties
// parameter properties
// getters and setters
// static members, properties and methods
// Abstract classes and methods
var device = /** @class */ (function () {
    function device() {
        this.name = "samsung";
        this.price = 25000;
        this.category = "mobile";
    }
    return device;
}());
var d1 = new device();
var d2 = new device();
// constructors is a special method that is called when an object is instantiated from a class
var bottlemaker = /** @class */ (function () {
    function bottlemaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return bottlemaker;
}());
var b1 = new bottlemaker("milton", 500);
var humanmaker = /** @class */ (function () {
    function humanmaker(name, ishandsome) {
        this.name = name;
        this.ishandsome = ishandsome;
        this.age = 100;
    }
    return humanmaker;
}());
var h1 = new humanmaker("john", true);
var h2 = new humanmaker("doe", false);
