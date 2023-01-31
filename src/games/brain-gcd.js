export default function gcdGame() {
  const randomNumber1 = Math.round(Math.random() * 100) + 1;
  const randomNumber2 = Math.round(Math.random() * 100) + 1;

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);

  let x = randomNumber1;
  let y = randomNumber2;

  while (x && y) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }

  const rightAnswer = x + y;

  return rightAnswer; св
}
