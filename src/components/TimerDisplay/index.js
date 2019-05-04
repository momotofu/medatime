import React from 'react'
import Digit from '../Digit'

import './index.styl'

const TimerDisplay = props => {
  const {
    secondsOnes,
    secondsTens,
    minutesOnes,
    minutesTens,
    hoursOnes,
    hoursTens,
  } = props.seconds

  const className = `TimerDisplay${
    props.timerState ? '' : ' TimerDisplayInitial'
  }`

  return (
    <div className={className}>
      <Digit digit={hoursTens} />
      <Digit digit={hoursOnes} />
      <Digit digit={minutesTens} />
      <Digit digit={minutesOnes} />
      <Digit digit={secondsTens} />
      <Digit digit={secondsOnes} />
    </div>
  )
}

export default TimerDisplay
