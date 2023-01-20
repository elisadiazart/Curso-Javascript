/* - Crea una función que sea capaz de multiplicar cada número de un array por 2 e imprimir por consola el resultado de cada multiplicación. Crea otra función que reciba como parámetro un array de 10 números y la función anterior. Entre las 2 deben imprimir por consola el array con cada número multiplicado por dos. */

const multiplyx2 = array => {
  for (number of array) {
    console.log(number * 2);
  }
};

const sumx2 = (array10, cb) => {
  cb(array10);
};

sumx2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], multiplyx2);
console.clear();

/*- Crea una función que sea capaz de multiplicar cada número de un array por 3 y devolver un array nuevo relleno con el resultado de cada multiplicación. Crea otra función que reciba como parámetro un array de 10 números y la función anterior. Entre las 2 deben imprimir por consola el array con cada número multiplicado por tres.*/

const multiplyx3 = array => {
  let newArray = [];
  for (number of array) {
    newArray.push(number * 3);
  }
  console.log(newArray);
};


const sumx3 = (array10, cb) => {
  let newArray = [];
  cb(array10);
  
};

sumx3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], multiplyx3)
console.clear();



/*- Crea una función que sea capaz de filtrar los números pares e impares y devolver un array nuevo relleno sólo con los pares. Crea otra función que reciba como parámetro un array de 10 números y la función anterior. Entre las 2 deben imprimir por consola el array con los números pares.*/


const evenNumbers = array =>{
  let evenNumbersArray = []
  for (number of array){
    if (number  % 2 === 0){
      evenNumbersArray.push(number)
    }
  }
  console.log(evenNumbersArray)
}

const evenNumbers10 = (array10, cb) => {
  let newArray = [];
  cb(array10);
  
};

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], evenNumbers)