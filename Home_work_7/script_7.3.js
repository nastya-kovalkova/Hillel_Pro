function getInput() {
  return prompt("Enter a number greater than 100:");
}

function askNumber(inputGetter) {
  let input;
  for (let i = 0; i < 10; i++) {
    input = inputGetter();

    if (input === null || input.trim() === "") {
      alert("It's a pity you didn't want to enter a number!");
      return;
    }

    input = Number(input);

    if (!isNaN(input) && input > 100) {
      console.log(`Last number entered: ${input}`);
      return;
    }
  }
  console.log(`Last entered value after 10 attempts: ${input}`);
}

askNumber(getInput);
