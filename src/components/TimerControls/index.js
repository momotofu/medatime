import React, { useContext } from 'react'
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

  const restartClockCallback = dispatch.bind(null, restartClock())

  return (
    <React.Fragment>
      <TimerProgressBar
        totalSeconds={timerState.initialSeconds}
        remainingSeconds={timerState.currentSeconds}
      />
      <TimerControlButton
        isPlay
        playCallback={playCallback}
        pauseCallback={stopClockCallback}
      />
      <TimerRestartButton restartCallback={restartClockCallback} />
    </React.Fragment>
  )
}

export default TimerControls
