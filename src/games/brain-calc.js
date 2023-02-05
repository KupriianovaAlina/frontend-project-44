import getRandomNumber from '../utils.js';

export default function calcGame() {
  const randomNumber1 = getRandomNumber(100);
  const randomNumber2 = getRandomNumber(100);

  const mathOperations = [
    (n1, n2) => n1 * n2,
    (n1, n2) => n1 + n2,
    (n1, n2) => n1 - n2,
  ];

  const operators = ['*', '+', '-'];
  const randomOperation = Math.floor(Math.random() * operators.length);

  console.log(`Question: ${randomNumber1} ${operators[randomOperation]} ${randomNumber2}`);

  const rightAnswer = mathOperations[randomOperation](randomNumber1, randomNumber2);

  return rightAnswer;
}
