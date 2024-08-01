const secondModal = document.getElementById("modal_2");
const secondBackdrop = document.querySelector(".backdrop");
const secondCloseModalButton = document.querySelector(".modal__close");

function secondCloseModal() {
    secondModal.style.display = "none";
    secondBackdrop.style.display = "none";
}

secondCloseModalButton.addEventListener("click", secondCloseModal);