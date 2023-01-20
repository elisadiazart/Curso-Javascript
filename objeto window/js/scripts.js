const title = document.getElementById('h1');
const barElement = document.getElementById('bar');

const handleScroll = e => {
  let number = e.target.scrollingElement.scrollTop;
  title.textContent = `Te has desplazado ${number} píxeles`;

  barElement.style.width =
    (number * 100) /
      (e.target.scrollingElement.scrollHeight - window.innerHeight) +
    '%';
};

window.addEventListener('scroll', handleScroll);
