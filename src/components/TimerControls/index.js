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
  const { state, dispatch } = useContext(TimerContext)

  const playCallback = startClock.bind(
    null,
    state.clearInterval,
    dispatch
  )

  const stopClockCallback = stopClock.bind(
    null,
    state.stopClockCallback,
    dispatch
  )

  const restartClockCallback = dispatch.bind(null, restartClock())

  return (
    <React.Fragment>
      <TimerProgressBar
        totalSeconds={state.initalSeconds}
        remainingSeconds={state.totalSeconds}
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
