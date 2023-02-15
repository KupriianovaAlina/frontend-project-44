import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperationSymbol = (operators) => {
  const randomOperation = operators[Math.floor(Math.random() * operators.length)];
  return randomOperation;
};

const calculateOperations = (symbol, firstValue, secondValue) => {
  switch (symbol) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      return null;
  }
};

const getQuestionAndAnswer = () => {
  const operators = ['*', '+', '-'];
  const randomSymbol = getRandomOperationSymbol(operators);
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);

  const questionText = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const rightAnswer = String(calculateOperations(randomSymbol, firstNumber, secondNumber));

  return [rightAnswer, questionText];
};

export default () => {
  runGame(description, getQuestionAndAnswer);
};
