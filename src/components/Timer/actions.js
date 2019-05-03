export const DECREMENT = 'DECREMENT'
export const SET_STOP_CLOCK_CALLBACK = 'SET_STOP_CLOCK_CALLBACK'
export const RESTART_CLOCK = 'RESTART_CLOCK'
export const SET_INITIAL_SECONDS = 'SET_INITIAL_SECONDS'
export const SET_CURRENT_SECONDS = 'SET_CURRENT_SECONDS'

export const decrementDigitsState = () => {
  return {
    type: DECREMENT,
  }
}

export const restartClock = () => {
  return {
    type: RESTART_CLOCK,
  }
}

export const setInitialSeconds = seconds => {
  return {
    type: SET_INITIAL_SECONDS,
    seconds,
  }
}

export const setCurrentSeconds = seconds => {
  return {
    type: SET_CURRENT_SECONDS,
    seconds,
  }
}

export const startClock = (prevClearInterval, dispatch) => {
  if (prevClearInterval) prevClearInterval()

  dispatch(
    setStopClockCallback(
      returnStopClock(
        clearInterval,
        window,
        setInterval(() => {
          dispatch(decrementDigitsState())
        }, 1000)
      )
    )
  )
}

export const stopClock = (prevClearInterval, dispatch) => {
  if (prevClearInterval) prevClearInterval()

  dispatch(setStopClockCallback(null))
}

function setStopClockCallback(callback) {
  return {
    type: SET_STOP_CLOCK_CALLBACK,
    callback,
  }
}

function returnStopClock(callback, context, timerId) {
  return callback.bind(context, timerId)
}
