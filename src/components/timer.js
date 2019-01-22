import React from 'react'
import PropTypes from 'prop-types'
import Digit from './Digit'

class Timer extends React.Component {
	constructor(props) {
		super(props)
    const checkTime = (time, limit) => {
      return time === limit || time - 54000000 < 1000
    }

    const returnStopClock = (callback, context, timerId) => {
      return callback.bind(context, timerId)
    }

    const mapTimeStringToStateObject = (timeString, transform) => {
      const seconds = timeString.substr(6,2)
      const minutes = timeString.substr(3,2)
      const hours = timeString.substr(0,2)

      return {
        secondsOnes: transform(seconds[1]),
        secondsTens: transform(seconds[0]),
        minutesOnes: transform(minutes[1]),
        minutesTens: transform(minutes[0]),
        hoursOnes: transform(hours[1]),
        hoursTens: transform(hours[0])
      }
    }

    const getTimeStringFrom = (seconds, dateObject) => {
      return new Date(seconds).toTimeString().substr(0,8)
    }

		const { startingTimeInMilliseconds = 0 } = props
    const baseSeconds = 54000000
    const startingTime = baseSeconds + startingTimeInMilliseconds
    const startingTimeString = getTimeStringFrom(startingTime, Date)

    this.state = mapTimeStringToStateObject(startingTimeString, Number)
    this.state.totalSeconds = startingTime

    if (checkTime(startingTime, baseSeconds))
      return

    this.stopClock = returnStopClock(clearInterval, window, setInterval(() => {
      this.setState({
        totalSeconds: this.state.totalSeconds - 1000
      }, () => {
        const currentSeconds = this.state.totalSeconds
        const timeString = getTimeStringFrom(currentSeconds, Date)

        if (checkTime(currentSeconds, baseSeconds)) {
          this.stopClock()
        }

        this.setState(mapTimeStringToStateObject(timeString, Number))
      })

    }, 1000))
	}

  componentWillUnmount() {
    if ('stopClock' in this)
      this.stopClock()
  }

	render() {
    const {
      secondsOnes,
      secondsTens,
      minutesOnes,
      minutesTens,
      hoursOnes,
      hoursTens
    } = this.state

		return (
			<React.Fragment>
				<h1>Timer</h1>
				<div className='Timer-digits'>
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
  startingTimeInMilliseconds: PropTypes.number.isRequired
}

export default Timer
