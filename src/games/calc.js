import { getNumber } from '../utils/expressionUtils.js'
import { gameCore } from '../core.js'
import { mathOperations } from '../variables.js'

const calculator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
}

const getExpression = (maxOperandValue) => {
  const leftOperand = getNumber(true, maxOperandValue)
  const rightOperand = getNumber(true, maxOperandValue)
  const operator = mathOperations[getNumber(true, mathOperations.length - 1)]

  return [`${leftOperand} ${operator} ${rightOperand}`, calculator[operator](leftOperand, rightOperand)]
}

const getCalcGameValue = () => {
  const [currentExpression, realResult] = getExpression(20)

  const question = `${currentExpression}`

  return {
    questionTitle: question,
    realResult: realResult,
  }
}

const gameValues = {
  title: 'What is the result of the expression?',
  getGameValue: getCalcGameValue,
}

export const calcGame = iterationsCount => gameCore(iterationsCount, gameValues)
