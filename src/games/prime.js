import {
  getNumber,
  getYesOrNoFromBoolean,
} from '../utils/expressionUtils.js'
import { isPrime } from '../utils/predicates.js'
import { gameCore } from './core.js'

const getPrimeGameValue = () => {
  const currentNum = getNumber(false)

  const question = `${currentNum}`
  const realResult = getYesOrNoFromBoolean(isPrime(currentNum))

  return {
    questionTitle: question,
    realResult,
  }
}

const gameValues = {
  title: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getGameValue: getPrimeGameValue,
}

export const primeGame = iterationsCount => gameCore(iterationsCount, gameValues)
