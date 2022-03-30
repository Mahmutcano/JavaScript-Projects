// -----> OOP Programlama <------

// console.log(this); // Global Scope

// const emp1 = { // Object Literal
//     name: "Mahmut",
//     age: 24,
//     showInfos:function(){console.log("Bigiler....")}
// }

// const emp2 = {
//     name: "Ege",
//     age: 14,
// }

// emp1.salary = 5000;
// emp1.showInfos();

// console.log(emp1, emp2);

// function Employee(name,age,salary){ // Yapıcı Fonksiyon - Constructor
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

//     this.showInfos = function(){
//         console.log(this.name, this.age, this.salary);
//     }
// }
// const emp1 = new Employee("Mahmut", 25, 4000);
// const emp2 =new Employee("Ege", 14, 0);

// emp1.showInfos();
// emp2.showInfos();



// ----> Prototype <----

// const object = new Object();
// object.name = "Mahmut";
// console.log(object);

// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
//     this.showInfos = function(){
//         console.log("Bigiler...");
//     }
// }
// const emp1 = new Employee("Mahmut", 25);
// console.log(emp1.deneme());


// Object.Create Metodu

// const obj = {
//     test1:function(){
//         console.log("Test 1");
//     },
//     test2:function(){
//         console.log("Test 2");
//     }
// }

// // console.log(obj);

// const emp = Object.create(obj);
// emp.name = "Mahmut";

// console.log(emp);

// function Person(){

// }
// Person.prototype.test1 = function(){
//     console.log("Test 1");
// }
// Person.prototype.test2 = function(){
//     console.log("Test 2");
// }

// const person = new Person();

// console.log(person);

// Call, Apply, Bind



// Kalıtım - Inheritance

function Person(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function(){
    console.log("İsim:" + this.name + "Yaş:" + this.age);
}

// const person = new Person("Mahmut", 25);
// console.log(person);

function Employee(name, age,salary){
    // this.name = name;
    // this.age = age;,

    Person.call(this, name, age);
    
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee");
}

// Overriding - İptal Etme

Employee.prototype.showInfos = function(){
    console.log("İsim:" + this.name + "Yaş:" + this.age + "Salary:" + this.salary);
}

const emp = new Employee("Mahmut", 25, 4000);

// console.log(emp);

// emp.showInfos();
// (emp.toString());