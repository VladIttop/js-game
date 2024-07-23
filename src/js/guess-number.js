const randomNumber = Math.floor(Math.random() * 1000) + 1;

function checkNumber() {
    const number = parseInt(document.getElementById('number-input').value);
    const message = document.getElementById('message');

    console.log('Загадане число:', randomNumber);
    console.log('Введене число:', number);

    if (isNaN(number)) {
        message.textContent = 'Будь ласка, введіть число.';
        message.className = 'message_numb error';
    } else if (number === randomNumber) {
        message.textContent = 'Вітаю, ви вгадали число! ' + number + '!';
        message.className = 'message_numb success';
    } else {
        message.textContent = 'Спробуйте ще раз! Число було ' + randomNumber + '!';
        message.className = 'message_numb error';
    }
}
