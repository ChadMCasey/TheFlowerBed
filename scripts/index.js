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

  Bleedingheart: {
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
const modalCloseButton = document.querySelector(".modal__close");
const modalDescription = document.querySelector(".modal__description");
const modalImage = document.querySelector(".modal__img");
const modalTitle = document.querySelector(".modal__header");

cardButton.forEach((button) => {
  const key = button.id;
  button.addEventListener("click", () => {
    popUp.classList.add("modal_opened");
    modalTitle.textContent = flowerObjects[key].title;
    modalImage.src = flowerObjects[key].img;
  });
});

modalCloseButton.addEventListener("click", () => {
  popUp.classList.remove("modal_opened");
});
