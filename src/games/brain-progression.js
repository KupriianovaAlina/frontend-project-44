import getRandomNumber from '../utils.js';

function makeProgression() {
  const progression = [];

  // генерируем a1 арифметической прогрессии
  progression[0] = getRandomNumber(100);

  // генерируем разность арифметической прогрессии
  const diff = getRandomNumber(10);

  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + diff;
  }

  return progression;
}

export default function gcdGame() {
  const progression = makeProgression();

  // генерируем позицию пропуска
  const emptyIndex = getRandomNumber(10) - 1;

  const rightAnswer = progression[emptyIndex];
  progression[emptyIndex] = '..';

  const questionText = `${progression.join(' ')} `;

  return [rightAnswer, questionText];
}
