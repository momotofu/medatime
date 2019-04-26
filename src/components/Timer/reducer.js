import {
  DECREMENT,
  SET_STOP_CLOCK_CALLBACK,
  RESTART_CLOCK,
  SET_INITIAL_SECONDS,
} from './actions'

const timerReducer = (state, action) => {
  switch (action.type) {
    case DECREMENT:
      console.log('state decrment')
      return { ...state, ...updateDigitsState(state.currentSeconds - 1000, state.isAtZero) }
    case SET_STOP_CLOCK_CALLBACK:
      return { ...state, stopClockCallback: action.callback }
    case RESTART_CLOCK:
      return { ...state, ...updateDigitsState(state.currentSeconds, false) }
    case SET_INITIAL_SECONDS:
      return {
        ...state,
        initalSeconds: action.seconds,
        currentSeconds: action.seconds,
      }
    default:
      return state
  }
}

function mapTimeStringToStateObject(timeString) {
  console.log('timeString: ', timeString)
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

function updateDigitsState(seconds, isAtZero) {
  if (isAtZero) return {}

  const timeString = getTimeStringFrom(seconds, Date)

  return {
    isAtZero: seconds === 0,
    currentSeconds: seconds,
    ...mapTimeStringToStateObject(timeString)
  }
}

export default timerReducer
