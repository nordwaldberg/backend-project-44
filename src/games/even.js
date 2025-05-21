import {
  getNumber,
  getYesOrNoFromBoolean,
} from '../utils/expressionUtils.js'
import { gameCore } from '../core.js'

const isEven = num => num % 2 === 0

const getEvenGameValue = () => {
  const currentNum = getNumber(false)

  const question = `${currentNum}`
  const realResult = getYesOrNoFromBoolean(isEven(currentNum))

  return {
    questionTitle: question,
    realResult,
  }
}

const gameValues = {
  title: 'Answer "yes" if the number is even, otherwise answer "no".',
  getGameValue: getEvenGameValue,
}

export const evenGame = iterationsCount => gameCore(iterationsCount, gameValues)
