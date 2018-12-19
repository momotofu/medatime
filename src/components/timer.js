import React from 'react'
import PropTypes from 'prop-types'

class Timer extends React.Component {
	constructor(props) {
		super(props)
		console.log(props)
	}

	render() {
		return (
			<h1>Timer</h1>
		)
	}
}

export default Timer