import React, {
  useState,
  useEffect,
  useContext,
} from 'react'
import PropTypes from 'prop-types'

// Imported components
import TextInputField from '../TextInputField'
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

// CSS
import './index.styl'

const TimerScreen = (props) => {
  const { state: timerState, dispatch } = useContext(TimerContext)
  const [isTimerStarted, setIsTimerStarted] = useState(false)

  //useEffect(() => {
    //console.log('state: ', timerState)
  //}, [timerState])

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

  return (
      <div className="TimerScreen">
        <TimerDisplay seconds={timerState} />
        {renderInputField()}
        {renderTimerControls()}
        <RadialControl
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
          isDisabled={parseInt(timerState.currentTime) === 0}
          transitionCallback={toggleTimerScreen}
        />
      </div>
  )
}

export default TimerScreen
