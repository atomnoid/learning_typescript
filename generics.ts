// Generics
// Generics function
// Generic interfaces
// Generic classes

// generic function

function log<T>(val:T){
    console.log(val);
}

log<string>("hello world")


function yoyo<H>(a:H, b:string, c:number){

}
yoyo<string>("hello", "world", 5);


// generic interface

interface fruit<T>{
    name: string;
    price: number;
    key: T;
}

function fruitdetails(obj:fruit<number>){
   
}

fruitdetails({name: "mango", price: 50, key: 1});


// generic class

class bottlemaker<T>{
    constructor(public content: T){}
}

let b1 = new bottlemaker<string>("water");
let b2 = new bottlemaker<number>(100);



