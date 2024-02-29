const flowerObjects = {
  Hellebore: {
    img: "../images/Hellebore.png",
    title: "Taking Care Of The Hellebore",
    description: `description: Helleborus belongs to a small genus of around 20 herbaceous native to Asia and Europe.
                  The genus was created by Carl Linnaeus in 1753 within volume one of his "Species Plantarum."
                  It is believed that the name originated from the Ancient Greek word elléboros. Many hellebore
                  species are considered toxic, and if ingested, have a burning acrid taste. This species can be planted
                  in the spring or fall, and does well in well drained, fertile soil.`,
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
