
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

function favFood(){
    let food = "Fries";

    function otherfavFood(){
        console.log(food)
    }
    otherfavFood();
}

favFood();



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


