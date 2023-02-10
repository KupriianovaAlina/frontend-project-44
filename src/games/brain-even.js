import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(1, 100);
  const questionText = `${randomNumber}`;

  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [rightAnswer, questionText];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
