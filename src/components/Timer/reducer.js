import {
  DECREMENT,
  SET_STOP_CLOCK_CALLBACK,
  RESTART_CLOCK,
  SET_INITIAL_SECONDS,
} from './actions'

export default timerReducer = (state, action) => {
  switch (action.type) {
    case DECREMENT:
      return { ...state, ...updateDigitState(state.currentSeconds - 1) }
    case SET_STOP_CLOCK_CALLBACK:
      return { ...state, stopClockCallback: action.callback }
    case RESTART_CLOCK:
      return { ...state, ...updateDigitState(state.initialTime) }
    case SET_INITIAL_SECONDS:
      return {
        ...state,
        initalSeconds: action.seconds,
        totalSeconds: action.seconds,
      }
    default:
      return state
  }
}

function mapTimeStringToStateObject(timeString) {
  const seconds = timeString.substr(6,2)
  const minutes = timeString.substr(3,2)
  const hours = timeString.substr(0,2)

  return {
    secondsOnes: Number(seconds[1]),
    secondsTens: Number(seconds[0]),
    minutesOnes: Number(minutes[1]),
    minutesTens: Number(minutes[0]),
    hoursOnes: Number(hours[1]),
    hoursTens: Number(hours[0])
  }
}

function getTimeStringFrom(seconds, dateObject) {
  const date = new Date()
  date.setHours(0, 0, 0, 0)
  date.setMilliseconds(seconds)

  return date.toTimeString().substr(0,8)
}

function updateDigitsState(state) {
  const { currentSeconds, isAtZero } = state

  if (isAtZero) return

  const timeString = getTimeStringFrom(currentSeconds, Date)
  const isOutOfTime = checkTime(currentSeconds)

  if (isOutOfTime)
    return { isAtZero: true, ...mapTimeStringToStateObject(timeString) }

  return mapTimeStringToStateObject(timeString)
}

function checkTime(time) {
  return time === 0 || time < 0
}
