/*- En un HTML vacío crea un h1 y un h2 con el texto "Soy un título" y "Soy un subtítulo".
  SIN USAR ids haz que al hacer click en cualquiera de los dos, se AÑADA el texto "y he sido clickado", es decir, el h1 después de hacer click tendrá el texto "Soy un título y he sido clickado", después añade un botón con el texto resetear que deje el texto como al principio.*/

document.body.addEventListener('click', e => {
  console.dir(e.target);
  if (e.target.tagName === 'BUTTON') {
    document.body.children[0].textContent = 'Soy un título';
    document.body.children[1].textContent = 'Soy un subtítulo';
  } else {
    e.target.textContent += 'y he sido clickado';
  }
});
