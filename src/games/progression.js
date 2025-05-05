import readlineSync from 'readline-sync';
import {
  greeting,
  proceed,
  userLost,
  userWon,
} from '../utils/cli-utils.js';
import {
  getProgression,
  getProgressionWithHiddenElement,
} from '../utils/expressionUtils.js';

const iteration = () => {
  const progression = getProgression();
  const [progressionWithHiddenNum, hiddenNum] = getProgressionWithHiddenElement(progression);

  console.log(`Question: ${progressionWithHiddenNum.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');

  return [hiddenNum === Number(userAnswer), hiddenNum, userAnswer];
};

const game = (iterations) => {
  const username = greeting();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < iterations; i += 1) {
    const [result, realAnswer, userAnswer] = iteration();

    if (!result) {
      userLost(userAnswer, realAnswer, username);
      return;
    }

    proceed();
  }

  userWon(username);
};

export {
  game,
};
