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