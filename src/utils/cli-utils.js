import readlineSync from 'readline-sync'

const greeting = () => {
  console.log('Welcome to the Brain Games!')
  const username = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${username}!`)
  return username
}

const proceed = () => {
  console.log('Correct!')
}

const userLost = (userAnswer, realAnswer, name) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`)
  console.log(`Let's try again, ${name}!`)
}

const userWon = (name) => {
  console.log(`Congratulations, ${name}!`)
}

export {
  greeting,
  proceed,
  userLost,
  userWon,
}
