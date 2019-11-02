import React, {
  useState,
  useEffect,
  useContext,
} from 'react'
import cn from 'classnames'

import { TimerContext } from '../Timer'

import './index.styl'

function TimerProgressBar(props) {
  const {
    remainingSeconds,
    totalSeconds,
    hasTransition,
    className
  } = props

  const { state: timerState } = useContext(TimerContext)

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
    setPercent(
      calcPercent(
        remainingSeconds + offset,
        totalSeconds
      )
    )

  }, [remainingSeconds, offset])

	return (
    <div className={cn(
      "TimerProgressBar",
      className,
    )}>
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
