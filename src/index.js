/* eslint-disable import/prefer-default-export */
import readlineSync from 'readline-sync';
import askUser from './cli.js';
import isEvenGame from './games/brain-event.js';
import calcGame from './games/brain-calc.js';
import gcdGame from './games/brain-gcd.js';

function checkAnswer(rightAnswer, userAnswer, userName) {
  // ответ верный
  if (String(userAnswer) === String(rightAnswer)) {
    console.log('Correct!');
    return true;
  }
  // ответ невернвый
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}" . \n Let's try again, ${userName}!`);
  return false;
}

export const play = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const userName = askUser();

  let game;

  switch (gameName) {
    case 'calc':
      console.log('What is the result of the expression?');
      game = calcGame;
      break;
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      game = isEvenGame;
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      game = gcdGame;
      break;
    default:
      return undefined;
  }

  let i = 0;
  let noMistake = true;
  // три итерации, если ответ не верен - выход из цикла
  while ((i < 3) && noMistake) {
    const rightAnswer = game();
    const userAnswer = readlineSync.question('Your answer: ').trim();

    noMistake = checkAnswer(rightAnswer, userAnswer, userName);
    i += 1;
  }

  if (noMistake) console.log(`Congratulations, ${userName}!`);
};
