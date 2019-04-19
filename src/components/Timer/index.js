import React from 'react'
import PropTypes from 'prop-types'
import TimerControlButton from '../TimerControlButton'
import TimerRestartButton from '../TimerRestartButton'
import TimerProgressBar from '../TimerProgressBar'

class Timer extends React.Component {
	constructor(props) {
    super(props)

    const { startingTimeInMilliseconds } = props
    const startingTimeString = this.getTimeStringFrom(startingTimeInMilliseconds, Date)

    this.state = this.mapTimeStringToStateObject(startingTimeString, Number)
    this.state.totalSeconds = startingTimeInMilliseconds
  }

  mapTimeStringToStateObject = (timeString) => {
    const seconds = timeString.substr(6,2)
    const minutes = timeString.substr(3,2)
    const hours = timeString.substr(0,2)

    return {
      secondsOnes: Number(seconds[1]),
      secondsTens: Number(seconds[0]),
      minutesOnes: Number(minutes[1]),
      minutesTens: Number(minutes[0]),
      hoursOnes: Number(hours[1]),
      hoursTens: Number(hours[0])
    }
  }

  getTimeStringFrom = (seconds, dateObject) => {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    date.setMilliseconds(seconds)

    return date.toTimeString().substr(0,8)
  }

  checkTime = (time) => {
    return time === 0 || time < 0
  }

  returnStopClock = (callback, context, timerId) => {
    return callback.bind(context, timerId)
  }

  updateDigitsState = () => {
    const currentSeconds = this.state.totalSeconds
    const timeString = this.getTimeStringFrom(currentSeconds, Date)
    const isOutOfTime = this.checkTime(currentSeconds)

    if (isOutOfTime) {
      this.stopClock()
    }

    this.setState(this.mapTimeStringToStateObject(timeString, Number))
  }

  /*
   * stopClock = () => {
   *   clearInterval(this.intervalTimerID)
   * }
   *
   * decrementClock = () => {
   *   this.setState (
   *    {totalSeconds: this.state.totalSeconds - 1000},
   *     this.renderTimerDigits
   *   )
   * }
   *
   * startClock() {
   *   this.intervalTimerID = setInterval(this.decrementClock, 1000)
   * }
   *
   */

  startClock() {
    this.stopClockCallback = this.returnStopClock(clearInterval, window, setInterval(() => {
      this.setState({
        totalSeconds: this.state.totalSeconds - 1000
      }, this.updateDigitsState)
    }, 1000))
  }

  stopClock() {
    this.stopClockCallback()
  }

  restartClock() {
    const { startingTimeInMilliseconds } = this.props
    this.setState({
      totalSeconds: startingTimeInMilliseconds
    }, this.updateDigitsState)
  }

  componentDidMount() {
    const { startingTimeInMilliseconds } = this.props
    if (this.checkTime(startingTimeInMilliseconds))
      return
    this.startClock()
  }

  componentWillUnmount() {
    if ('stopClock' in this) this.stopClock()
  }

  render() {
    const {
      secondsOnes,
      secondsTens,
      minutesOnes,
      minutesTens,
      hoursOnes,
      hoursTens,
    } = this.state

    return (
      <React.Fragment>
        <h1>Timer</h1>
        <TimerProgressBar
          totalSeconds={this.props.startingTimeInMilliseconds}
          remainingSeconds={this.state.totalSeconds}
        />
        <TimerControlButton
          isPlay
          playCallback={this.startClock.bind(this)}
          pauseCallback={this.stopClock.bind(this)}
        />
				<TimerRestartButton restartCallback={this.restartClock.bind(this)} />
      </React.Fragment>
    )
  }
}

Timer.propTypes = {
  startingTimeInMilliseconds: PropTypes.number.isRequired,
}

export default Timer

/*
 * Stateless component for progress bar
 *
 * Stateless function
 * Takes in props for percentage complete
 * Based on prop value, which should be a number, the progress bar will show the progress
 *
 * Refactor startClock() to also update the state to show percentage complete
 * Pass above state to a prop of the progress bar
 *
 * Create function in timer component
 * Every time state changes in tick, it'll update the progress bar in real time
 */
