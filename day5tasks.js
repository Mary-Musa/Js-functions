/*
Testing-
a closure — which is when a function returns another function and 
the inner function still remembers values from the outer function.
*/

function greetingGenerator(greeting){

    return function(name){

        console.log( `${greeting}, ${name}!`);
        
    };
}

const goodMorning = greetingGenerator("Good Morning");

goodMorning("Amina");
goodMorning("Julia");
goodMorning("John");



/*
Task 2: Score Tracker (Closure)
Create a function called .
Requirements Inside 

the function, create a variable called and initialize it to 0.Return a function that:
Accepts a parameter called
Adds the points to the score
Prints the updated score.
Example BehaviorScore: 10
Score: 25
Score: 40
Testing Requirement
Call your function .

*/

function scoretracker(){

    let score = 0;

    return function(points){

        score += points;

        console.log(`score:${score}`);


    };
}

const trackScore = scoretracker();

trackScore(10);
trackScore(15);
trackScore(15);



let school = "Moringa School";

function courseInfo(){

    let course = "Software Engineering";

    function studentInfo(){


        console.log("School:",school);

        console.log("Course:",course);
        
    }

    studentInfo();
}

courseInfo();






