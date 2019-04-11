function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// console.log(fullName("Josh", "Lenz"));

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isEven(42));
// console.log(isEven(45));

function convertToFahrenheit(celsius) {
  return celsius * 1.8 + 32
}

// console.log(convertToFahrenheit(0));
// console.log(convertToFahrenheit(100));
// console.log(convertToFahrenheit(38));


function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// console.log(rollDie());

function fizzbuzz() {
  for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
       console.log("FizzBuzz");
    } else if (i % 5 == 0) {
       console.log("Buzz");
    } else if (i % 3 == 0) {
       console.log("Fizz");
    } else {
       console.log(i);
    }
  }
}

// fizzbuzz();

function palindrome(string) {
  var string = string.toLowerCase().split("").filter(char => char != " ");
  if (string.join("") === string.reverse().join("")) {
    console.log(true);
  } else {
    console.log(false);
  }
}

palindrome("racecar");
palindrome("Hello");
palindrome("Never odd or even");