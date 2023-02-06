import getRandomNumber from '../utils.js';

export default function isEvenGame() {
  const randomNumber = getRandomNumber(100);
  const questionText = `${randomNumber}`;

  const isEven = randomNumber % 2 === 0;
  const rightAnswer = isEven ? 'yes' : 'no';

  return [rightAnswer, questionText];
}
