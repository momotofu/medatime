import React from 'react'
import Interact from 'interactjs'
import './index.styl'

class RadialControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      controlPoint: {
        x: 100,
        y: 100
      }
    }

  }

  constraintPointToRadius(origin, destination, radius) {
    /* First get vector from destination and origin
     * Then get unit vector
     * then add radius to unit vector
     */

    const vector = {
      x: destination.x - origin.x,
      y: destination.y - origin.y
    }
    const magnitude = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2))
    const unitVector = {
      x: vector.x / magnitude,
      y: vector.y / magnitude
    }

    const newDestination = {
      x: radius * unitVector.x,
      y: radius * unitVector.y
    }

    return newDestination
  }

  getDegreesFromPoint(point) {
    return Math.atan(point.y / point.x) * 180 / Math.PI
  }

  onMove(event) {
    const target = event.target
    const controlPoint = this.state.controlPoint
    const originPoint = {
      x: 100,
      y: 100
    }

    const destinationPoint = {
      x: controlPoint.x + event.dx,
      y: controlPoint.y + event.dy
    }

    const adjustedPoint = this.constraintPointToRadius(
      originPoint,
      destinationPoint,
      100
    )

    const deg = this.getDegreesFromPoint(adjustedPoint)
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + adjustedPoint.x + 'px, ' + adjustedPoint.y + 'px) rotate('+ deg + 'deg) '

    const percentage = this.convertDegreesToPercentage(
      this.getDegreesFromPoint2(destinationPoint)
    )

    this.setState({
      controlPoint: destinationPoint,
      percentage,
    })
  }

  getStrokeDashFrom(percentage, radius) {
    const circumference = Math.PI * (radius * 2)

    return `${((100 - percentage) / 100) * circumference}px`
  }

  getDegreesFromPoint2(point) {
    const origin = {
      x: 100,
      y: 100,
    }

    const deltaX = point.x - origin.x
    const deltaY = point.y - origin.y
    const radians = Math.atan2(deltaY, deltaX)

    return radians * (180 / Math.PI)
  }

  convertDegreesToPercentage(degrees) {
    if (degrees < 0)
      degrees = -1 * degrees
    else
      degrees = 180 - degrees + 180

    return degrees / 360 * 100
  }

  componentDidMount() {
    Interact(this.square)
      .draggable({
        onmove: this.onMove.bind(this),
      })
  }

  componentDidUpdate(prevState, curState) {
    console.log('state: ', this.state)
  }

  render() {
    const { children } = this.props
    return (
      <>
      <svg
        className='RadialControl'
        height='100%'
        width='100%'
        xmlns='http://www.w3.org/2000/svg'>
          <circle
            className='RadialControl-circle'
            cx='50%'
            cy='50%'
            r='50'
            strokeDasharray={this.getStrokeDashFrom(0, 50)}
            strokeDashoffset={this.getStrokeDashFrom(this.state.percentage, 50)}
            fill='none'
          />
        </svg>
        <div
          className='RadialControl-square'
          ref={ (el) => this.square = el }
         >
           { children }
        </div>
      </>
    )
  }
}

export default RadialControl
