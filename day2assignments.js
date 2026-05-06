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


//Task 2


/*
Task 2:

Write a function called createGreeting that takes two parameters:

name (default value: "Guest")

greeting (default value: "Hello")

Requirements:

If no arguments are passed, return:
"Hello, Guest!"

If only name is passed, use the default greeting.

If both arguments are passed, use both custom values.

*/

function createGreeting(name="Guest",greeting="Hello"){


    return `${greeting} ${name}`;
}


console.log(createGreeting("Nelson"));
console.log(createGreeting("Maria","Hi"));
console.log(createGreeting());

//Task3-assignments


/*
Task 3:

Write a function called calculateTotal that takes:

price

tax (default value should be 16% of the price)

Requirements:

Return the total price including tax.

If tax is not provided, calculate it automatically as 16% of the price.

If tax is provided manually, use the provided value instead of calculating it.

*/


function calculateTotal(price, tax) {
  // If tax is not provided, calculate 16% of price
  if (tax === undefined) {
    tax = price * 0.16;
  }

  const total = price + tax;
  return total;
}

console.log(calculateTotal(30000));        // 34800
console.log(calculateTotal(30000, 5000));  // 35000


