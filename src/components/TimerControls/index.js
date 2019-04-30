import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import TimerControlButton from '../TimerControlButton'
import TimerRestartButton from '../TimerRestartButton'
import TimerProgressBar from '../TimerProgressBar'
import {
  TimerContext,
  startClock,
  stopClock,
  restartClock,
} from '../Timer'

const TimerControls = () => {
  const [ isPlaying, setIsPlaying ] = useState(true)
  const { state: timerState, dispatch } = useContext(TimerContext)

  const playCallback = () => {
    setIsPlaying(true)
    startClock(
      timerState.stopClockCallback,
      dispatch
    )
  }

  const stopClockCallback = () => {
    setIsPlaying(false)
    stopClock(
      timerState.stopClockCallback,
      dispatch
    )
  }

  const onTimerControlClick = () => {
    if (isPlaying)
      stopClockCallback()
    else
      playCallback()
  }

  const restartClockCallback = () => {
    setIsPlaying(false)
    stopClock(timerState.stopClockCallback, dispatch)
    dispatch(restartClock())
  }

  return (
    <React.Fragment>
      <TimerProgressBar
        totalSeconds={timerState.initialSeconds}
        remainingSeconds={timerState.currentSeconds}
        hasTransition={isPlaying}
      />
      <TimerControlButton
        isPlaying={isPlaying}
        onClickCallback={onTimerControlClick}
      />
      <TimerRestartButton restartCallback={restartClockCallback} />
    </React.Fragment>
  )
}

export default TimerControls
