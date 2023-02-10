import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (randomNumber1, randomNumber2) => {
  let x = randomNumber1;
  let y = randomNumber2;

  while (x && y) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }

  return x + y;
};

const getQuestionAndAnswer = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);

  const questionText = `${randomNumber1} ${randomNumber2}`;

  const rightAnswer = getGcd(randomNumber1, randomNumber2);
  return [rightAnswer, questionText];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
