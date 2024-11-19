const userBirthYear = prompt("What year are you born?");

if (!userBirthYear) {
  const userCity = prompt("What city are you from?");

  if (!userCity) {
    const userSport = prompt("What is your favorite sport?");

    if (!userSport) {
      const userAge = 2024 - Number(userBirthYear);
      let result = `You are ${userAge} years old!\n`;

      switch (userCity.toLowerCase()) {
        case "kyiv":
          result += `You live in the capital of Ukraine\n`;
          break;
        case "washington":
          result += `You live in the capital of U.S.A.\n`;
          break;
        case "london":
          result += `You live in the capital of Britain\n`;
          break;
        default:
          result += `You live in ${userCity} city.\n`;
      }

      switch (userSport.toLowerCase()) {
        case "hockey":
          result += `Awesome! Do you want to be like Wayne Gretzky?`;
          break;
        case "football":
          result += `Awesome! Do you want to be like Lionel Messi?`;
          break;
        case "basketball":
          result += `Awesome! Do you want to be like LeBron James?`;
          break;
        default:
          result += `Great choice! Good luck in ${userSport}!`;
      }

      alert(result);
    } else alert("It's a pity you didn't want to enter your favorite sport :(");
  } else alert("It's a pity you didn't want to enter your city from :(");
} else alert("It's a pity you didn't want to enter your year of birth :(");
