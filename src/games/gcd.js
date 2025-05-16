import { getNumber } from '../utils/expressionUtils.js'
import { gameCore } from './core.js'

const getGcd = (first, second) => {
  let [numA, numB] = [first, second]

  while (numA > 0 && numB > 0) {
    if (numA >= numB) {
      numA = numA % numB
    }
    else {
      numB = numB % numA
    }
  }
  return Math.max(numA, numB)
}

const getGcdGameValue = () => {
  const numA = getNumber(false, 50)
  const numB = getNumber(false, 50)

  const question = `${numA} ${numB}`
  const realResult = getGcd(numA, numB)

  return {
    questionTitle: question,
    realResult,
  }
}

const gameValues = {
  title: 'Find the greatest common divisor of given numbers.',
  getGameValue: getGcdGameValue,
}

export const gcdGame = iterationsCount => gameCore(iterationsCount, gameValues)
