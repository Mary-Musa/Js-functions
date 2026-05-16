//week4-day 1 assignments

function squareNumber(num){

    let results = num * num;

    return results;
}

console.log(squareNumber(4));
console.log(squareNumber(8));
console.log(squareNumber(9));




//3/4/assignments -task1

function myDestinations(username = "travelor",...mustVisit){

    const towns = ["paris","tokyo","new york"];

    const extraDestinations = [...towns,...mustVisit];


    return `${username}'s favorite destinations are: ${extraDestinations.join(", ")}`;

}


console.log(myDestinations("Mary","east Africa","west Africa"));
console.log(myDestinations());


//Task 2


function listHobbies(username1 = "Person",...favhobbies){


    const mainHobbies = ["reading","coding","drawing"];
    const extraHobbies = [...mainHobbies,...favhobbies];

    return `${username1}'s hobbies are: ${extraHobbies.join(", ")}`;

}

console.log(listHobbies("Nancy","Music","Cooking"));

console.log(listHobbies());

//The Above Code demonstrates a good use of Es6 practice


//Task 3 assignments 

