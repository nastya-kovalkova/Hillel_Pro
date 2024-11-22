const currency = prompt("Specify which currency to calculate: usd, euro, pln");
const dollarExchange = 41.48;
const euroExchange = 43.43;
const plnExchange = 9.99;
let resultNumber = 0;
let finalNumber = 0;
let result = "";

if (currency !== null && currency.trim() !== "") {
  for (let i = 10; i <= 100; i += 10) {
    switch (currency.toLowerCase()) {
      case "usd":
        resultNumber = i * dollarExchange;
        resultNumber % 1 === 0
          ? (finalNumber = resultNumber)
          : (finalNumber = resultNumber.toFixed(2));
        result += `${i} $ = ${finalNumber} ₴\n`;
        break;
      case "euro":
        resultNumber = i * euroExchange;
        resultNumber % 1 === 0
          ? (finalNumber = resultNumber)
          : (finalNumber = resultNumber.toFixed(2));
        result += `${i} € = ${finalNumber} ₴\n`;
        break;
      case "pln":
        resultNumber = i * plnExchange;
        resultNumber % 1 === 0
          ? (finalNumber = resultNumber)
          : (finalNumber = resultNumber.toFixed(2));
        result += `${i} zł = ${finalNumber} ₴\n`;
        break;
      default:
        alert(
          "You have specified an incorrect currency!\nPlease specify one of the currencies listed.",
        );
    }
  }
  alert(result);
} else alert("It's  pity that yo didn't specify the currency!");
