import {
  getNumber,
  getYesOrNoFromBoolean,
} from '../utils/expressionUtils.js'
import { gameCore } from '../core.js'

const isPrime = (num) => {
  if (num <= 1) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

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
