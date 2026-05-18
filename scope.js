
        let score = 10;//global scope /not advisble because it can be changed anywhere by anything

        function points(){

            return score = score + score;
        }

        console.log(points());


  

// example 2

        let city = "Nairobi";

        function showCity(){

            return city;
        }

        console.log(showCity());

//Local variable or scope....this is adversable


        function greet(){
            
            let name ="Dallio";

            return name;
        }

        console.log(greet());// if you invoke a func and print the name on the console,it will give a reference error saying name is not defined.




        function test(){

            let number = 5;

            return number;
        }

        console.log(test());// output-referror....number not defined if we print Number directly with out a function


        //lexical scope---meaning js the scope depends on where funcs are witten not where they are executed.

        function outer(){

            let language = "English";

            function inner(){

                console.log(language);
            }

            inner();
        }

        outer();


        //another example to illustrate lexical scope

function favFood(){
    let food = "Fries";

    function otherfavFood(){
        console.log(food)
    }
    otherfavFood();
}

favFood();

//Another example of closure

function nums(){

    let count = 0;

    function nums2(){
        count ++;
        console.log(count);
    }

    return nums2;
}

const counter = nums();

counter();
counter();
counter();
counter();

//another example of closure and counter function
function watchSales(){

    let sales = 0;

    return function salesIncrease(){

        sales++;

        console.log(`the watches sold are: ${sales}`);

    }

}

    const watchesSold = watchSales();

watchesSold();
watchesSold();
watchesSold();
watchesSold();
watchesSold();
watchesSold();


//another example,

function bankAccount(){

    let balance = 30000;

    return {

        deposit(amount){
            balance += amount
            console.log(balance)
        }
    }
}

const account = bankAccount()

account.deposit(800);
account.deposit(40000);// the total shows that the the func remembers its balance which is aspect of closures


//how small banking systems work

// function bankAccount() {

//     let balance = 30000;

//     return {

//         deposit(amount) {
//             balance += amount;
//             console.log(`Deposited: ${amount}`);
//         },

//         withdraw(amount) {
//             balance -= amount;
//             console.log(`Withdrawn: ${amount}`);
//         },

//         checkBalance() {
//             console.log(`Balance: ${balance}`);
//         }
//     };
// }

// const account = bankAccount();

// account.deposit(500);
// account.withdraw(200);
// account.checkBalance();

        function kitchen(){

            let fruits = "mango";

            function fridge(){

                console.log("Inside we only have", fruits);
            }

            fridge();
        }

        kitchen();




    function School(){

        let teacher = "Maha";

        function classRoom(){

            let student = "Judith";

            console.log(student);
            
            console.log(teacher);
        }

        classRoom();
    }

    School();

//that is how lexical scope does in javascript

let country = "kenya";

function continent(){

    let region = "africa";

    function city(){

        console.log(country);
        console.log(region);
    }

    city();
}

continent();





function greetMaker(greeting){

    return function(name){

        console.log(`${greeting}, ${name}!`);

    };

}

const sayHello = greetMaker("Hello");

sayHello("Ali");
sayHello("Nada");



