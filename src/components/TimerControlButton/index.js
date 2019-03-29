import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

class TimerControlButton extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isPlaying: false
    }
  }

  handleClick(event) {
    const { isPlaying } = this.state
    const { playCallback, pauseCallback } = this.props

    if (isPlaying)
      playCallback()
    else
      pauseCallback()

    this.setState({ isPlaying: !isPlaying })
  }

  render() {
    return (
      <button className="timerControl" type="button" onClick={this.handleClick.bind(this)}>
        {this.state.isPlaying ? <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>Play</title><path fill="currentColor" d="M6 4l20 12L6 28z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>Pause</title><path fill="currentColor" d="M4 4h10v24H4zm14 0h10v24H18z"/></svg>}
      </button>
    )
  }
}


export default TimerControlButton
