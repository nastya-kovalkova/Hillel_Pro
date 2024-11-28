const array = ["Hello", "a", true, 100, null, [1], { name: "Ann" }, 0];

function removeElement(array, item) {
  let newLength = 0;

  for (let i = 0; i < array.length; i++) {
    if (JSON.stringify(array[i]) !== JSON.stringify(item)) {
      array[newLength] = array[i];
      newLength++;
    }
  }

  array.length = newLength;
}

// removeElement(array, [1]);
removeElement(array, { name: "Ann" });
// removeElement(array, true);
// removeElement(array, "Hello");

console.log(array);
