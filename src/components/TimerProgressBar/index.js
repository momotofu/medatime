import React, {
  useState,
  useEffect,
  useRef,
  useContext,
} from 'react'
import cn from 'classnames'

import { TimerContext } from '../Timer'

import './index.styl'

function TimerProgressBar(props) {
  const {
    remainingSeconds,
    totalSeconds,
    hasTransition
  } = props

  const { state: timerState, dispatch } = useContext(TimerContext)

  //const prevRemainingSeconds = useRef(null)
  //const prevOffset = useRef(null)
  const [offset, setOffset] = useState(0)
  const [percent, setPercent] = useState(
    calcPercent(
      remainingSeconds,
      totalSeconds
    )
  )

  useEffect(() => {
    if (timerState.stopClockCallback) {
      setOffset(-1000)
    } else {
      setOffset(0)
    }

  }, [timerState.stopClockCallback])

  useEffect(() => {
    //if (prevRemainingSeconds.current === remainingSeconds
      //&& prevOffset.current === -1000
      //&& offset === 0) {
      //return
    //}

    //prevRemainingSeconds.current = remainingSeconds
    //prevOffset.current = offset

    setPercent(
      calcPercent(
        remainingSeconds + offset,
        totalSeconds
      )
    )

  }, [remainingSeconds, offset])

  //console.log('inital remaining seconds: ', remainingSeconds)

	return (
		<div className="TimerProgressBar">
      <div
        className={cn(
          'TimerProgressBar-percentage',
        { 'TimerProgressBar-percentage-no-transition' : !hasTransition }
        )}
        style={{ width: `${percent}%` }}
      />
		</div>
	)
}

export default TimerProgressBar

function calcPercent(remainingSeconds, totalSeconds) {
  return remainingSeconds * 100 / totalSeconds
}
