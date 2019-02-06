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

  /*
   * Component functionality
   *
   * 1. Continue timer countdown
   *    a. event listener on button, onClick
   *    b. call function, which is a callback function, to look for timer to change state to play countdown
   *    c. button value changes from Play to Pause
   *
   * 2. Pause timer countdown
   *    a. event listener on button, onClick
   *    b. invoking callback function, to look for timer to change state to pause countdown
   *       1. get props from timer component (parent)
   *       2. use callback function to update a prop from the timer component
   *    c. button value changes from Pause to Play
   *
   * 3. Restart/Repeat timer countdown
   *    a. event listener on button, onClick
   *    b. invoking callback function, to actively restart timer to given time
   */

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.isPlaying ? `Play` : `Pause`}
      </button>
    )
  }
}


export default TimerControlButton
