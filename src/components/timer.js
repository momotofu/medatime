import React from 'react'
import PropTypes from 'prop-types'
import Digit from './Digit'

class Timer extends React.Component {
	constructor(props) {
		super(props)

    const checkTime = (time) => {
      return time === 0 || time < 0
    }

    const returnStopClock = (callback, context, timerId) => {
      return callback.bind(context, timerId)
    }

    const mapTimeStringToStateObject = (timeString) => {
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

    const getTimeStringFrom = (seconds, dateObject) => {
      const date = new Date()
      date.setHours(0, 0, 0, 0)
      date.setMilliseconds(seconds)

      return date.toTimeString().substr(0,8)
    }

		const { startingTimeInMilliseconds = 0 } = props
    const startingTimeString = getTimeStringFrom(startingTimeInMilliseconds, Date)

    this.state = mapTimeStringToStateObject(startingTimeString, Number)
    this.state.totalSeconds = startingTimeInMilliseconds

    if (checkTime(startingTimeInMilliseconds))
      return

    this.stopClock = returnStopClock(clearInterval, window, setInterval(() => {
      this.setState({
        totalSeconds: this.state.totalSeconds - 1000
      }, () => {
        const currentSeconds = this.state.totalSeconds
        const timeString = getTimeStringFrom(currentSeconds, Date)

        if (checkTime(currentSeconds)) {
          this.stopClock()
        }

        this.setState(mapTimeStringToStateObject(timeString, Number))
      })

    }, 1000))
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
        <div className="Timer-digits">
          <Digit digit={hoursTens} />
          <Digit digit={hoursOnes} />
          <Digit digit={minutesTens} />
          <Digit digit={minutesOnes} />
          <Digit digit={secondsTens} />
          <Digit digit={secondsOnes} />
        </div>
      </React.Fragment>
    )
  }
}

Timer.propTypes = {
  startingTimeInMilliseconds: PropTypes.number.isRequired,
}

export default Timer
