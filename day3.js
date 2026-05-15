
//parameters,rest and default parameter values



//rest

function sum(...nums){

    //code to be executed
}

//example of such...lets find this with no aguments

// function sumAll(...nums){


//     return nums.reduce((total, n) => total + n, 0);

// }


// console.log(sumAll(30,10,30,50,));

//another simpler example

        function sum(...nums){


            let total = 0;


            for(let i=0; i<nums.length; i++){

                
                    total += nums[i];

                }

                    return total;
                
            }

        console.log(sum(300,300,300,1000));



//This function uses the rest parameter (...nums), which collects all arguments into an array


//assuming we are running awatch business .And we don't know our monthly total sales and we need to know our sales


    function sales(...prices){

            let total = 0;


        for( let i=0; i< prices.length; i++){


            total += prices[i];
        }

         return total;

      }

    
      console.log(sales(4000,2000,4000,500));

// in-class activity on rest parameter

// create a function call it collectColors.
//the func must use rest parameter and it should accept any color names
//and it should return them in a single sentence. eg. My favourite colors are:1,2,3...

//add default parameter where colors are not provided,it should say that no colors are provided.


function collectColors(...colors){

    if(colors.length === 0){

        return "no colors were provided";
    }
    
    return 'my favourite colors are ' + colors.join (",");
}

console.log(collectColors());

console.log(collectColors("red "," yellow ","  white "));


//function that greets people

function greetPeople(...people){

    if(people.length === 0){

        return "No one to greet";
    }

    return `Hello my good people: ${people.join(", ")}`;
}

console.log(greetPeople("Mary","Hanna","Amina"));

console.log(greetPeople());





function greeting(...names){

    if(names.length === 0){

        return "No one to greet";
    }

    return `Hello:  ${names.join(",")}`;
}


console.log(greeting("John","Hanna","Nada"));

console.log(greeting());


// Spread Operator-is used to expand arrays or Objects


const colors = ["red","Pink"];
const moreColors = ["Orange","Green","Yellow",...colors,"Violet"];

console.log(moreColors);



// another example ---for the spread operator

function combineFoods(...otherfoods){

    const grains = ["wheat","maize","Beans","mango"];

    const allfoods = [...grains,...otherfoods];

    return "I like to eat:" + allfoods.join(",");
}

console.log(combineFoods("Dessert","Meat"));



//Another example with the hobbies

function hobbies(...myhobbies){

    const favHobbies = ["Listening to music","wacthing","scrolling"];

    const allHobbies = [...favHobbies,...myhobbies];

    return "I want to really get rid of some hobbies that don't built me:"+ allHobbies.join(",");
}

console.log(hobbies("Writing","Talking"));


//another example of books you read

function combineReads(...allreads){

    const recentReads = ["Rich Dad &poor Dad","How to win Friends and Influence People","Atomic habits"];

    const oldReads = [...recentReads,...allreads];

    return "My Reads for this month are:"+ oldReads.join(",");


}

console.log(combineReads("How to avoid procrastination","Keeping Good Habits"));