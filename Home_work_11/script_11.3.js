const button = document.querySelector(".button");

// const text = document.querySelector(".text");

function getRandomColorRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener("click", () => {
  this.classList.toggle("active");
  this.previousSibling.style.color = getRandomColorRGB();
});
