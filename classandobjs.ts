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


class device {
    name = "samsung";
    price = 25000;
    category = "mobile";
}

let d1 = new device();
let d2 = new device();


// constructors is a special method that is called when an object is instantiated from a class

class bottlemaker {
    constructor(public name: string, public price: number){
    }

}
let b1 = new bottlemaker("milton", 500);


class humanmaker{
    age = 100;
    constructor(public name: string, public ishandsome: boolean){
    }
}

let h1 = new humanmaker("john", true); 
let h2 = new humanmaker("doe", false);