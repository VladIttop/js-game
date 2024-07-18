const modal = document.getElementById("modal");

const span = document.querySelector(".modal__close");

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.onload = function() {
    modal.style.display = "block";
  }