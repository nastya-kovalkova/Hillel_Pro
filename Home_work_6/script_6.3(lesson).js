const array = ["Hello", "a", true, 100, null, [1], { name: "Ann" }, 0];

function removeElement(array, item) {
  let writeIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== item) {
      array[writeIndex] = array[i];
      writeIndex++;
    }
  }

  array.length = writeIndex;
}

removeElement(array, [1]);
removeElement(array, { name: "Ann" });
// removeElement(array, true);
// removeElement(array, "Hello");

console.log(array);
