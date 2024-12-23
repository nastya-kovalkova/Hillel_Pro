const buttonsContainer = document.querySelector(".container");

buttonsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const buttonNumber = e.target.dataset.button;
    alert(`Button # ${buttonNumber}`);
  }
});
