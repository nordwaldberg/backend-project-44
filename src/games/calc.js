import { getExpression } from '../utils/expressionUtils.js'
import { gameCore } from './core.js'

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
