const passwordLength = document.getElementById(
  'password-generator-length-number'
);
const rangeInput = document.getElementById('password-generator-range');
const generateButton = document.getElementById('button-generate');

rangeInput.addEventListener('change', e => {
  passwordLength.textContent = e.target.value;
});

const form = document.getElementById('password-generator-options');

form.addEventListener('submit', e => {
  e.preventDefault();
});

let password = '';
const lowerCaseAlphabet = 'abcdefghijklmnñopkrstuvwxyz';
const upperCaseAlphabet = lowerCaseAlphabet.toUpperCase();
const numbers = '123456789';
const symbols = '!@#¢%&/()]{}?¿+-$';
const generatedPassword = document.getElementById('generated-password');

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

generateButton.addEventListener('click', e => {
  password = '';
  for (let index = 0; index < passwordLength.textContent; index++) {
    password += characterAllowed.charAt(
      generateRandomNumber(0, characterAllowed.length)
    );
  }
  generatedPassword.value = password;
  console.log(upperCaseInput.checked);
});

const setAllowedCharacter = () => {
  characterAllowed = '';

  if (upperCaseInput.checked) {
    characterAllowed += upperCaseAlphabet;
  }

  if (lowerCaseInput.checked) {
    characterAllowed += lowerCaseAlphabet;
  }

  if (numbersInput.checked) {
    characterAllowed += numbers;
  }

  if (symbolsInput.checked) {
    characterAllowed += symbols;
  }
};

const upperCaseInput = document.getElementById('uppercase');
const lowerCaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');

form.addEventListener('change', e => {
  setAllowedCharacter();
  const strenghtMessages = ['TOO WEAK', 'WEAK', 'MEDIUM', 'STRENGTH'];
  const imputsSelected = document.querySelectorAll('input:checked');
  const strenghtText = document.getElementById('strength-value');

  if (rangeInput.value < 5) {
    strenghtText.textContent = 'TOO SHORT';
    generateButton.setAttribute('disabled', 89);
  } else if (imputsSelected.length === 0) {
    strenghtText.textContent = 'NO OPTIONS CHECKED';
    generateButton.setAttribute('disabled', 32);
  } else {
    generateButton.removeAttribute('disabled');
    strenghtText.textContent = strenghtMessages[imputsSelected.length - 1];
  }
});

/*
CONSTANTES
VARIABLES
FUNCIONES
ACCIONES --> llamadas a funciones
EVENTOS*/
