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

export {
  isEven,
  isPrime,
}
