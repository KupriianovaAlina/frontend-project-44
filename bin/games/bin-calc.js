import readlineSync from 'readline-sync';

export default function calcGame(name) {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber1 = Math.round(Math.random() * 100) + 1;
    const randomNumber2 = Math.round(Math.random() * 100) + 1;

    const mathOperations = [
      (n1, n2) => n1 * n2,
      (n1, n2) => n1 + n2,
      (n1, n2) => n1 - n2,
    ];

    const operators = ['*', '+', '-'];
    const randomOperation = Math.floor(Math.random() * operators.length);

    console.log(`Question: ${randomNumber1} ${operators[randomOperation]} ${randomNumber2}`);

    const userAnswer = Number(readlineSync.question('Your answer: '));
    const rightAnswer = mathOperations[randomOperation](randomNumber1, randomNumber2);

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}" . \n Let's try again, ${name}!`);
      break;
    }
  }
}
