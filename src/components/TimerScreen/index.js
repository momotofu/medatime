import React from 'react'
import PropTypes from 'prop-types'

// Imported components
import TextInputField from '../TextInputField'
import Timer from '../Timer'
import TimerDisplay from '../TimerDisplay'
import RadialControl from '../RadialControl'
import NavButton from '../NavButton'

// CSS
import './index.styl'

class TimerScreen extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isTimerVisible: false,
			inputTime: 0
		}
  }

	inputCallback(currentInputTime) {
		this.setState({isTimerVisible: true})
	}

	inputKeydownCallback(currentInputTime) {
		this.setState({inputTime: currentInputTime})
	}

	renderInputField() {
		const { isTimerVisible } = this.state

		if (!isTimerVisible) {
			return (
				<TextInputField
					onEnterCallback={this.inputCallback.bind(this)}
					onKeydownCallback={this.inputKeydownCallback.bind(this)}
				/>
			)
		}
	}

	renderTimer() {
		const { isTimerVisible, inputTime } = this.state
		if (isTimerVisible) {
			return (
				<React.Fragment>
					<Timer startingTimeInMilliseconds={ inputTime } />
				</React.Fragment>
			)
		}
	}

	toggleTimerScreen() {
		const { isTimerVisible } = this.state

		this.setState({ isTimerVisible: !isTimerVisible })
	}

	render() {
		const { inputTime, isTimerVisible } = this.state

		return (
			<div className="TimerScreen">
		    <TimerDisplay
		    	digitData={
		    		{
		    			secondsOnes: 1,
			    		secondsTens: 2,
			    		minutesOnes: 3,
			    		minutesTens: 4,
			    		hoursOnes: 5,
			    		hoursTens: 6
			    	}
		    	}
		    />
				{this.renderInputField()}
				{this.renderTimer()}
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
        	transitionCallback={this.toggleTimerScreen.bind(this)}
        	isTimerVisible={isTimerVisible}
        />
			</div>
		)
	}
}

export default TimerScreen
