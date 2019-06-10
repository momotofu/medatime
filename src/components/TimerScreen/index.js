import React, {
  useState,
  useEffect,
  useContext,
} from 'react'
import PropTypes from 'prop-types'

// Imported components
import TextInputField from '../TextInputField'
import Timer from '../Timer'
import RadialControl from '../RadialControl'
import NavButton from '../NavButton'
import TimerControls from '../TimerControls'
import TimerDisplay from '../TimerDisplay'
import QuoteDisplay from '../QuoteDisplay'
import {
  TimerContext,
  setInitialSeconds,
  setCurrentSeconds,
  startClock,
  stopClock,
} from '../Timer'
import { highlight } from '../TimerDisplay'

// CSS
import './index.styl'

const TIME_ORDINALS = Object.freeze({
  seconds: 'seconds',
  minutes: 'minutes',
  hours: 'hours',
})

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60

const TimerScreen = (props) => {
  const { state: timerState, dispatch } = useContext(TimerContext)
  const [isTimerStarted, setIsTimerStarted] = useState(false)
  const [highlightedSection, setHighlightedSection] = useState(null)

  const inputKeydownCallback = (currentInputTime) => {
    dispatch(setCurrentSeconds(currentInputTime))
	}

  const transitionToTimer = () => {
		setIsTimerStarted(true)
    startClock(null, dispatch)
    dispatch(setInitialSeconds(timerState.currentSeconds))
  }

  const toggleTimerScreen = () => {
    if (isTimerStarted) {
      stopClock(timerState.stopClockCallback, dispatch)
      dispatch(setInitialSeconds(0))
      dispatch(setCurrentSeconds(0))
      setIsTimerStarted(false)

    } else {
      transitionToTimer()
    }
	}

  const transformPercentageToSeconds = (
    percentage,
    ordinal,
    ordinals,
    cap
  ) => {
    const decimalPercentage = percentage / 100

    switch (ordinal) {
      case ordinals.seconds:
        return Math.round(cap(decimalPercentage * 60, 59) * SECOND)

      case ordinals.minutes:
        return Math.ceil(cap(decimalPercentage * 60, 59)) * MINUTE

      case ordinals.hours:
        return Math.ceil(cap(decimalPercentage * 24, 23)) * HOUR
    }
  }

  const capSeconds = (seconds, cap) => {
    if (seconds > cap)
      return cap
    return seconds
  }

  const secondsRadialOnChange = (percentage) => {
    const { currentSeconds } = timerState
    const seconds = transformPercentageToSeconds(
      percentage,
      TIME_ORDINALS.seconds,
      TIME_ORDINALS,
      capSeconds,
    )

    //zero out seconds then add new seconds
    const remainingSeconds = currentSeconds % MINUTE
    const newSeconds = currentSeconds - remainingSeconds + seconds

    dispatch(setCurrentSeconds(newSeconds))
  }

  const minutesRadialOnChange = (percentage) => {
    const { currentSeconds } = timerState
    const seconds = transformPercentageToSeconds(
      percentage,
      TIME_ORDINALS.minutes,
      TIME_ORDINALS,
      capSeconds,
    )

    // zero out minutes then add minutes back
    const remainingSeconds = currentSeconds % MINUTE
    const remainingMinutes = (currentSeconds - remainingSeconds) % HOUR
    const newSeconds = currentSeconds - remainingMinutes + seconds

    dispatch(setCurrentSeconds(newSeconds))
  }

  const hoursRadialOnChange = (percentage) => {
    const { currentSeconds } = timerState
    const seconds = transformPercentageToSeconds(
      percentage,
      TIME_ORDINALS.hours,
      TIME_ORDINALS,
      capSeconds,
    )

    // zero out minutes then add minutes back
    const remainingSeconds = currentSeconds % MINUTE
    const remainingMinutes = (currentSeconds - remainingSeconds) % HOUR
    const remainingHours = currentSeconds - remainingMinutes - remainingSeconds
    const newSeconds = currentSeconds - remainingHours + seconds

    dispatch(setCurrentSeconds(newSeconds))
  }

  const secondsOnMouseDown = (event) => {
    if(highlightedSection !== highlight.seconds)
      setHighlightedSection(highlight.seconds)
  }

  const minutesOnMouseDown = (event) => {
    if(highlightedSection !== highlight.minutes)
      setHighlightedSection(highlight.minutes)
  }

  const hoursOnMouseDown = (event) => {
    if(highlightedSection !== highlight.hours)
      setHighlightedSection(highlight.hours)
  }

  const onMouseUp = (event) => {
      setHighlightedSection(null)
  }

  const renderInputField = () => {
		if (!isTimerStarted) {
			return (
				<TextInputField
					onEnterCallback={transitionToTimer}
					onKeydownCallback={inputKeydownCallback}
				/>
			)
		}
	}

  const renderTimerControls = () => {
		if (isTimerStarted) {
			return (
        <TimerControls />
			)
		}
	}

  const renderRadialControls = () => {
		if (!isTimerStarted) {
			return (
        <div className="TimerScreen-radial-controls">
          <RadialControl
            onMouseDown={secondsOnMouseDown}
            onMouseUp={onMouseUp}
            onChange={secondsRadialOnChange}
            radius={150}
          >
            <RadialControl
              onMouseDown={minutesOnMouseDown}
              onMouseUp={onMouseUp}
              onChange={minutesRadialOnChange}
              radius={100}
            >
              <RadialControl
                onMouseDown={hoursOnMouseDown}
                onMouseUp={onMouseUp}
                onChange={hoursRadialOnChange}
                radius={50}
              />
            </RadialControl>
          </RadialControl>
        </div>
			)
		}
	}

  return (
    <div className="TimerScreen">
      <TimerDisplay
        seconds={timerState}
        highlightSection={highlightedSection}
      />
      {renderInputField()}
      {renderTimerControls()}
      {renderRadialControls()}
      <QuoteDisplay
        quote="Be still and know that I am God"
        reference="Psalm 46:10"
      />
      <NavButton
        isLeft={isTimerStarted}
        isDisabled={parseInt(timerState.currentSeconds) === 0}
        transitionCallback={toggleTimerScreen}
      />
    </div>
  )
}

export default TimerScreen
