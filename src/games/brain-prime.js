import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let sumOfDividers = 0;

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) sumOfDividers += i;
  }

  return Boolean(sumOfDividers === number + 1);
};

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(1, 100);
  const questionText = `${randomNumber}`;

  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [rightAnswer, questionText];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
