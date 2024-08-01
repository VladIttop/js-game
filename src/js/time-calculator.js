const resultElement = document.querySelector(".time-calculator__time")
const inputElement = document.querySelector(".time-calculator__wrapper--input")
function minutesToTime() {
  let minutes = +inputElement.value;
  console.log(minutes)
  if (isNaN(minutes) || minutes < 0) {
    return "Invalid input";
  }
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const remainingMinutes = minutes % 60;
  resultElement.textContent = `${days} дн. ${hours.toString().padStart(2, '0')} годин ${remainingMinutes.toString().padStart(2, '0')} хв.`;
 
  if (hours === "") {
    hours.textContent = "";
  }
}
const btnResult = document.querySelector(".time-calculator__wrapper--find")
btnResult.addEventListener("click", minutesToTime)