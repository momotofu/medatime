export const DECREMENT = 'DECREMENT'
export const SET_STOP_CLOCK_CALLBACK = 'SET_STOP_CLOCK_CALLBACK'
export const RESTART_CLOCK = 'RESTART_CLOCK'

export const decrementDigitsState = () => {
  return {
    type: DECREMENT,
  }
}

export const startClock = (prevClearInterval, dispatch) => {
  if (prevClearInterval) prevClearInterval()

  dispatch(
    setStopClockCallback(
      returnStopClock(clearInterval, window, setInterval(() => {
        dispatch(decrementDigitsState)
      }, 1000))
    )
  )
}

export const setStopClockCallback = (callback) => {
  return {
    type: SET_STOP_CLOCK_CALLBACK,
    callback,
  }
}

function returnStopClock(callback, context, timerId) {
  return callback.bind(context, timerId)
}
