const numbers = [1, 0, 10, 5, 2, 4, 7, 11, 8, 9];

// function getEvenNumbers(array) {
//   let evenNumbers = [];
//   array.forEach((number) => {
//     if (number % 2 === 0 && number !== 0) {
//       evenNumbers.push(number);
//     }
//   });
//
//   return evenNumbers;
// }

// const even = getEvenNumbers(numbers);
// console.log(even); // [10, 2, 4, 8]

const evenNumbers = numbers.filter(
  (number) => number % 2 === 0 && number !== 0,
);
console.log(evenNumbers);
