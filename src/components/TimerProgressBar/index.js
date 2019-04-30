import React from 'react'
import cn from 'classnames'

import './index.styl'

function TimerProgressBar(props) {
	const { remainingSeconds, totalSeconds, hasTransition } = props
	const percent = remainingSeconds * 100 / totalSeconds

  // no transition times
  // 1. restarting clock
  // 2. if pause is clicked

	return (
		<div className="TimerProgressBar">
      <div
        className={cn(
          'TimerProgressBar-percentage',
        { 'TimerProgressBar-percentage-no-transition' : !hasTransition }
        )}
        style={{ width: `${percent}%` }}
      />
		</div>
	)
}

export default TimerProgressBar
