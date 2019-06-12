import React, { useContext } from 'react';
import Digit from '../Digit'
import { TimerContext } from '../Timer'

import './index.styl';

export const highlight = Object.freeze({
  seconds: 'seconds',
  minutes: 'minutes',
  hours: 'hours',
})

const TimerDisplay = (props) => {
  const { state: seconds } = useContext(TimerContext)

  const {
    highlightSection,
  } = props;

  const className = `TimerDisplay${
    seconds.initialSeconds === 0 ? ' TimerDisplayInitial' : ''
  }`

  return (
    <div className={className}>
      <Digit
        digit={seconds.hoursTens}
        isHighlighted={highlightSection === highlight.hours}
      />
      <Digit
        digit={seconds.hoursOnes}
        isHighlighted={highlightSection === highlight.hours}
      />
      <Digit
        digit={seconds.minutesTens}
        isHighlighted={highlightSection === highlight.minutes}
      />
      <Digit
        digit={seconds.minutesOnes}
        isHighlighted={highlightSection === highlight.minutes}
      />
      <Digit
        digit={seconds.secondsTens}
        isHighlighted={highlightSection === highlight.seconds}
      />
      <Digit
        digit={seconds.secondsOnes}
        isHighlighted={highlightSection === highlight.seconds}
      />
    </div>
  )
}

export default TimerDisplay