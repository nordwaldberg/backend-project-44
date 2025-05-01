import readlineSync from 'readline-sync';
import { greeting } from '../cli-utils.js';
import {
  getGcd,
  getNumber,
  proceed,
  userLost,
  userWon,
} from '../utils.js';

const iteration = () => {
  const numA = getNumber(false, 50);
  const numB = getNumber(false, 50);
  const realResult = getGcd(numA, numB);

  console.log(`Question: ${numA} ${numB}`);
  const userAnswer = readlineSync.question('Your answer: ');

  return [realResult === Number(userAnswer), realResult, userAnswer];
};

const game = (iterations) => {
  const username = greeting();
  console.log('Find the greatest common divisor of given numbers.');

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
