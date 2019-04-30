import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import TimerControlButton, { controlTypes } from '../TimerControlButton'
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

  const onPlayButtonClick = () => {
    if (isPlaying)
      stopClockCallback()
    else
      playCallback()
  }

  const onRestartButtonClick = () => {
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
        type={controlTypes.play}
        isPlaying={isPlaying}
        onClickCallback={onPlayButtonClick}
      />
      <TimerControlButton
        type={controlTypes.restart}
        onClickCallback={onRestartButtonClick}
      />
    </React.Fragment>
  )
}

export default TimerControls
