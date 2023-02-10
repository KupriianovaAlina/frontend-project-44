import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number, sumOfDividers) => sumOfDividers === number + 1;

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(1, 100);
  const questionText = `${randomNumber}`;

  let sumOfDividers = 0;

  for (let i = 1; i <= randomNumber; i += 1) {
    if (randomNumber % i === 0) sumOfDividers += i;
  }

  const rightAnswer = isPrime(randomNumber, sumOfDividers) ? 'yes' : 'no';

  return [rightAnswer, questionText];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
