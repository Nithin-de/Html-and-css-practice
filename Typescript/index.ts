let sale: number = 123_456_789;
let course: String ="Typescript";
let is_published: boolean = true;

//Arrays
let numbers: number[] = [1,2,3]

/*
tuples use it with key value pairs more than 2 values makes confusion
1,'Nithin'
0,1
*/
let user: [number,string] =[1,'nithin']

/*
const small=1;
const medium=2;
const large=3;
*/
enum Size {Small = 1,Medium,Large};
let mysize: Size = Size.Large
console.log(mysize)


//functions

function calculate(income: number,taxYear = 2022): number{
    if(taxYear < 2022)
    return income*1.2;
    return income*1.3;
}
calculate(10_000)

function add(x: number,y: number): number{
    return x+y;
}

interface Person {
    name: String;
    age: number;
}

function gereet(person: Person): string {
    return `Hello,${person.name}`;
}

//Generics
function identity<T>(arg: T): T{
    return arg;
}
let result: string = identity("42")


