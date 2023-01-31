export default function gcdGame() {
  const progression = [];

  // генерируем a1 арифметической прогрессии
  progression[0] = Math.round(Math.random() * 100) + 1;
  // генерируем разность арифметической прогрессии
  const diff = Math.round(Math.random() * 10) + 1;

  for (let i = 1; i < 11; i += 1) {
    progression[i] = progression[i - 1] + diff;
  }

  // генерируем позицию пропуска
  const emptyIndex = Math.round(Math.random() * 10);

  const rightAnswer = progression[emptyIndex];
  progression[emptyIndex] = '...';

  console.log(`Question: ${progression.join(' ')} `);

  return rightAnswer;
}
