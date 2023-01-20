const button = document.getElementById('button');
const popUp = document.getElementById('popup');
const rootStyles = document.documentElement.style;

const createPopUp = (message, time) => {
  popUp.innerHTML = '';
  const newText = document.createElement('h2');
  newText.textContent = message;
  popUp.prepend(newText);
  const popUpHides = setTimeout(() => {
    popUp.classList.remove('popup--show');
    clearTimeout(popUpHides);
  }, time);
  popUp.classList.add('popup--show');
  let counterWidth = '100';
  const barInterval = setInterval(() => {
    counterWidth--;
    rootStyles.setProperty('--bar-width', counterWidth + '%');
    if (counterWidth <= 0) {
      clearInterval(barInterval);
    }
  }, time / 100);
};

button.addEventListener('click', () => {
  if (popUp.classList.contains('popup--show')) return;
  createPopUp('Esto es un texto de prueba', 4000);
});
