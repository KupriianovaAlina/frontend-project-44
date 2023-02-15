/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';

const countRounds = 3;

export default function play(description, getQuestionAndAnswer) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // нам нужна эта проверка, потому что при вызове brain-games здесь программа должна закончится
  if (description === undefined) return;
  console.log(description);

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
