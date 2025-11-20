// Functions
// Function types
// Optional and default parameters
// Rest parameters
// Function overloads


// Function

function abcd():string{
    return "hello world";
}

// and if function is not returning anything than we can use void type

function apple():void{

}

// Call back function [()=>void]

function user(name:string, cb:(value:string)=>void){

}

user("aayush",(value:string) =>{
    console.log(value);
}
 )


// Callback function with no parameters (when it is not returning anything)
 function aayush(name:string, age:number, cb:()=>void){

 }
 aayush("aayush", 20, ()=>{
    console.log("callback function called");
 })

 // Functions with arguments

 function potato(name:string, price:number, cb:(arg:string)=>void){
    cb("potatoes are fresh");
 }
 potato("aloo", 56, (arg:string)=>{
    console.log(arg);
 })


 // [...rest/spread] parameters

function num(...args:number[]){

}

num(1,2,3,4,5,6,7,8,9);

function cars(...cars:string[]){
    console.log(cars[0]);
}
cars("bmw", "audi", "ferrari", "lamborghini");

// Spread copy an array to another array

var arr1 = [1,2,3,4,5];
var arr2 = [...arr1, 6,7,8,9];
var arr3 = [...arr1]

//Function overloads
// it means same function name with different number of parameters or different types of parameters

function abcdw(a:string): void;
function abcdw(a:string, b:number): number;

function abcdw(a:any, b?:any){
    if (typeof a=="string" && typeof b == undefined){
        console.log("hey");
    }
    if (typeof a=="string" && typeof b == "number"){
        return 42;
    }
    else throw new Error("invalid arguments");
}
abcdw("hello");
abcdw("hello", 42);

