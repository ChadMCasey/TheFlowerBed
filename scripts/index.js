const cardButton = document.querySelectorAll(".card__options-button");
const popUp = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".button");
console.log(modalCloseButton);

cardButton.forEach((button) => {
  button.addEventListener("click", () => {
    popUp.classList.add("modal_opened");
  });
});

modalCloseButton.addEventListener("click", () => {
  popUp.classList.remove("modal_opened");
});
