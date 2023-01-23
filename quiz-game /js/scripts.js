const gameQuestion = document.getElementById('game-question');
const answersContainer = document.getElementById('answers');
const startButton = document.getElementById('start-button');
const timerElement = document.getElementById('remaining-time');
const resetButton = document.getElementById('reset-button');

const QUESTIONS = {
  programming: [
    {
      question: '¿Cuántos tipos de bucles hay en programación?',
      answers: {
        options: ['1', '2', '3', '50'],
        correctAnswer: 1
      },
      theme: 'programming',
      hasAnswered: false
    },
    {
      question: '¿Cuántos lenguajes de programación entienden los navegadores?',
      answers: {
        options: ['3', '2', '1', '20'],
        correctAnswer: 2
      },
      theme: 'programming',
      hasAnswered: false
    }
  ],
  math: [
    {
      question: '¿Cuánto es 5 x 8?',
      answers: {
        options: ['40', '25', '30', '50'],
        correctAnswer: 0
      },
      theme: 'math',
      hasAnswered: false
    },
    {
      question: '¿Cuánto es la cuarta parte de la tercera parte?',
      answers: {
        options: ['Un doceavo', 'Un séptimo', '3/4 partes', '4/6 partes'],
        correctAnswer: 0
      },
      theme: 'math',
      hasAnswered: false
    }
  ],
  science: [
    {
      question: '¿En qué dirección apunta la aguja de una brújula?',
      answers: {
        options: ['Sur', 'Este', 'Oeste', 'Norte'],
        correctAnswer: 3
      },
      theme: 'science',
      hasAnswered: false
    },
    {
      question: '¿Qué mineral se encuentra en una solución salina?',
      answers: {
        options: ['Potasio', 'Calcio', 'Sodio', 'Magnesio'],
        correctAnswer: 2
      },
      theme: 'science',
      hasAnswered: false
    },
    {
      question: '¿Cuántos huesos tiene un humano adulto?',
      answers: {
        options: ['412', '287', '306', '328'],
        correctAnswer: 2
      },
      theme: 'science',
      hasAnswered: false
    }
  ],
  history: [
    {
      question: '¿En qué año piso el hombre la luna por primera vez?',
      answers: {
        options: ['1830', '1969', '2001', 'Fue un montaje'],
        correctAnswer: 1
      },
      theme: 'history',
      hasAnswered: false
    },
    {
      question: '¿Dónde se inventó la pólvora?',
      answers: {
        options: ['China', 'Francia', 'EEUU', 'Italia'],
        correctAnswer: 0
      },
      theme: 'history',
      hasAnswered: false
    },
    {
      question: '¿Dónde originaron los juegos olímpicos?',
      answers: {
        options: ['Cuenca', 'Grecia', 'Alemania', 'Dublin'],
        correctAnswer: 1
      },
      theme: 'history',
      hasAnswered: false
    }
  ]
};

const allQuestions = [
  ...QUESTIONS.programming,
  ...QUESTIONS.math,
  ...QUESTIONS.science,
  ...QUESTIONS.history
];

const score = {
  programming: 0,
  math: 0,
  science: 0,
  history: 0
};

let questionsFiltered;

const questionsAnswered = () => {
  return allQuestions.filter(question => !question.hasAnswered);
};

const randomNumber = () => {
  return Math.floor(Math.random() * questionsFiltered.length);
};

let question;

const printRandomQuestion = () => {
  answersContainer.innerHTML = '';
  questionsFiltered = questionsAnswered();
  question = questionsFiltered[randomNumber()];
  gameQuestion.textContent = question.question;
  const fragment = document.createDocumentFragment();
  for (let index = 0; index <= question.answers.options.length - 1; index++) {
    const newAnswer = document.createElement('div');
    newAnswer.classList.add('answer');
    newAnswer.dataset.option = index;
    newAnswer.textContent = question.answers.options[index];
    fragment.append(newAnswer);
  }
  answersContainer.append(fragment);

  setRemainingTime();
};

const themePointsPrint = () => {
  score[question.theme]++;
  document.getElementById(`${question.theme}-score`).textContent =
    score[question.theme];
};

const printResult = () => {
  clearInterval(intervalContent);
  timerElement.textContent = '';
  let result = Object.values(score).reduce((acc, current) => acc + current);
  gameQuestion.textContent = 'TERMINASTE';
  answersContainer.innerHTML = '';
  const results = document.createElement('div');
  results.textContent = `Has acertado ${result} preguntas de ${allQuestions.length}.`;
  gameQuestion.append(results);
  results.classList.add('result');
};

const setRemainingTime = () => {
  let remainingTime = 5;
  intervalContent = setInterval(() => {
    remainingTime -= 0.1;
    timerElement.textContent = remainingTime.toFixed(2);
    if (remainingTime < 0.1) {
      clearInterval(intervalContent);
      printRandomQuestion();
    }
  }, 100);
};

const resetGame = () => {
  allQuestions.forEach(question => (question.hasAnswered = false));
  for (const key in score) {
    score[key] = 0;
    document.getElementById(`${key}-score`).textContent = 0;
  }
  printRandomQuestion();
  resetButton.hidden = true;
};

startButton.addEventListener('click', () => {
  startButton.style.display = 'none';
  printRandomQuestion();
});

answersContainer.addEventListener('click', e => {
  if (Number(e.target.dataset.option) === question.answers.correctAnswer) {
    themePointsPrint();
  }
  question.hasAnswered = true;
  clearInterval(intervalContent);
  if (questionsFiltered.length === 1) {
    printResult();
    resetButton.hidden = false;
  } else {
    printRandomQuestion();
  }
});

resetButton.addEventListener('click', () => {
  resetGame();
});

resetButton.hidden = true;
