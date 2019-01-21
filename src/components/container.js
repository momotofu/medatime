import React from 'react'
import PropTypes from 'prop-types'
import Input from './input'
import Timer from './timer'

class Container extends React.Component {
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
			return <Input onKeyDownCallback={this.inputCallback.bind(this)} />
		}
	}

	renderTimer() {
		const { isTimerVisible, inputTime } = this.state
		if (/*inputTime.trim().length > 0 && */ isTimerVisible) {
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
			<div>
				{this.renderInputField()}
				{this.renderTimer()}
			</div>
		)
	}
}

export default Container
