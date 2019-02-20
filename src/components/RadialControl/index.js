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
      'translate(' + adjustedPoint.x + 'px, ' + adjustedPoint.y + 'px) rotate('+ deg + 'deg) ';

    this.setState({
      controlPoint: destinationPoint
    })
  }

  componentDidMount() {
    Interact(this.square)
      .draggable({
        onmove: this.onMove.bind(this),
      })
  }

  render() {
    const { children } = this.props
    return (
      <>
        <svg height='100%' width='100%' xmlns='http://www.w3.org/2000/svg'>
          <circle
            cx='50%'
            cy='50%'
            r='50'
            stroke='red'
            strokeWidth='3'
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
