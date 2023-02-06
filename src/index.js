/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';
import askUser from './cli.js';

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

export default function play(game, description) {
  console.log('Welcome to the Brain Games!');
  const userName = askUser();

  if (game === undefined) return undefined;
  console.log(description);

  let i = 0;
  let noMistake = true;
  // три итерации, если ответ не верен - выход из цикла
  while ((i < 3) && noMistake) {
    const [rightAnswer, questionText] = game();

    console.log(`Question: ${questionText}`);
    const userAnswer = readlineSync.question('Your answer: ').trim();

    noMistake = checkAnswer(rightAnswer, userAnswer, userName);
    i += 1;
  }

  if (noMistake) console.log(`Congratulations, ${userName}!`);
}
