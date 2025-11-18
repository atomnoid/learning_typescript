// Defining interface
// Using interfaces to define objects
// Extending interfaces
// Type aliases 
// Intersection types

interface user {
    name: string
    age:number
    email: string
    password: string
    gender?: string // the "?" makes this property optional"
}

function getuserinfo2(obj: user){
    obj.age
    obj.email
    obj.name
    obj.password
}
getuserinfo2({name:"atom", age: 19, email: "aayush@gmail.com", password: "12345", gender: "male"});


interface admi{
    name: string;
    role: string;
    age: number;
    gender?: string;

}
function getadmininfo2(obj:admi){
    obj.name
    obj.role
    obj.age
}
getadmininfo2({name:"atomnoid", role:"superadmin", age:20}); // even if i doont use gender it will not give error because it has optional property

// extending interfaces

interface person {
    name: string;
    age: number;
}

interface human extends person {
    gender?: string;
}

function gethumaninfo(obj: human){
    obj.name
    obj.age
    obj.gender
}

// type aliases
// it helps to create a new name for a type wherw we can add multiple types together
type mango = string | number | boolean | null;

function typeinfo (obj: mango){

}

typeinfo("hello") //you can pass one of the types defined in mango
