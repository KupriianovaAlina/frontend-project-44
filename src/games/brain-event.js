export default function isEvenGame() {
  const randomNumber = Math.round(Math.random() * 100) + 1;
  console.log(`Question: ${randomNumber}`);

  const isEven = randomNumber % 2 === 0;
  const rightAnswer = isEven ? 'yes' : 'no';

  return rightAnswer;
}
