import {
  mathOperations,
  maxProgressionLength,
  maxProgressionStartValue,
  maxProgressionStep,
} from '../variables.js';

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

const getProgression = () => {
  const progression = [getNumber(true, maxProgressionStartValue)];

  for (let i = 1; i < maxProgressionLength; i += 1) {
    progression.push(progression[i - 1] + maxProgressionStep);
  }

  return progression;
};

const getProgressionWithHiddenElement = (progression) => {
  const elementToHideIndex = getNumber(true, maxProgressionLength - 1);
  const hiddenElement = progression[elementToHideIndex];

  const progressionWithHiddenElement = [...progression];
  progressionWithHiddenElement.splice(elementToHideIndex, 1, '..');

  return [progressionWithHiddenElement, hiddenElement];
};

const getExpression = (maxOperandValue) => {
  const leftOperand = getNumber(true, maxOperandValue);
  const rightOperand = getNumber(true, maxOperandValue);
  const operator = mathOperations[getNumber(true, mathOperations.length - 1)];

  return [`${leftOperand} ${operator} ${rightOperand}`, calculator[operator](leftOperand, rightOperand)];
};

export {
  getNumber,
  getExpression,
  getProgression,
  getProgressionWithHiddenElement,
  getGcd,
};
