import readlineSync from 'readline-sync'
import {
  greeting,
  proceed,
  userLost,
  userWon,
} from '../utils/cli-utils.js'

const iteration = ({ questionTitle, realResult }) => {
  console.log(`Question: ${questionTitle}`)
  const userAnswer = readlineSync.question('Your answer: ')

  return [String(realResult) === String(userAnswer), realResult, userAnswer]
}

const gameCore = (iterationsCount, iterationValues) => {
  const username = greeting()
  console.log(iterationValues.title)

  for (let i = 0; i < iterationsCount; i += 1) {
    const [result, realAnswer, userAnswer] = iteration(iterationValues.getGameValue())

    if (!result) {
      userLost(userAnswer, realAnswer, username)
      return
    }

    proceed()
  }

  userWon(username)
}

export {
  gameCore,
}
