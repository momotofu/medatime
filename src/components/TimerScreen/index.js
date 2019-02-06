import React from 'react'
import PropTypes from 'prop-types'

// Imported components
import TextInputField from '../TextInputField'
import Timer from '../Timer'
import RadialControl from '../RadialControl'

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
		this.setState({inputTime: currentInputTime, isTimerVisible: true})
	}

	renderInputField() {
		const { isTimerVisible } = this.state

		if (!isTimerVisible) {
			return <TextInputField onKeyDownCallback={this.inputCallback.bind(this)} />
		}
	}

	renderTimer() {
		const { isTimerVisible, inputTime } = this.state
		if (isTimerVisible) {
			return (
				<React.Fragment>
					<Timer startingTimeInMilliseconds={ inputTime } />
					<button onClick={() => { this.setState({ isTimerVisible: false})}}>Cancel</button>
				</React.Fragment>
			)
		}
	}

	render() {
		return (
			<div className="TimerScreen">
				{this.renderInputField()}
				{this.renderTimer()}
        <RadialControl />
			</div>
		)
	}
}

export default TimerScreen
