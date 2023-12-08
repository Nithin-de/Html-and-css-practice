function getFirstElement <T> (arr: T[]){
    return arr[0];
}
let arr1 = getFirstElement([1,2,3]);
let arr2 = getFirstElement(["one","two","three"])


function swap<T> (a: T,b: T):[T,T]{
    return [b,a]
} 

const ans3 = swap(1,2)
const ans4 = swap("1","2");



function swap2<T,U>(a: T,b: U):[U,T]{
    return [b,a]
}

const ans5 = swap2(1,"2")
const ans6 = swap2("1",true);


