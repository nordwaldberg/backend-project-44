import readlineSync from 'readline-sync'
import {
  greeting,
  proceed,
  userLost,
  userWon,
} from '../utils/cli-utils.js'
import { getNumber } from '../utils/expressionUtils.js'
import {
  isCorrectAnswer,
  isEven,
} from '../utils/predicates.js'
import { answerOpposites } from '../variables.js'

const iteration = () => {
  const currentNum = getNumber(false)
  const realResult = isEven(currentNum)

  console.log(`Question: ${currentNum}`)
  const userAnswer = readlineSync.question('Your answer: ')

  return [isCorrectAnswer(currentNum, realResult, userAnswer), realResult, userAnswer]
}

const game = (iterations) => {
  const username = greeting()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < iterations; i += 1) {
    const [result, realAnswer, userAnswer] = iteration()

    if (!result) {
      const correctAnswer = answerOpposites[userAnswer] ?? (realAnswer ? 'yes' : 'no')
      userLost(userAnswer, correctAnswer, username)
      return
    }

    proceed()
  }

  userWon(username)
}

export {
  game,
}
