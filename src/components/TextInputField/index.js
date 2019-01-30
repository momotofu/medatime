import PropTypes from 'prop-types'
import React from 'react'
import { mapTextToSeconds } from 'words-to-time'

// CSS
import './index.styl'

const ENTER_KEY = 13;

class Input extends React.Component {
	constructor(props) {
		super(props)
		this.state = { inputTime: '0' }
	}

	handleChange(event) {
		this.setState({ inputTime: event.target.value })
	}

	handleKeyDown(event) {
		const { onKeyDownCallback } = this.props
		const { inputTime } = this.state
		if (event.which === ENTER_KEY) {
      const seconds = mapTextToSeconds(inputTime)
			onKeyDownCallback(seconds)
		}
	}

	render() {
    const { placeholder = 'Type something...' } = this.props

		return (
			<input
        className="TextInputField"
        placeholder={ placeholder }
				type="text"
				onChange={ this.handleChange.bind(this) }
				onKeyDown={ this.handleKeyDown.bind(this) }
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
