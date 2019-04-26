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
  startClock,
} from '../Timer'

// CSS
import './index.styl'

const TimerScreen = (props) => {
  const { state: timerState, dispatch } = useContext(TimerContext)

  // state
  const [isTimerVisible, setIsTimerVisible] = useState(false)
  const [inputTime, setInputTime] = useState(0)

  const inputCallback = () => {
		setIsTimerVisible(true)
	}

  const inputKeydownCallback = (currentInputTime) => {
    setInputTime(currentInputTime)
    dispatch(setInitialSeconds(currentInputTime))
    startClock(null, dispatch)
	}

  const renderInputField = () => {
		if (!isTimerVisible) {
			return (
				<TextInputField
					onEnterCallback={inputCallback}
					onKeydownCallback={inputKeydownCallback}
				/>
			)
		}
	}

  const renderTimerControls = () => {
		if (isTimerVisible) {
			return (
        <TimerControls />
			)
		}
	}

  const toggleTimerScreen = () => {
    setIsTimerVisible((prevState) => !prevState)
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
          isDisabled={parseInt(inputTime) === 0}
          transitionCallback={toggleTimerScreen}
          isTimerVisible={isTimerVisible}
        />
      </div>
  )
}

export default TimerScreen
