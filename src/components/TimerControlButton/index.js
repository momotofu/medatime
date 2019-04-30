import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const TimerControlButton = (props) => {
  const { onClickCallback, isPlaying } = props
  console.log('inner isPlaying: ', isPlaying)

  return (
    <button
      className="timerControl"
      type="button"
      onClick={onClickCallback}
    >
      { !isPlaying
        ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>Play</title><path fill="currentColor" d="M6 4l20 12L6 28z"/></svg>
        : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>Pause</title><path fill="currentColor" d="M4 4h10v24H4zm14 0h10v24H18z"/></svg>
      }
    </button>
  )
}


export default TimerControlButton
