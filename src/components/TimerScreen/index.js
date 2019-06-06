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

const TimerScreen = (props) => {
  const { state: timerState, dispatch } = useContext(TimerContext)
  const [isTimerStarted, setIsTimerStarted] = useState(false)

  //useEffect(() => {
    //console.log('state: ', timerState)
  //}, [timerState])
  //

  const inputCallback = () => {
		setIsTimerStarted(true)
    startClock(null, dispatch)
    dispatch(setInitialSeconds(timerState.currentSeconds))
	}

  const inputKeydownCallback = (currentInputTime) => {
    dispatch(setCurrentSeconds(currentInputTime))
	}

  const renderInputField = () => {
		if (!isTimerStarted) {
			return (
				<TextInputField
					onEnterCallback={inputCallback}
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

  const toggleTimerScreen = () => {
    if (isTimerStarted) {
      stopClock(timerState.stopClockCallback, dispatch)
      dispatch(setInitialSeconds(0))
      dispatch(setCurrentSeconds(0))
    }

    setIsTimerStarted((prevState) => !prevState)
	}

  const transformPercentageToSeconds = (percentage, ordinal) => {
    let offset = 1
    switch (ordinal) {
      case TIME_ORDINALS.seconds:
        offset = 1000
        break
      case TIME_ORDINALS.minutes:
        offset = 10000
        break
      case TIME_ORDINALS.hours:
        offset = 10000000
        break
    }

    const total = 100
    const decimalPercent = percentage / total

    return decimalPercent * 60 * offset
  }

  const transfromPercentageToMinutes = (percentage) => {
  }

  const transfromPercentageToHours = (percentage) => {
  }

  const secondsRadialOnChange = (percentage) => {
    const newSeconds = transformPercentageToSeconds(
      percentage,
      TIME_ORDINALS.minutes,
    )

    dispatch(setCurrentSeconds(newSeconds))
  }

  return (
      <div className="TimerScreen">
        <TimerDisplay seconds={timerState} highlightSection={highlight.hours} />
        {renderInputField()}
        {renderTimerControls()}
        <RadialControl
          onChange={secondsRadialOnChange}
          radius={200}
        >
          <RadialControl
            radius={150}
          >
            <RadialControl
              radius={100}
            />
          </RadialControl>
        </RadialControl>
        <NavButton
          isLeft={isTimerStarted}
          isDisabled={parseInt(timerState.currentSeconds) === 0}
          transitionCallback={toggleTimerScreen}
        />
      </div>
  )
}

export default TimerScreen
