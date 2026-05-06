
//parameters,rest and default parameter values



//rest

function sum(...nums){

    //code to be executed
}

//example of such...lets find this with no aguments

function sumAll(...nums){

    
    return nums.reduce((total, n) => total + n, 0);

}


console.log(sumAll(30,10,30,50,));




