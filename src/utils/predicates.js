const isEven = num => num % 2 === 0

const isPrime = (num) => {
  if (num <= 1) {
    return false
  }

  for (let i = 2; i < Math.floor(num / 2); i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

const isCorrectAnswer = (num, realAnswer, answer) => {
  if ((realAnswer && answer === 'yes') || (!realAnswer && answer === 'no')) {
    return true
  }

  return false
}

export {
  isEven,
  isPrime,
  isCorrectAnswer,
}
