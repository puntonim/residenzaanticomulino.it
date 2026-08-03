let modalsHidden;
let modalImg;

const onDocumentReadyAppartamenti = () => {
  initSplide();
  initFullscreenPhotoModal();
};
document.addEventListener("DOMContentLoaded", onDocumentReadyAppartamenti);

/**
 * Splide is the tool we use to manage the image slider.
 * https://splidejs.com
 */
const initSplide = () => {
  for (let splideEl of document.querySelectorAll(".splide")) {
    let splide = new Splide(splideEl, {
      // height: "30em",
      heightRatio: 0.5,
      rewind: true,
      rewindByDrag: true,
      pagination: false,
    });
    splide.mount();
  }

  // Now let's remove all classes used to show placeholders while the images were loading.
  for (let splideEl of document.querySelectorAll(".splide-placeholdernim")) {
    splideEl.classList.remove("splide-placeholdernim");
  }
  for (let img of document.querySelectorAll(".splide img.display-none")) {
    img.classList.remove("display-none");
  }
};

/**
 * When clicking on a photo in the slider, show the photo in a fullscreen modal.
 */
const initFullscreenPhotoModal = () => {
  modalsHidden = document.querySelectorAll(".modal-hidden");
  modalImg = document.querySelector(".modal-inner img");

  // Show the fullscreen modal with photo on click.
  for (let img of document.querySelectorAll(".splide__slide img")) {
    img.onclick = async () => {
      // console.log(img.src);
      _setImage(img.src);
      _showModal();
    };
  }

  // Close the modal with a click on the X or just anywhere.
  document.querySelector(".modal-close").onclick = async () => {
    _hideModal();
  };
  for (let modalHidden of modalsHidden) {
    modalHidden.onclick = async () => {
      _hideModal();
    };
  }
};

const _setImage = (src) => {
  modalImg.src = src;
};

const _showModal = () => {
  for (let modalHidden of modalsHidden) {
    modalHidden.classList.remove("modal-hidden");
  }
};
const _hideModal = () => {
  for (let modalHidden of modalsHidden) {
    modalHidden.classList.add("modal-hidden");
  }
};
