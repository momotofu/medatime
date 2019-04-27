import PropTypes from 'prop-types'
import React from 'react'
import { mapTextToSeconds } from 'words-to-time'

// CSS
import './index.styl'

const ENTER_KEY = 'Enter'

function Input(props) {
	const handleChange = event => {
		const { onKeydownCallback } = props
		const seconds = mapTextToSeconds(event.target.value)

		onKeydownCallback(seconds)
	}

	const handleKeyPress = event => {
		const {onEnterCallback } = props
		if (event.key === ENTER_KEY) {
			onEnterCallback()
		}
	}

	const { placeholder = 'Type something...' } = props
	return (
		<React.Fragment>
      <label className="visuallyhidden" htmlFor="medaTime">
        Enter Meditation Time
      </label>
			<input
				className="TextInputField"
				id="medaTime"
				placeholder={ placeholder }
				type="text"
				onChange={ handleChange }
				onKeyDown={ handleKeyPress }
				autoFocus
			/>
		</React.Fragment>
	)
}

Input.propTypes = {
  siteTitle: PropTypes.string,
  onKeydownCallback: PropTypes.func.isRequired,
  onEnterCallback: PropTypes.func.isRequired
}

Input.defaultProps = {
  siteTitle: '',
}

export default Input
