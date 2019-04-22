import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Imported components
import TextInputField from '../TextInputField'
import TimerProvider from '../Timer'
import RadialControl from '../RadialControl'
import NavButton from '../NavButton'
import TimerControls from '../TimerControls'

// CSS
import './index.styl'

const TimerScreen = (props) => {
  const [isTimerVisible, setIsTimerVisible] = useState(false)
  const [inputTime, setInputTime] = useState(0)
  console.log('inputTime: ', inputTime)
  console.log('isTimerVisible: ', isTimerVisible)

  //useEffect(() => {
    //console.log('isTimerVisible: ', isTimerVisible)
  //}, [isTimerVisible])

  const inputCallback = () => {
    console.log('before visible: ', isTimerVisible)
		setIsTimerVisible(true)
    console.log('before visible: ', isTimerVisible)
	}

  const inputKeydownCallback = (currentInputTime) => {
    console.log('input: ', currentInputTime)
    console.log('before time: ', inputTime)
    setInputTime(currentInputTime)
    console.log('after time: ', inputTime)
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
    <TimerProvider>
      <div className="TimerScreen">
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
    </TimerProvider>
  )
}

export default TimerScreen
