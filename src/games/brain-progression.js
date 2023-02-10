import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

function makeProgression() {
  const progression = [];

  // генерируем a1 арифметической прогрессии
  progression[0] = getRandomNumber(1, 100);

  // генерируем разность арифметической прогрессии
  const diff = getRandomNumber(1, 10);

  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + diff;
  }

  return progression;
}

const getQuestionAndAnswer = () => {
  const progression = makeProgression();

  // генерируем позицию пропуска
  const emptyIndex = getRandomNumber(0, 9);

  const rightAnswer = progression[emptyIndex];
  progression[emptyIndex] = '..';

  const questionText = `${progression.join(' ')} `;

  return [rightAnswer, questionText];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
