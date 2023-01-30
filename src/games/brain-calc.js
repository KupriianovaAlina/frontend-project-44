export default function calcGame() {
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

  const rightAnswer = mathOperations[randomOperation](randomNumber1, randomNumber2);

  return rightAnswer;
}
