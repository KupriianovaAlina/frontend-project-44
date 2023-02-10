/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';
import askUser from './cli.js';

const countRounds = 3;

export default function play(description, getQuestionAndAnswer) {
  console.log('Welcome to the Brain Games!');
  const userName = askUser();

  console.log(description);

  // три итерации, если ответ не верен - выход из цикла
  for (let i = 0; i < countRounds; i += 1) {
    const [rightAnswer, questionText] = getQuestionAndAnswer();

    console.log(`Question: ${questionText}`);
    const userAnswer = readlineSync.question('Your answer: ').trim();

    if (String(userAnswer) === String(rightAnswer)) {
      console.log('Correct!');
    } else {
      // ответ неверный
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}" . \n Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
