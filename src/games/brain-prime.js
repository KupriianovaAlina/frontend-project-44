export default function primeGame() {
  const randomNumber = Math.round(Math.random() * 100) + 1;
  console.log(`Question: ${randomNumber}`);

  let sumOfDividers = 0;

  for (let i = 1; i <= randomNumber; i += 1) {
    if (randomNumber % i === 0) sumOfDividers += i;
  }

  const isPrime = sumOfDividers === randomNumber + 1;
  const rightAnswer = isPrime ? 'yes' : 'no';

  return rightAnswer;
}
