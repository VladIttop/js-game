const inputs = document.querySelectorAll(".number__form--input");
const arr = [];

inputs.forEach((input) => {
    input.addEventListener("blur", () => {
        arr.length = 0;

        inputs.forEach((input) => {
            const value = parseFloat(input.value);
            if (!isNaN(value)) {
                arr.push(value);
            }
        });

        const spanBiggestResult = document.getElementById("biggestNumber");
        
        if (arr.length > 0) {
            const biggestNumberResult = Math.max(...arr);
            spanBiggestResult.textContent = biggestNumberResult;
        } else {
            spanBiggestResult.textContent = "Немає валідних чисел";
        }
    });
});