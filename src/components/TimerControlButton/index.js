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
      <button type="button" onClick={this.handleClick.bind(this)}>
        {this.state.isPlaying ? `Play` : `Pause`}
      </button>
    )
  }
}


export default TimerControlButton
