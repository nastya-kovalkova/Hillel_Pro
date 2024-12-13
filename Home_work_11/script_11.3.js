const button = document.querySelector(".button");
const text = document.querySelector(".text");
const previousColor = window.getComputedStyle(text).color;
console.log(previousColor);

function getRandomColorRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", function () {
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    text.style.color = getRandomColorRGB();
  } else text.style.color = previousColor;
});
