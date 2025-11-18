// Defining interface
// Using interfaces to define objects
// Extending interfaces
// Type aliases 
// Intersection types
function getuserinfo1(obj) {
    obj.age;
    obj.email;
    obj.name;
    obj.password;
}
getuserinfo1({ name: "atom", age: 19, email: "aayush@gmail.com", password: "12345", gender: "male" });
function getadmininfo1(obj) {
    obj.name;
    obj.role;
    obj.age;
}
getadmininfo1({ name: "atomnoid", role: "superadmin", age: 20 }); // even if i doont use gender it will not give error because it has optional property
