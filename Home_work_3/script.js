//------------------HW 3.1

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

//------------------HW 3.2

// const userName = prompt("Enter your name: ", "");
// const userSurname = prompt("Enter your surname: ", "");
// const userAge = +prompt("Enter your age: ", "");
//
// console.log(`Your full name is ${userName} ${userSurname} and you turned ${userAge}`);

//------------------HW 3.3

// const number = String(12345);
// console.log(`${number[0]} ${number[1]} ${number[2]} ${number[3]} ${number[4]}`);