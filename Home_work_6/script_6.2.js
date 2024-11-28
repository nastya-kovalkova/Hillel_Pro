const mixedArray = ["Hello", " ", "b", 6, null, 2, "a", [], 4];

function average(array) {
  const callBack = function (accumulator, currentElement) {
    if (typeof currentElement === "number") {
      accumulator.sum += currentElement;
      accumulator.count++;
    }
    console.log(accumulator);
    return accumulator;
  };

  const result = array.reduce(callBack, { sum: 0, count: 0 });

  return result.sum / result.count;
}

console.log(average(mixedArray));
