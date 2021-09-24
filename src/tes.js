const numbers = [1, 2, 3, 4, -5];

const sum = numbers.reduce((number, newNumber) => number + newNumber, 0);
console.log(sum);
