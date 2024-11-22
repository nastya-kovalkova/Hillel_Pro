const input = prompt("Enter a number");
const primeNumber = parseInt(input, 10);
console.log(primeNumber);

if (input !== null && input.trim() !== "") {
  if (isNaN(primeNumber) || primeNumber <= 1) {
    alert("You entered an incorrect number!");
  } else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(primeNumber); i++) {
      if (primeNumber % i === 0) {
        isPrime = false;
        break;
      }
    }
    alert(isPrime ? "The number is a prime!" : "The number isn't a prime!");
  }
} else alert("It's pity that you didn't enter a number!");
