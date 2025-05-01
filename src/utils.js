import { mathOperations } from './variables.js';

const calculator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getNumber = (includeZero = true, rangeEnd = 100) => {
  if (includeZero) {
    return Math.floor(Math.random() * (rangeEnd + 1));
  }

  return Math.floor(Math.random() * rangeEnd) + 1;
};

const getGcd = (first, second) => {
  let [numA, numB] = [first, second];

  while (numA > 0 && numB > 0) {
    if (numA >= numB) {
      numA = numA % numB;
    } else {
      numB = numB % numA;
    }
  }

  return Math.max(numA, numB);
};

const getExpression = (maxOperandValue) => {
  const leftOperand = getNumber(true, maxOperandValue);
  const rightOperand = getNumber(true, maxOperandValue);
  const operator = mathOperations[getNumber(true, mathOperations.length - 1)];

  return [`${leftOperand} ${operator} ${rightOperand}`, calculator[operator](leftOperand, rightOperand)];
};

const isEven = (num) => num % 2 === 0;

const proceed = () => {
  console.log('Correct!');
};

const userLost = (userAnswer, realAnswer, name) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

const userWon = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export {
  isEven,
  getNumber,
  getExpression,
  getGcd,
  proceed,
  userLost,
  userWon,
};
