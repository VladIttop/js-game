
document.addEventListener("DOMContentLoaded", function() {

  var modal = document.getElementById("modal");
  var closeModalButton = document.querySelector(".modal__close");
  var saveButton = document.getElementById("saveButton");
  var userNameInput = document.getElementById("userNameInput");

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  openModal();

  closeModalButton.addEventListener("click", closeModal);

  saveButton.addEventListener("click", function() {
    var userName = userNameInput.value;
    if (userName) {
      localStorage.setItem("userName", userName); 
      closeModal();
      alert("Ім'я збережено: " + userName); 
    } else {
      alert("Будь ласка, введіть своє ім'я."); 
    }
  });
});