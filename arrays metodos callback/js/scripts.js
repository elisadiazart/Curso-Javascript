/*- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array*/

const arrayXIndex = array => {
  array.forEach((number, index) => console.log(number * index));
};

arrayXIndex([1, 2, 3, 4, 5]);
console.clear();

/*- Crea una función que reciba un array de números y devuelva cada número dividido por su índice en el array más 2*/

const arrayDividedIndexPlus2 = array => {
  return array.map((number, index) => number / (index + 2));
};

console.log(arrayDividedIndexPlus2([1, 2, 3, 4, 5]));

/*- Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.*/

const toUpperCaseArray = array => {
  return array.map(word => word.toUpperCase());
};

console.log(toUpperCaseArray(['casa', 'perro', 'gato']));

/*- Crea una función que reciba un array de palabras y una letra. La función devolerá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.*/

/*- Añade a la función anterior que el filtro funcione independientemente de mayusculas o minúsculas.*/

const wordLetterSortage = (array, letter) => {
  const sorting = array.filter(word =>
    word.toUpperCase().startsWith(letter.toUpperCase())
  );
  if (sorting.length === 0) {
    console.log('No hay palabras que empiecen por esa letra');
  } else {
    console.log(sorting);
  }
};

wordLetterSortage(['casa', 'perro', 'mochila', 'mesa'], 'M');

/*- Crea una función que reciba un array de números desordenados y los muestre por consola ordenados de mayor a menor y de menor a mayor.*/

const sortNumbers = numbers => {
  console.log(numbers.sort((a, b) => a - b));
  console.log(numbers.sort((a, b) => b - a));
};

sortNumbers([5, 4, 7, 1, 8, 6]);
console.clear();

/*- Crea una función que reciba un array de 5 palabras y las ordene alfabéticamente e inversamente.*/

const sortAlphabetically = array => {
  console.log(
    array.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    })
  );
};

sortAlphabetically(['casa', 'arbol', 'perro', 'vecina', 'ayuntamiento']);
