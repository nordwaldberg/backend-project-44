import { getNumber } from '../utils/expressionUtils.js'
import {
  maxProgressionLength,
  maxProgressionStartValue,
  maxProgressionStep,
} from '../variables.js'
import { gameCore } from '../core.js'

const getProgression = () => {
  const progression = [getNumber(true, maxProgressionStartValue)]

  for (let i = 1; i < maxProgressionLength; i += 1) {
    progression.push(progression[i - 1] + maxProgressionStep)
  }

  return progression
}

const getProgressionWithHiddenElement = (progression) => {
  const elementToHideIndex = getNumber(true, maxProgressionLength - 1)
  const hiddenElement = progression[elementToHideIndex]

  const progressionWithHiddenElement = [...progression]
  progressionWithHiddenElement.splice(elementToHideIndex, 1, '..')

  return [progressionWithHiddenElement, hiddenElement]
}

const getProgressionGameValue = () => {
  const progression = getProgression()
  const [progressionWithHiddenNum, hiddenNum] = getProgressionWithHiddenElement(progression)

  const question = `${progressionWithHiddenNum.join(' ')}`

  return {
    questionTitle: question,
    realResult: hiddenNum,
  }
}

const gameValues = {
  title: 'What number is missing in the progression?',
  getGameValue: getProgressionGameValue,
}

export const progressionGame = iterationsCount => gameCore(iterationsCount, gameValues)
