import React from 'react'
import './index.styl'

function TimerProgressBar(props) {
	const { remainingSeconds, totalSeconds } = props
	const percent = remainingSeconds * 100 / totalSeconds
	const percentPolyfill = percent / 2 + '%'

	return (
		<div className="progressBarWrapper">
			<progress className="TimerProgressBar" max={totalSeconds} value={remainingSeconds}>{percent}%</progress>
			<span className="progressBarPolyfill" style={{width:percentPolyfill}}></span>
		</div>
	)
}

export default TimerProgressBar