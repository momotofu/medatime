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
  const [
    isProgressBarTransitioning,
    setIsProgressBarTransitioning
  ] = useState(true)

  const { state: timerState, dispatch } = useContext(TimerContext)

  const playCallback = startClock.bind(
    null,
    timerState.stopClockCallback,
    dispatch
  )

  const stopClockCallback = stopClock.bind(
    null,
    timerState.stopClockCallback,
    dispatch
  )

  const restartClockCallback = () => {
    setIsProgressBarTransitioning(false)
    stopClock(timerState.stopClockCallback, dispatch)
    dispatch(restartClock())
  }

  return (
    <React.Fragment>
      <TimerProgressBar
        totalSeconds={timerState.initialSeconds}
        remainingSeconds={timerState.currentSeconds}
        hasTransition={isProgressBarTransitioning}
      />
      <TimerControlButton
        isPlay={timerState.stopClockCallback === null}
        playCallback={playCallback}
        pauseCallback={stopClockCallback}
      />
      <TimerRestartButton restartCallback={restartClockCallback} />
    </React.Fragment>
  )
}

export default TimerControls
