import React from 'react'

class TimerRestartButton extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    const { restartCallback } = this.props
    restartCallback()
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick.bind(this)}>Restart</button>
    )
  }
}

export default TimerRestartButton