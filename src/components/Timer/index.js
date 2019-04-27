import React, {
  useReducer,
} from 'react'
import PropTypes from 'prop-types'

import timerReducer from './reducer'

export const TimerContext = React.createContext(null)

const TimerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(timerReducer, {
    currentSeconds: 0,
    initialSeconds: 0,
    secondsOnes: 0,
    secondsTens: 0,
    minutesOnes: 0,
    minutesTens: 0,
    hoursOnes: 0,
    hoursTens: 0,
    isAtZero: true,
  })

  return (
    <TimerContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </TimerContext.Provider>
  )
}

export default TimerProvider
export * from './actions'
