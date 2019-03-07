import React from 'react'
import './index.styl'

function TimerProgressBar(props) {
	const { remainingSeconds, totalSeconds } = props
	const percent = remainingSeconds * 100 / totalSeconds

	return (
		<progress className="TimerProgressBar" max={totalSeconds} value={remainingSeconds}>{percent}%</progress>
	)
}

export default TimerProgressBar