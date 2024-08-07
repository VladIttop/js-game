let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkNumber() {
    const number = parseInt(document.getElementById('number-input').value);
    const message = document.getElementById('message_numb');

    console.log('Загадане число:', randomNumber);
    console.log('Введене число:', number);

    if (isNaN(number)) {
        message.textContent = 'Будь ласка, введіть число.';
        message.className = 'message_numb error';
    } else if (number === randomNumber) {
        message.textContent = 'Вітаю, ви вгадали число! ' + number + '!';
        message.className = 'message_numb success';
        randomNumber = Math.floor(Math.random() * 100) + 1; 
    } else {
        message.textContent = 'Спробуйте ще раз! Число було ' + randomNumber + '!';
        message.className = 'message_numb error';
        randomNumber = Math.floor(Math.random() * 100) + 1; 
    }
}
