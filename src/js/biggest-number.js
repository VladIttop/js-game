const inputs = document.querySelectorAll(".number__form--input");
const arr = [];  

inputs.forEach((input) => {
    input.addEventListener("blur", () => {
        arr.length = 0;  

        inputs.forEach((input) => {
            arr.push(parseFloat(input.value)); 
        });

        const biggestNumberResult = Math.max(...arr);

        const spanBiggestResult = document.getElementById("biggestNumber");
        spanBiggestResult.textContent = biggestNumberResult;
    });
});