/*- Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.*/

const countdown = number => {
  for (let index = number; index >= 0; index--) {
    console.log(index);
  }
};
countdown(5);
console.clear();

/*- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.*/

const sumArray = array => {
  let result = 0;
  for (const item of array) {
    result = result + item;
  }

  console.log(result);
};

sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.clear();

/*Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:*/

const multiplicationTable = number => {
  for (let index = 0; index <= 10; index++) {
    console.log(`${number} x ${index} = ${number * index}`);
  }
};

multiplicationTable(5);
console.clear();

/*- Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:*/

const multiplicationTableReverse = number => {
  for (let index = 10; index >= 0; index--) {
    console.log(`${number} x ${index} = ${number * index}`);
  }
};

multiplicationTableReverse(6);
console.clear();

/*- Crea una función que reciba un año y tu edad, la función debe imprimir:

  - "naciste en el año X"
  - "En el año X cumpliste 1 año"
  - "En el año X cumpliste 2 años"
  - "En el año X cumpliste 3 años"
    ....*/

const ageSum = (year, age) => {
  console.log(`Naciste en el año ${year}`);
  for (let index = 1; index <= age; index++) {
    if (index > 1) {
      console.log(`En el año ${year + index} cumpliste ${index} años`);
    } else {
      console.log(`En el año ${year + index} cumpliste ${index} año`);
    }
  }
};

ageSum(1999, 4);
console.clear();

/*- Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.*/

const evenNumbers = (number1, number2) => {
  for (let index = number1; index <= number2; index++) {
    if (index % 2 === 0) {
      console.log(index);
    }
  }
};

evenNumbers(10, 20);
console.clear();

/*- Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.*/

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomNumbers = () => {
  const array = [];
  const array2 = [];
  for (let index = 0; index <= 5; index++) {
    const numbers1 = generateRandomNumber(0, 10);
    const numbers2 = generateRandomNumber(0, 10);
    array.push(numbers1);
    array2.push(numbers2);
    if (numbers1 === numbers2) {
      console.log(numbers1);
    }
  }
};

randomNumbers();
console.clear();

/*- Crea una función que reciba un número y te diga si es primo o no.*/

const primeNumber = number => {
  for (let index = 2; index < number; index++) {
    if (number % index === 0) {
      return `No es primo`;
    }
  }
  return `Es primo`;
};

console.log(primeNumber(52));
console.clear();

/*- Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
  "Número: 2 - Cuadrado: 4 - Cubo: 8".
  Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)*/

const numberPower = array => {
  for (let index = 0; index < array.length; index++) {
    console.log(
      `Número ${array[index]} - Cuadrado ${Math.pow(
        array[index],
        2
      )} - Cubo ${Math.pow(array[index], 3)}`
    );
  }
};

numberPower([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.clear();

/*- Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.*/

const upperCaseVowels = word => {
  let newWord = '';
  for (let index = 0; index <= word.length; index++) {
    if (
      word.charAt(index) === 'a' ||
      word.charAt(index) === 'e' ||
      word.charAt(index) === 'i' ||
      word.charAt(index) === 'o' ||
      word.charAt(index) === 'u'
    ) {
      newWord += word.charAt(index).toUpperCase();
    } else {
      newWord += word.charAt(index);
    }
  }

  console.log(newWord);
};

upperCaseVowels('casa');
console.clear();

/*- Crea una función que reciba una frase e imprim el número de veces que se repite cada vocal*/

const vowelPhrase = phrase => {
  let aCounter = 0;
  let eCounter = 0;
  let iCounter = 0;
  let oCounter = 0;
  let uCounter = 0;
  for (const letter of phrase) {
    if (letter === 'a') {
      aCounter++;
    } else if (letter === 'e') {
      eCounter++;
    } else if (letter === 'i') {
      iCounter++;
    } else if (letter === 'o') {
      oCounter++;
    } else if (letter === 'u') {
      uCounter++;
    }
  }

  console.log(
    `La a se ha repetido ${aCounter} , la e se ha repetido ${eCounter}, la i se ha repetido ${iCounter}, la o se ha repetido ${oCounter} y la u ${uCounter}`
  );
};

vowelPhrase('La casa en el campo es grande');
console.clear();

/*- Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"*/

const intercalateWord = (word1, word2) => {
  let shortest = 0;
  let newWord = '';
  if (word1.length > word2.length) {
    shortest = word2.length;
  } else {
    shortest = word1.length;
  }

  for (let i = 0; i < shortest; i++) {
    newWord += word1.charAt(i) + word2.charAt(i);
  }
  console.log(newWord);
};

intercalateWord('Carlos', 'Hola');
console.clear();

/*- Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Elefante" deberá imprimir "etnafelE"*/

const inverseOrder = word => {
  let newWord = '';
  for (let index = word.length; index >= 0; index--) {
    newWord += word.charAt(index);
  }
  console.log(newWord);
};

inverseOrder('Elefante');
