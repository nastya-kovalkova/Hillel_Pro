const input = prompt("Enter an integer");
const inputNumber = parseInt(input);

if (input !== null && input.trim() !== "") {
  if (!isNaN(inputNumber) && inputNumber > 0) {
    for (let i = 1; i <= 100 && i ** 2 <= inputNumber; i++) {
      console.log(`${i}² = ${i ** 2}`);
    }
    // for (let i = 1; i <= 100; i++) {
    // let squaredNum = i ** 2;
    // if (squaredNum <= inputNumber) {
    //   console.log(`${i}² = ${squaredNum}`);
    // } else break;
  } else alert("You entered an incorrect number!");
} else alert("It's pity that you didn't enter a number!");
