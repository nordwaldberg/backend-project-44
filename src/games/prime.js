import readlineSync from 'readline-sync';
import { greeting } from '../cli-utils.js';
import {
  getNumber,
  isCorrectAnswer,
  isPrime,
  proceed,
  userLost,
  userWon,
} from '../utils.js';
import { answerOpposites } from '../variables.js';

const iteration = () => {
  const currentNum = getNumber(false);
  const realResult = isPrime(currentNum);

  console.log(`Question: ${currentNum}`);
  const userAnswer = readlineSync.question('Your answer: ');

  return [isCorrectAnswer(currentNum, realResult, userAnswer), realResult, userAnswer];
};

const game = (iterations) => {
  const username = greeting();
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');

  for (let i = 0; i < iterations; i += 1) {
    const [result, realAnswer, userAnswer] = iteration();

    if (!result) {
      const correctAnswer = answerOpposites[userAnswer] ?? (realAnswer ? 'yes' : 'no');
      userLost(userAnswer, correctAnswer, username);
      return;
    }

    proceed();
  }

  userWon(username);
};

export {
  game,
};
