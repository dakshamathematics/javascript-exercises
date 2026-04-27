const add = function(a,b) {
	return (a+b);
};

const subtract = function(a,b) {
	return (a-b);
};

const sum = function(...theArgs) {
	const myArray = arguments[0];
  let sum = 0;
  for (let i=0; i < myArray.length; i++) {
    sum += myArray[i];
  }
  return sum;
};

const multiply = function(...theArgs) {
	const myArray = arguments[0];
  let product = 1;
  for (let i=0; i < myArray.length; i++) {
    product *= myArray[i];
  }
  return product;
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(a) {
	fact = 1;
  for (let i = 1; i < a+1; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
