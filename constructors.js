
//constructor is a special function used to create objects----day2
//it avoids repeatation of properties.


function Person(name,age,role){ //Person is the blueprint-thatbhelps us to create minimum text ,same structure but different values without repeating code

    this.name = name;//this means the new object is being created.
    this.age = age;
    this.role = role;



    
    //this is a method -which is a function inside an object


                    this.introduce = function(){

                    return `Hi,I am ${name} and am ${age} years old . My role is ${role}. `;
                }

//This is a method to check whether a person is an adult or a minor and prints out an into message .

            this.isAdult = function(){

                if(age>=18){
                    return `Hi! ${name} ,you are an adult`;
                }else{

                    return `Hi!, ${name} ,you are a minor`;
                }
            }
}

const user1 = new Person("Mary",27,"software developer");
const user2 = new Person("Nancy",12,"Manager");
const user3 = new Person("John",35,"Seniour Manager");


console.log(user1.isAdult());
console.log(user2.isAdult());
console.log(user3.isAdult());


// class assignment/tasks


function Product(productName,price,quantity){


    this.productName = productName;
    this.price = price;
    this.quantity = quantity;

    // this.totalValue = function(){

    //     return this.price * this.quantity;
    // }

}


const product1 = new Product("Laptop",20000,"3");
const product2 = new Product("Iphone",120000,"2");
const product3 = new Product("laptopbag",5000,"5");



console.log(product1,product2,product3);
// console.log(product2);
// console.log(product3);


console.log(`the total value of ${product1.productName} is:${product1.price * product1.quantity}`);
console.log(`the total value of ${product2.productName} is:${product2.price * product2.quantity}`);
console.log(`the total value of ${product3.productName} is:${product3.price * product3.quantity}`);

