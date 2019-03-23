import React from 'react'
import './index.styl'

function TimerProgressBar(props) {
	console.log(props)
	const { remainingSeconds, totalSeconds, refill } = props
	const percent = remainingSeconds * 100 / totalSeconds
	const percentPolyfill = percent / 2 + .15 + '%'

	return (
		<div className="progressBarWrapper">
			<progress className="TimerProgressBar" max={totalSeconds} value={remainingSeconds}>{percent}%</progress>
			<span className={percent === 100 ? 'progressBarPolyfill progressBarRefill' : 'progressBarPolyfill'} style={{width:percentPolyfill}}></span>
		</div>
	)
}

export default TimerProgressBar