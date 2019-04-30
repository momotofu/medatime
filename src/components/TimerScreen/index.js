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
} from '../Timer'

// CSS
import './index.styl'

const TimerScreen = (props) => {
  const { state: timerState, dispatch } = useContext(TimerContext)
  const [isTimerVisible, setIsTimerVisible] = useState(false)

  useEffect(() => {
    console.log('state: ', timerState)
  }, [timerState])

  const inputCallback = () => {
		setIsTimerVisible(true)
    startClock(null, dispatch)
    dispatch(setInitialSeconds(timerState.currentTime))
	}

  const inputKeydownCallback = (currentInputTime) => {
    console.log('currentTime: ', currentInputTime)
    dispatch(setCurrentSeconds(currentInputTime))
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
          isDisabled={parseInt(timerState.currentTime) === 0}
          transitionCallback={toggleTimerScreen}
          isTimerVisible={isTimerVisible}
        />
      </div>
  )
}

export default TimerScreen
