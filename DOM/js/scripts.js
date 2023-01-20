/*<header id="header" class="header">
  <h1 id="main-title" class="title title--big">Soy un título</h1>
  <h2 id="main-subtitle" class="subtitle subtitle--big">Soy un subtítulo</h2>
</header>

- Partiendo de este HTML, crea una función que reciba UN SOLO ELEMENTO (Elige uno de los 3) y muestre toda la información propia y de los otros dos elementos, padres, hermanos o hijos en función del elemento que hayas elegido. La función debe mostrar por consola el id, las clases, el textContent, el ancho y el alto de los tres elementos con un mensaje que no parezca de un robot 😊.*/

const titleElement = document.getElementById('header');

const elementInfo = element => {
  console.dir(titleElement);
  if (
    element.parentElement === 'header' &&
    element.nextElementSibling === 'h2'
  ) {
    console.log(
      `El elemento ${element.id} tiene el id "${element.id}, las clases "${element.classList}", el text content "${element.textContent}", de ancho ${element.clientWidth}px y de alto ${element.clientHeight}px
      El hermano ${element.nextElementSibling.id} tiene el id "${element.nextElementSibling.id}, las clases "${element.nextElementSibling.classList}", el text content "${element.nextElementSibling.textContent}", de ancho ${element.nextElementSibling.clientWidth}px y de alto ${element.nextElementSibling.clientHeight}px
      El padre ${element.parentElement.id} tiene el id "${element.nextElementSibling.id}, las clases "${element.nextElementSibling.classList}", el text content "${element.nextElementSibling.textContent}", de ancho ${element.nextElementSibling.clientWidth}px y de alto ${element.nextElementSibling.clientHeight}px`
    );
  } else if (
    element.parentElement === 'header' &&
    element.previousElementSibling === 'h1'
  ) {
    console.log(
      `El elemento ${element.id} tiene el id "${element.id}, las clases "${element.classList}", el text content "${element.textContent}", de ancho ${element.clientWidth}px y de alto ${element.clientHeight}px
      El hermano ${element.previousElementSibling.id} tiene el id "${element.previousElementSibling.id}, las clases "${element.previousElementSibling.classList}", el text content "${element.previousElementSibling.textContent}", de ancho ${element.previousElementSibling.clientWidth}px y de alto ${element.previousElementSibling.clientHeight}px
      El padre ${element.parentElement.id} tiene el id "${element.nextElementSibling.id}, las clases "${element.nextElementSibling.classList}", el text content "${element.nextElementSibling.textContent}", de ancho ${element.nextElementSibling.clientWidth}px y de alto ${element.nextElementSibling.clientHeight}px`
    );
  } else if (element.childElementCount === '2') {
    `El elemento ${element.id} tiene el id "${element.id}, las clases "${element.classList}", el text content "${element.textContent}", de ancho ${element.clientWidth}px y de alto ${element.clientHeight}px
    El primer hijo ${element.children[0].id} tiene el id "${element.children[0].id}, las clases "${element.children[0].classList}", el text content "${element.children[0].textContent}", de ancho ${element.children[0].clientWidth}px y de alto ${element.children[0].clientHeight}px
    El segundo hijo ${element.children[1].id} tiene el id "${element.children[1].id}, las clases "${element.children[1].classList}", el text content "${element.children[1].textContent}", de ancho ${element.children[1].clientWidth}px y de alto ${element.children[1].clientHeight}px`;
  }
};

elementInfo(titleElement);
