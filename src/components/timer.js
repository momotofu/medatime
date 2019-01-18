import React from 'react'
import PropTypes from 'prop-types'

import Digit from './Digit'

class Timer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			secondsOnes: 0,
			secondsTens: 0,
			minutesOnes: 0,
			minutesTens: 0,
			hoursOnes: 0,
			hoursTens: 0
		}

		const {startingTime} = props
		// TODO: Create timer engine
	}



	render() {
		return (
			<React.Fragment>
				<h1>Timer</h1>
				<div className='Timer-digits'>
					<Digit digit={0} />
					<Digit digit={1} />
					<Digit digit={2} />
					<Digit digit={3} />
					<Digit digit={4} />
					<Digit digit={5} />
					<Digit digit={6} />
					<Digit digit={7} />
					<Digit digit={8} />
					<Digit digit={9} />
				</div>
			</React.Fragment>
		)
	}
}

export default Timer