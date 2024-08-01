const modal = document.getElementById("modal");
const backdrop = document.querySelector(".modal-header");
const closeModalButton = document.querySelector(".modal__close");
const saveButton = document.getElementById("saveButton");
const userNameInput = document.querySelector(".modal-content__input");
const headerUser = document.querySelector('#userName')

function closeModal() {
  backdrop.classList.add('is-hidden');
}

closeModalButton.addEventListener("click", closeModal);

saveButton.addEventListener("click", () => {
  const userName = userNameInput.value;
  if (userName) {
    headerUser.textContent = userName;
    backdrop.classList.add('is-hidden');
  } else if (userName === "") {
    alert("Імя не може бути пустим!")
  }
});
