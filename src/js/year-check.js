function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function checkYear() {
    const year = parseInt(document.getElementById('year-input').value);
    const message = document.getElementById('message');

    if (isNaN(year) || year < 1900) {
        message.textContent = 'Будь ласка, введіть рік не менше 1900';
        message.className = 'message error';
    } else if (year < 1950) {
        message.textContent = 'Будь ласка ведіть справжній рік.';
        message.className = 'message error';
    } else if (isLeapYear(year)) {
        message.textContent = 'Ви народилися у високосний рік!';
        message.className = 'message success';
    } else {
        message.textContent = 'Ви народилися не у високосний рік!';
        message.className = 'message error';
    }
}
