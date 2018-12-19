import PropTypes from 'prop-types'
import React from 'react'

const ENTER_KEY = 13;

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = { time: '0 seconds' }
	}

	handleChange(event) {
		this.setState({ time: event.target.value })
	}

	handleKeyDown(event) {
		const { onKeyDownCallback } = this.props
		const { time } = this.state
		if (event.which === ENTER_KEY) {
			onKeyDownCallback(time)
			//console.log(event)
			// this.handleSubmit(event);
		}
	}

	// lifecycle methods
	componentDidMount() {
		console.log("Props: ", this.props)
		console.log("State: ", this.state)
	}

	componentDidUpdate() {
		console.log(this.state)
	}

	render() {
		return (
			<input
				type="text"
				onChange={this.handleChange.bind(this)}
				onKeyDown={this.handleKeyDown.bind(this)}
				/>
		)
	}
}

Input.propTypes = {
  siteTitle: PropTypes.string,
  onKeyDownCallback: PropTypes.func.isRequired
}

Input.defaultProps = {
  siteTitle: '',
}

export default Input
