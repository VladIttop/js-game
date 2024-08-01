const modal = document.getElementById("modal");
const backdrop = document.querySelector(".backdrop");
const closeModalButton = document.querySelector(".modal__close");
const saveButton = document.getElementById("saveButton");
const userNameInput = document.querySelector(".modal-content__input");
const headerUser = document.querySelector('#userName')
console.log(saveButton);
function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}

closeModalButton.addEventListener("click", closeModal);

saveButton.addEventListener("click", () => {
  const userName = userNameInput.value;
  if (userName) {
    headerUser.textContent = userName;

    closeModal();
  } else if (userName === "") {
    alert("Імя не може бути пустим!")
  }
});
