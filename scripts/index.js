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
    description: `description: Bleedinghearts are a member of the poppy family, and is native to eastern Asia and North America. 
                  The plant is poisonous if ingested by cats and dogs, the toxic alkaloid dicentrine causes nausea and skin irritation.  
                  Throughout history, this flower has symbolized sensitivity, compassion, and spiritual connection. 
                  These perennials like to be planted late spring or early summer, in partial or full shade in well-drained soil, 10-12 inches apart.`,
  },

  Bloodroot: {
    img: "../images/Bloodroot.png",
    title: "Providing For The Bloodroot",
    description: `description: Bloodroot is a herbaceous perennial from the poppy family, and is native to eastern North America. 
                  Historically, this plant is used to treat wounds, coughs, and can purify the body. 
                  Springtime is best for planting, and bloodroot prefers partial or full shade near a north-facing wall to avoid direct sunlight. Use well-drained soil with a slightly acidic pH.`,
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
