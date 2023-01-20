const teacher = {
  info: {
    name: 'Dorian',
    age: 25,
    courses: [
      {
        title: 'HTML',
        duration: 9.5
      },
      {
        title: 'CSS',
        duration: 20.8
      }
    ]
  },

  portfolio: {
    experience: 7,
    technologies: ['HTML', 'CSS', 'JS']
  },

  sayHello: name => console.log(`Hola ${name}, soy Dorian!`)
};

console.log(teacher.info.name);
console.log(teacher.info.age);
console.log(teacher.info.courses[0].title);
console.log(teacher.info.courses[0].duration);
console.log(teacher.info.courses[1].title);
console.log(teacher.info.courses[1].duration);
console.log(teacher.portfolio.experience);
console.log(teacher.portfolio.technologies[0]);
console.log(teacher.portfolio.technologies[1]);
console.log(teacher.portfolio.technologies[2]);
teacher.sayHello('Elisa');
console.clear();

/*Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.

Nota: la notación ```javascript, sólo sirve para que este archivo mantenga el formato, ignorad esa línea.*/

const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  data2: {
    data3: {
      numbersPlus2: []
    },
    data4: {
      numbersDouble: []
    }
  },
  data5: {
    numbersDividedBy2: []
  },
  data6: {
    onlyEven: [],
    onlyOdd: []
  }
};

for (const item of data.numbers) {
  data.data2.data3.numbersPlus2.push(item + 2);
}

console.log(data.data2.data3.numbersPlus2);

for (const item of data.numbers) {
  data.data2.data4.numbersDouble.push(item * 2);
}

console.log(data.data2.data4.numbersDouble);

for (const item of data.numbers) {
  data.data5.numbersDividedBy2.push(item / 2);
}

console.log(data.data5.numbersDividedBy2);

for (const item of data.numbers) {
  if (item % 2 === 0) {
    data.data6.onlyEven.push(item);
  } else {
    data.data6.onlyOdd.push(item);
  }
}

console.log(data.data6.onlyEven);
console.log(data.data6.onlyOdd);
