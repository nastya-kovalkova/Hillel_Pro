function showRandomPicture(number) {
  const img = document.createElement("img");
  img.style.cssText =
    "display: block; width: 600px; height: 600px; object-fit: cover; margin: 0 auto;";
  img.src = `./pictures/${number}.jpg`;
  document.querySelector(".container").append(img);
}

const randomNumber = Math.round(Math.random() * 9 + 1);
console.log(randomNumber);

showRandomPicture(randomNumber);
