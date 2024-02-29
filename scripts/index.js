

const flowerObjects = {
  Hellebore: {
    img: "../images/Hellebore.png",
    title: "Taking Care Of The Hellebore",
    description: "",
  },

  Daylily: {
    img: "../images/Daylily.png",
    title: "Nurturing The Daylily",
    description: "",
  },

  Daylily: {
    img: "../images/Bleedingheart.png",
    title: "Raising the Bleedingheart",
    description: "",
  },

  Bloodroot: {
    img: "../images/Bloodroot.png",
    title: "Providing For The Bloodroot",
    description: "",
  },
};

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
