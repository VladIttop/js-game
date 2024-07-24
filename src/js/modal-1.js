  const modal = document.getElementById("modal");
  const backdrop = document.querySelector(".backdrop");
  const closeModalButton = document.querySelector(".modal__close");
  const saveButton = document.getElementById("saveButton");
  const userNameInput = document.getElementById("userNameInput");

  function closeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
  }

  closeModalButton.addEventListener("click", closeModal);

  saveButton.addEventListener("click", () => {
    const userName = userNameInput.value;
    if (userName) {
      localStorage.setItem("userName", userName); 
      closeModal();
    } else if(userName === "") {
      alert("Імя не може бути пустим!")
    }
  });
