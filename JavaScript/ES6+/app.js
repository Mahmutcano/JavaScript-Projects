// SINIFLAR - Syntactic Sugar

// function Employee(name, age, salary) {
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }

// Employee.prototype.showInfos = function () {
//     console.log("İsim" + this.name + "Yaş:" + this.age + "Salary:" + this.salary);
// }

// const emp = new Employee("Mahmut" , 25 , 4000);

// console.log(emp);




// ---> ES6+ <---

// class Employee {
//     constructor(name, age, salary) {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//     showInfos() {
//         console.log("İsim:" + this.name + "Yaş:" + this.age + "Salary:" + this.salary);
//     }
// }

// const emp = new Employee("Mahmut" , 25 , 4000);

// // console.log(emp);

// emp.showInfos();




// Static Methods

// class Matematik{
//    static cube(x){
//         console.log(x*x*x);
//     }
// }

// Matematik.cube(4);

// Object.create(); ---> static


// Kalıtım - Inheritance

class Person{ // Baseclass, Baseclass
    constructor(name, age){
        this.name = name;
        this.age= age;
    }
    showInfos(){
        console.log("İsim:" + this.name + "Yaş:" + this.age);
    }
}

class Employee extends Person { // DerivedClass. SubClass, ChildClass
    constructor(name, age, salary){
        // this.name = name;
        // this.age = age;
        super(name, age);
        this.salary = salary;
    }
}

const emp = new Employee ("Mahmut", 25 , 4000);

console.log(emp);
emp.showInfos();