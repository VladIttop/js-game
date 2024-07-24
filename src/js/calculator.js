'use strict';
document.addEventListener('DOMContentLoaded', function () {
  const calculatorInputFirst = document.querySelector(
    '.calculator__input--first'
  );
  const calculatorInputSecond = document.querySelector(
    '.calculator__input--second'
  );
  const calculatorAddition = document.querySelector(
    '.calculator-operators-list__button--addition'
  );
  const calculatorMultiplication = document.querySelector(
    '.calculator-operators-list__button--multiplication'
  );
  const calculatorSubstraction = document.querySelector(
    '.calculator-operators-list__button--substraction'
  );
  const calculatorDivision = document.querySelector(
    '.calculator-operators-list__button--division'
  );
  const calculatorResultButton = document.querySelector(
    '.calculator-result__button'
  );
  const calculatorResult = document.querySelector('.calculator__result');

  let operator = ''; 
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b === 0) {
      throw new Error('Ділення на нуль заборонене.');
    }
    return a / b;
  };

  const deselectAllOperators = () => {
    document
      .querySelectorAll('.calculator-operators-list__button')
      .forEach(button => {
        button.classList.remove('calculator-operators-list__button--selected');
      });
  };

  const selectOperator = button => {
    deselectAllOperators();
    button.classList.add('calculator-operators-list__button--selected');
    operator = button.textContent.trim();
  };

  calculatorAddition.addEventListener('click', () =>
    selectOperator(calculatorAddition)
  );
  calculatorMultiplication.addEventListener('click', () =>
    selectOperator(calculatorMultiplication)
  );
  calculatorSubstraction.addEventListener('click', () =>
    selectOperator(calculatorSubstraction)
  );
  calculatorDivision.addEventListener('click', () =>
    selectOperator(calculatorDivision)
  );

  calculatorResultButton.addEventListener('click', () => {
    const firstValue = parseFloat(calculatorInputFirst.value);
    const secondValue = parseFloat(calculatorInputSecond.value);
    let result;

    if (isNaN(firstValue) || isNaN(secondValue)) {
      result = 'Будь ласка, введіть обидва числа.';
    } else if (!operator) {
      result = 'Будь ласка, виберіть оператор.';
    } else {
      try {
        switch (operator) {
          case '+':
            result = add(firstValue, secondValue);
            break;
          case '-':
            result = subtract(firstValue, secondValue);
            break;
          case '*':
            result = multiply(firstValue, secondValue);
            break;
          case '/':
            result = divide(firstValue, secondValue);
            break;
          default:
            result = 'Невірний оператор';
        }
      } catch (error) {
        result = error.message;
      }
    }
    calculatorResult.textContent = result;

  });
});

