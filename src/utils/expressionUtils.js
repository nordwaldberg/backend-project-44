const getNumber = (includeZero = true, rangeEnd = 100) => {
  if (includeZero) {
    return Math.floor(Math.random() * (rangeEnd + 1))
  }

  return Math.floor(Math.random() * rangeEnd) + 1
}

const getYesOrNoFromBoolean = (bool) => {
  return bool ? 'yes' : 'no'
}

export {
  getNumber,
  getYesOrNoFromBoolean,
}
