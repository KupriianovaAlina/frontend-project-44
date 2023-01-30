import readlineSync from 'readline-sync';

export default function isNumberEvenGame(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');

    const isEven = randomNumber % 2 === 0;
    const rightAnswer = isEven ? 'yes' : 'no';

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}" . \n Let's try again, ${name}!`);
      break;
    }
  }
}
