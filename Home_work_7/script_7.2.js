function productOfNumbers(a) {
  return function (b) {
    return a * b;
  };
}

console.log(productOfNumbers(5)(3));
