// Type guards and typescript utility type
// Using typeof, instanceof, in operator for type guarding
// partial, required, readonly

function abcd(args: string | number| any){
    if (typeof args === "number"){
        return "number";
    }
    else if (typeof args === "string"){
        return "string";
    }
    else{
        throw new Error("invalid type");
    }
}

console.log(abcd(12));
console.log(abcd("hello world"));
abcd(true); // will throw error