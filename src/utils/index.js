const numbersDict = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred:      100,
  thousand:     1000,
  million:      1000000,
  billion:      1000000000,
  trillion:     1000000000000,
  quadrillion:  1000000000000000,
  quintillion:  1000000000000000000,
  sextillion:   1000000000000000000000,
  septillion:   1000000000000000000000000,
  octillion:    1000000000000000000000000000,
  nonillion:    1000000000000000000000000000000,
  decillion:    1000000000000000000000000000000000,
}

const timeUnitsDict = {
  second: {
    captured: false,
    value: 1000
  },
  minute: {
    captured: false,
    value: 60000
  },
  hour: {
    captured: false,
    value: 3600000
  }
}

const reduceListToTimeUnits = (list, timeUnitsDict, numbersDict) => {
  let shouldBreak = false
  return list.reduce((accumulator, word, currentIndex) => {
    if (shouldBreak) {
      return accumulator
    }

    if (word in timeUnitsDict && !timeUnitsDict[word].captured) {
      shouldBreak = true
      if (word === 'second') {
        return accumulator * timeUnitsDict[word].value
      }

      const nextTimeUnitsDict = Object.assign({}, timeUnitsDict)
      nextTimeUnitsDict[word].captured = true
      const nextList = list.slice(currentIndex + 1, list.length)

      return accumulator * timeUnitsDict[word].value + reduceListToTimeUnits(
        nextList,
        nextTimeUnitsDict,
        numbersDict
      )
    }

    return accumulator + numbersDict[word]
  }, 0)
}

const createMapTextToSeconds = (timeUntisDict, numbersDict, reducer) => {
  return (inputString) => {
    const wordList = inputString.split(/\s+/)
    return reducer(wordList, timeUnitsDict, numbersDict)
  }
}

export const mapTextToSeconds = createMapTextToSeconds(
  timeUnitsDict,
  numbersDict,
  reduceListToTimeUnits
)
