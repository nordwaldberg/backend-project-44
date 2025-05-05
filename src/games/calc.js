import readlineSync from 'readline-sync'
import {
  greeting,
  proceed,
  userLost,
  userWon,
} from '../utils/cli-utils.js'
import { getExpression } from '../utils/expressionUtils.js'

const iteration = () => {
  const [currentExpression, realResult] = getExpression(20)

  console.log(`Question: ${currentExpression}`)
  const userAnswer = readlineSync.question('Your answer: ')

  return [realResult === Number(userAnswer), realResult, userAnswer]
}

const game = (iterations) => {
  const username = greeting()
  console.log('What is the result of the expression?')

  for (let i = 0; i < iterations; i += 1) {
    const [result, realAnswer, userAnswer] = iteration()

    if (!result) {
      userLost(userAnswer, realAnswer, username)
      return
    }

    proceed()
  }

  userWon(username)
}

export {
  game,
}
