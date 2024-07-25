const modal = document.getElementById("modal_2");
const backdrop = document.querySelector(".backdrop");
const closeModalButton = document.querySelector(".modal__close");

function closeModal() {
    modal.style.display = "block";
    backdrop.style.display = "block";
}

closeModalButton.addEventListener("click", closeModal);