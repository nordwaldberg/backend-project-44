import {
  mathOperations,
} from '../variables.js'

const calculator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const getNumber = (includeZero = true, rangeEnd = 100) => {
  if (includeZero) {
    return Math.floor(Math.random() * (rangeEnd + 1))
  }

  return Math.floor(Math.random() * rangeEnd) + 1
}

const getExpression = (maxOperandValue) => {
  const leftOperand = getNumber(true, maxOperandValue)
  const rightOperand = getNumber(true, maxOperandValue)
  const operator = mathOperations[getNumber(true, mathOperations.length - 1)]

  return [`${leftOperand} ${operator} ${rightOperand}`, calculator[operator](leftOperand, rightOperand)]
}

const getYesOrNoFromBoolean = (bool) => {
  return bool ? 'yes' : 'no'
}

export {
  getNumber,
  getExpression,
  getYesOrNoFromBoolean,
}
