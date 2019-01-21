import React from 'react'
import PropTypes from 'prop-types'
import Digit from './Digit'

class Timer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
      totalSeconds: 0,
			secondsOnes: 0,
			secondsTens: 0,
			minutesOnes: 0,
			minutesTens: 0,
			hoursOnes: 0,
			hoursTens: 0
		}

		const { startingTimeInMilliseconds } = props
    const baseSeconds = 54000000
    this.state.totalSeconds = baseSeconds + startingTimeInMilliseconds

    const checkTime = (time, limit) => {
      return time === limit
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

    this.stopClock = returnStopClock(clearInterval, window, setInterval(() => {
      const currentSeconds = this.state.totalSeconds
      const date = new Date(currentSeconds)
      const timeString = date.toTimeString().substr(0,8)

      this.setState(mapTimeStringToStateObject(timeString, Number))

      if (checkTime(currentSeconds, baseSeconds)) {
        this.stopClock()
      }

      this.setState({
        totalSeconds: currentSeconds - 1000
      })
    }, 1000))
	}

  componentWillUnmount() {
    this.stopClock()
  }

  componentDidUpdate() {
    console.log(this.state)
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

    console.log(secondsOnes, secondsTens, minutesOnes, minutesTens, hoursOnes, hoursTens)

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
