const openModalButton = document.querySelector(".footer-form__btn");
const closeModalButtonFooter = document.querySelector(".modal__close-footer");
const inputFooter = document.querySelector(".footer-form__input");

function closeModal() {
    modalFooter.classList.add("is-hidden");
}
const openModal = () => {
    if (inputFooter.value === "" || !inputFooter.value.includes("@")) {
        return alert("Введіть коректний email");
    }
    modalFooter.classList.remove("is-hidden");
}

closeModalButtonFooter.addEventListener("click", closeModal);

openModalButton.addEventListener("click", openModal);


