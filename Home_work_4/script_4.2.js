const userNumber = prompt("Enter your three-digit number");

if (userNumber >= 100 && userNumber <= 999) {
  if (
    userNumber[0] === userNumber[1] ||
    userNumber[0] === userNumber[2] ||
    userNumber[1] === userNumber[2]
  ) {
    if (userNumber[0] === userNumber[1] && userNumber[0] === userNumber[2]) {
      alert("Your number is a replicated number!");
    } else alert("Your number contains the same digits!");
  } else alert("Your number doesn't have the same digits!");
} else alert("Invalid number!");
