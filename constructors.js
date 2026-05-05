
//constructor is a special function used to create objects


function Person(name,age,role){

    this.name = name;
    this.age = age;
    this.role = role;
}

const user1 = new Person("Mary",27,"software developer");
const user2 = new Person("Nancy",30,"Manager");
const user3 = new Person("John",35,"Seniour Manager");


console.log(user1);
console.log(user2);
console.log(user3);




