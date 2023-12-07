// In TypeScript, a tuple is a finite ordered list of elements that can have different types. Tuples allow you to express an array where the type of a fixed number of elements is known, and the types of each element can be specified.
let employee:[string,number,boolean];
employee = ["Nithin",30,true];

let names: string = employee[0];
let age: number = employee[1];
let isactive: boolean = employee[2];

/*
Advantages:
Type Safety: Tuples provide type safety by enforcing a specific order and type for each element in the tuple.

Explicit Structure: Tuples allow you to explicitly define the structure of an array, making the code more self-documenting.

Disadvantages:
Limited Operations: Unlike arrays, tuples have a fixed length, and operations like push or pop are not allowed.

Index Signatures: Accessing elements using numeric indices can be error-prone if the tuple length is large, as it might be challenging to remember the meaning of each index.

Where to Use:
Fixed Structure: When working with collections of values where each position has a specific meaning, such as representing coordinates (x, y, z) or an employee's information (name, age, active status).

Function Return Types: Tuples can be useful for functions that return multiple values, providing a structured way to represent the output.

Where Not to Use:
Dynamic Collections: If the collection's length may vary or if the order of elements is not significant, using an array or an object might be more appropriate.
*/
