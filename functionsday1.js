// first trial on functions
function greet(name){

   return `Hello ${name}`;


}

 
const greetUser = function(name){

    return `Hello ${name}`;
};


// invoking the function

console.log(greet("Mary"));
console.log(greetUser("John"));


// Write a function declaration that returns good morning john.


function Greet(name){

    return `Hi,good morning mr ${name}.`;
}

//calling the function

console.log(Greet("John"));


//Write a fucntion expression that takes a number and returns its square

const square = function(a) {

    return  a * a;
};

console.log(square(4));


// Declare a function: that takes a number and returns true if even

function isEven(num){

    return num % 2 === 0;
}

console.log(isEven(4));


const isOdd = function(num){

    return num % 2 === 1;
};

console.log(isOdd(10));


/*Spend 10 minutes writing 5 tiny functions:

add
subtract
greet
isOdd
square

*/

function add(a,b){

    return a + b;
}

function subtract(a,b){

    return a -b;
}

console.log(add(4,6));

console.log(subtract(7,2));


function greeting(name){

    return `good afternoon ${name}`;
}

console.log(greeting("Ann"));


function add(c,d){

    return c + d;
}


let sum1 = (40 +50);
let sum2 = (30 +100);

console.log(sum1);
console.log(sum2);


//write a function  named animal and it should return Hi,I am a dog,a cat and a cow.

// function animal(name){

//     return `Hi,I am a ${name}`;
   
// }

// console.log(animal("dog"));
// console.log(animal("cat"));
// console.log(animal("cow"));


// const Multiply = function(a,b){

//     return a*b;
// }

// console.log(Multiply(5,8));

// alternatively

const Multiply = function Multiplyfn(a,b){

    return a*b;
}


console.log(Multiply(3,9));

//

const animal = function(name){


    return `Hi,I am a ${name}`;
}

console.log(animal("dog"));
console.log(animal("cat"));
console.log(animal("cow"));


function name(first,second,last){

    return `Hello, ${first} ${second} ${last}.`;
}

//got an error undefined ,undefined for the second and last name because i didn't put them as separate parameters

let fullname = name("Mary", "Abdulaziz", "Musa");

console.log(fullname);


function convertCurrency(ksh,usd=129){

    return ksh*usd;
}

console.log(convertCurrency(5000));
console.log(convertCurrency(5000,120));

//usd = 129 → default value (used if no second argument is provided)

function calculateTotal(price, taxrate = 0.5){

    const tax = price * taxrate;

    return price + tax;
}

console.log(calculateTotal(5000));
console.log(calculateTotal(4000,0.1));



//create a function that checks whether a number is even or odd and it returns saying the number is even or off

function checkEvenOdd(num){

    if(num % 2 === 0){

        return `The ${num} is an even number`;
    }else if(num % 2 === 1){

        return `The ${num} is an Odd number`;
    }else{

        return "invalid number.";
    }
}


console.log(checkEvenOdd(3));
console.log(checkEvenOdd(17));
console.log(checkEvenOdd(4));


// assuming we have this function called test


function test(){

    console.log("Hello");
}

let results = test();
console.log(results);


//when a function has no return statement,javascript automatically returns undefined
//let results = test(); is the same as let results = undefined.

//Arrow functions allow for shorter syntax for function expressions
//skip the function keyword,return keyword,and curly braces.

const add1 = (a,b) => a + b;

console.log(add1(2,4));


function add2(a,b){

    return a+b;
}

console.log(add2(2,3) * 10);



//switch case scenario for a basic calculator


function calculate(a,operator,b){

    switch(operator){

        case '+':return a +b;
        case '-':return a-b;
        case '*':return a*b;
        case '/':
            if(b === 0) return 'can not divide by zero';

            return a/b;

            default:
                return 'unknown operator';
    }
}

console.log(calculate(2,'+',4));
console.log(calculate(3,'-',1));
console.log(calculate(9,'*',9));
console.log(calculate(2,'/',0));
console.log(calculate(5,'x',7));
