const setLinkButton = document.querySelector(".set-btn");
const redirectButton = document.querySelector(".redirect-btn");
let userLink = "";

setLinkButton.addEventListener("click", (e) => {
  const inputLink = prompt("Enter your link to redirect please");

  if (inputLink && inputLink.trim().length > 0) {
    userLink = inputLink.trim();
    if (!userLink.startsWith("http://") && !userLink.startsWith("https://")) {
      userLink = `https://${userLink}`;
    }

    redirectButton.href = userLink;
    redirectButton.classList.remove("btn--none");
    alert("Link saved successfully");
  } else {
    alert("Invalid link!");
  }
});
