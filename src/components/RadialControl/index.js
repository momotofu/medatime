import React from 'react'
import Interact from 'interactjs'
import './index.styl'

class RadialControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      controlPoint: {
        x: 400,
        y: 180,
      }
    }

  }

  constrainPointToRadius(origin, destination, radius) {
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
    const { controlPoint, originPoint } = this.state

    const destinationPoint = {
      x: controlPoint.x + event.dx,
      y: controlPoint.y + event.dy
    }


    const percentage = this.convertDegreesToPercentage(
      this.getDegreesFromPoint2(destinationPoint)
    )

    const adjustedPoint = this.constraintControlPoint(
      percentage,
      this.constrainPointToRadius(
        originPoint,
        destinationPoint,
        50
      )
    )

    if (adjustedPoint.x === controlPoint.x
      && adjustedPoint.y === controlPoint.y)
      return

    const deg = this.getDegreesFromPoint(adjustedPoint)
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + adjustedPoint.x + 'px, ' + adjustedPoint.y + 'px) rotate('+ deg + 'deg) '


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
    const { originPoint } = this.state

    const deltaX = point.x - originPoint.x
    const deltaY = point.y - originPoint.y
    const radians = Math.atan2(deltaY, deltaX)

    return radians * (180 / Math.PI)
  }

  convertDegreesToPercentage(degrees) {
    if (degrees < 0)
      degrees = -1 * degrees
    else
      degrees = 180 - degrees + 180

    const percentage = degrees / 360 * 100

    if (percentage <= 0.5)
      return 0
    else
      return Math.ceil(percentage)
  }

  constraintControlPoint(curPercentage, newControlPoint) {
    const prevPercentage = this.state.percentage

    if ((prevPercentage >= 95
      && curPercentage <= 5)
      || (prevPercentage <= 5
      && curPercentage >= 95)) {
      return this.state.controlPoint
    }

    return newControlPoint
  }

  componentDidMount() {
    const originRect = this.circle.getBoundingClientRect()
    this.setState({
      originPoint: {
        x: originRect.x,
        y: originRect.y,
      }
    })

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
      <div className='RadialControl'>
      <svg
        className='RadialControl-circle-container'
        height='100%'
        width='100%'
        xmlns='http://www.w3.org/2000/svg'>
          <circle
            className='RadialControl-circle RadialControl-circle-background'
            ref={ (el) => this.circle = el}
            cx='50%'
            cy='50%'
            r='50'
            strokeDasharray={this.getStrokeDashFrom(0, 50)}
            strokeDashoffset={0}
            fill='none'
          />
          <circle
            className='RadialControl-circle'
            ref={ (el) => this.circle = el}
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
      </div>
    )
  }
}

export default RadialControl
