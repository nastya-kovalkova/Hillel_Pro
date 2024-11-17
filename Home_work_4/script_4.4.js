let numOrString = prompt("Enter number or string:");

console.log(numOrString);

switch (true) {
  case numOrString === null:
    console.log("You cancelled!");
    break;
  case numOrString.trim() === "":
    console.log("Empty String");
    break;
  case isNaN(+numOrString):
    console.log("Number is Ba_NaN =)))");
    break;
  default:
    console.log("OK!");
}
