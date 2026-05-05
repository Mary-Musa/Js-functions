/*

Task 1:
Create a function that:

Takes two arrays

Returns a new merged array

Uses spread

Does NOT mutate either original array

Example:

const a = [1, 2];
const b = [3, 4];

combineArrays(a, b);
// [1, 2, 3, 4]

*/



function combineArrays(arr1,arr2){

    const merged = [...arr1,...arr2];

    return merged;
}

const a = ["Apple","Guava","Grapes"];
const b = ["Lemon","Pears","Banana"];


console.log(combineArrays(a,b));




