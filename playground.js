// const speak = function() {
//   console.log(`My name is ${this.name} and I have ${this.eyeColor} eyes and ${this.hairColor} hair`);
// }

const e = require("express");

// // const person1 = {
// //     name: "Itzel",
// //     eyeColor: "green",
// //     hairColor: "purple",
// //     speak: speak
// // }

// // person1.speak(); // My name is Itzel and I have green eyes and purple hair

// const person2 = {
//     name: "Gonzalo",
//     eyeColor: "blue",
//     hairColor: "black",
//     speak: speak
// }

// person2.speak(); // My name is Gonzalo and I have blue eyes and black hair

// class Person {
//   constructor(name, eyeColor, hairColor) {// when yu create a new instance of a class, `this` refers to the instance
//     this.name = name;
//     this.eyeColor = eyeColor;
//     this.hairColor = hairColor;
//   }

//   speak() {
//     console.log(`My name is ${this.name} and I have ${this.eyeColor} eyes and ${this.hairColor} hair`);
//   }
// }

// const person1 = new Person("Itzel", "green", "purple"); // `this` refers to the instance
// // const person2 = new Person("Gonzalo", "blue", "black");

// console.log( `Using class: `, person1)  
// console.log(`not using class: `, person2)

// const outer = () => {
//   let canCode = false;// outer function scope
//   return () => {
//     console.log(canCode);// inner function scope
//   }
// }

// const innerFunc = outer(); // storing the inner function in a constant
// innerFunc(); //true // the inner function has access to the outer function scope


// Thanks Jahmari for the explanation!
// const sumOfAll = (num = 0) => { // if no argument is passed, num will be 0
//   const numbers = [1, 2, 3, 4, 5];
//   let sum = num;
//   const eachNumber = () => {
//     numbers.forEach((number) => {
//       sum += number;
//     });
//     return sum;
//   }
//   return eachNumber;
// }

// const sum = sumOfAll();
// const sumPlus20 = sumOfAll(20);
// const sumPlus10 = sumOfAll(10);
// console.log(sumPlus20()); // 35
// console.log(sumPlus10()); // 25
// console.log(sum()); // 15


// const makeAdder = (numToAdd = 0) => {
//   // debugger;
//   const adder = (num = 15) => {
//     // debugger;
//     return num + numToAdd;
//   }
//   return adder;
// }

// const add10 = makeAdder(10);
// const add20 = makeAdder(20);

// console.log(add10(5)); // 15
// console.log(add10(10)); 
// console.log(add10(100)); 
// console.log(add20(5)); // 25
// console.log(add20(10)); // 30
// console.log(add20(100)); // 120

const Car = function(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.getCarInfo = function() { // this is just syntax for the method
  return `${this.year} ${this.make} ${this.model}`;
};

Car.prototype.startEngine = function() { //links the method to the prototype of the Car constructor
  console.log(`${this.getCarInfo()} engine started.`);
};

Car.prototype.stopEngine = function() {
  console.log(`${this.getCarInfo()} engine stopped.`);
};


const car1 = new Car('Toyota', 'Corolla', 2021);
const car2 = new Car('Honda', 'Civic', 2020);
console.log(car1); // Car { make: 'Toyota', model: 'Corolla', year: 2021 }
console.log(car1.getCarInfo()); // 2021 Toyota Corolla
console.log(car2.getCarInfo()); // 2020 Honda Civic

// car1.startEngine(); // 2021 Toyota Corolla engine started.
// car2.startEngine(); // 2020 Honda Civic engine started.