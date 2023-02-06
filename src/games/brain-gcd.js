import getRandomNumber from '../utils.js';

function getGcd(randomNumber1, randomNumber2) {
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
}

export default function gcdGame() {
  const randomNumber1 = getRandomNumber(100);
  const randomNumber2 = getRandomNumber(100);

  const questionText = `${randomNumber1} ${randomNumber2}`;

  const rightAnswer = getGcd(randomNumber1, randomNumber2);
  return [rightAnswer, questionText];
}
