/*
In TypeScript, the unknown type represents values for which the type is not known or is dynamically determined at runtime. Unlike the any type, unknown is type-safe, and you must perform some form of type checking before working with values of the unknown type
*/
let userIntput: unknown = getUserInput();

if(typeof userIntput === "string"){
    let strlength: number =userIntput.length;
    console.log(strlength);
}else{
    console.log("user input is not a string");
}

/*
Advantages:
Type Safety: unknown provides type safety by forcing developers to perform type checks before using the values. This helps catch potential type-related errors.

Type Inference: Type inference allows you to narrow down the type within specific blocks of code, enabling better code intelligence.

Disadvantages:
Type Checking Overhead: Using unknown requires explicit type checks, which can add some boilerplate code and complexity.

Where to Use:
Dynamic Data: When dealing with values of unknown types, such as user input, deserialized data, or dynamically-typed APIs.

Type-safe Dynamic Operations: In scenarios where you want to maintain type safety but still work with values of unknown types by explicitly checking and handling them.

Where Not to Use:
Known Types: If the type information is known and can be expressed explicitly, it's generally better to use specific types instead of unknown.

*/