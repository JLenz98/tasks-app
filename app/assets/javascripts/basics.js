// alert("Hello world!");

//Useful for debugging, NOT for communicating to the user
// console.log("Good afternoon");
// console.log(2 + 2); = 4
// console.log(2 + "2"); = 22
// console.log("2" * 2); = 4

// console.log(true);
// console.log(false);
// console.log(2 === 2); Strictly Equal
// console.log("2" === 2); returns false
// console.log("2" == 2); returns true (less strict equality operator)
//In JS, 0 and "" are considered false values

// var myNumber = 5;

// myNumber = 4;

// if (myNumber === 5) {
//   console.log("It's 5!");
// } else if (myNumber === 4) {
//   console.log("It's 4!");
// } else {
//   console.log("I don't know what this is...");
// }

// function sayHi() {
//   console.log("Hi!");
// }

// sayHi();

// function numberMultiplier(firstNum, secondNum) {
//   return firstNum * secondNum;
// }

// console.log(numberMultiplier(3, 5));

var myArray = [56, 12, 27, 4, 3, 10];

// console.log(myArray);
// console.log(myArray[2]);
// console.log(myArray.length);

var counter = 1;
while (counter <= 10) {
  // console.log(counter);
  counter++;
}

for (var i = 0; i <= 10; i++) {
  // console.log(i);
}

for (var i = 0; i < myArray.length; i++) {
  // console.log(myArray[i]);
}

var person = {firstName: "Josh", lastName: "Lenz"};
// console.log(person["firstName"]);
// console.log(person.firstName + " " + person.lastName);

person.age = 20;
// console.log(person);

//MEAN Stack