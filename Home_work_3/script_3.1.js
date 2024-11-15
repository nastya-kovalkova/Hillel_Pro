const myNumber = 7;
const myString = "Anastasiia";
const myBigInt = 123n;
const myBoolean = true;
let myUndefined;
const myNull = null;
const mySymbol = Symbol("Anastasiia");
const myObject = [1, 2, 3];

console.log(`${myNumber} is a ${typeof(myNumber)}`);
console.log(`${myString} is a ${typeof(myString)}`);
console.log(`${myBigInt} is a ${typeof(myBigInt)}`);
console.log(`${myBoolean} is a ${typeof(myBoolean)}`);
console.log(`${myUndefined} is a ${typeof(myUndefined)}`);
console.log(`${myNull} is a ${typeof(myNull)} (historically)`);
console.log(`${mySymbol.toString()} is a ${typeof(mySymbol)}`);
console.log(`[${myObject}] is a ${typeof(myObject)}`);