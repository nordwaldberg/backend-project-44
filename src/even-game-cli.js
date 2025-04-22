import readlineSync from 'readline-sync';
import { greeting } from './cli-utils.js';
import { getNumber, isEven } from './utils.js';

const answerOpposites = {
  yes: '\'no\'',
  no: '\'yes\'',
};

const isCorrectAnswer = (num, realAnswer, answer) => {
  if ((realAnswer && answer === 'yes') || (!realAnswer && answer === 'no')) {
    return true;
  }

  return false;
};

const proceed = () => {
  console.log('Correct!');
};

const userLost = (userAnswer, realAnswer, name) => {
  const correctAnswer = answerOpposites[userAnswer] ?? (realAnswer ? '\'yes\'' : '\'no\'');

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${name}!`);
};

const userWon = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const iteration = () => {
  const currentNum = getNumber();
  const realResult = isEven(currentNum);

  console.log(`Question: ${currentNum}`);
  const userAnswer = readlineSync.question('Your answer: ');

  return [isCorrectAnswer(currentNum, realResult, userAnswer), realResult, userAnswer];
};

const game = (iterations) => {
  const username = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

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
