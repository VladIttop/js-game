function minutesToTime(minutes) {
    if (isNaN(minutes) || minutes < 0) {
      return "Invalid input";
    }
  
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours.toString().padStart(2, '0')} годин ${remainingMinutes.toString().padStart(2, '0')} хв.`;
  }
  
  const minutes = parseInt(prompt("Введіть число хвилин: "));
  if (isNaN(minutes)) {
    console.log("Invalid input");
  } else {
    const timeString = minutesToTime(minutes);
    console.log(timeString);
  }
  const btn = document.querySelector(".calculator__form--find")