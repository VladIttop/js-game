function validateEmail() {
  const footerInputEmail = document.querySelector('.footer-form__input');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(footerInputEmail.value)) {
    alert('Неправильний email');
    return false;
  }
  return true;
}

document.addEventListener('DOMContentLoaded', function () {
  const formButton = document.querySelector('.footer-form__btn');
  const footerInputEmail = document.querySelector('.footer-form__input');

  formButton.addEventListener('click', function (event) {
    if (validateEmail()) {
      footerInputEmail.value = 'Дякую за підписку';
    } else {
      event.preventDefault();
    }
  });

  footerInputEmail.addEventListener('focus', function () {
    if (footerInputEmail.value === 'Дякую за підписку') {
      footerInputEmail.value = '';
    }
  });
});
