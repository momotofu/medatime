import React, {
  useState,
  useLayoutEffect,
  useEffect,
  useRef,
} from 'react'
import Interact from 'interactjs'
import cn from 'classnames'
import './index.styl'

function RadialControl(props) {
  const [squareCoord, setSquareCoord] = useState()
  const [isSelected, setIsSelected] = useState()
  const [originPoint, setOriginPoint] = useState()
  const [percentage, setPercentage] = useState()
  const oldPercentage = useRef()
  const circleRef = useRef()
  const squareRef = useRef()

  const {
    onChange,
    radius,
    children,
  } = props

  function constrainPointToRadius(origin, destination, radius) {
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

  function getDegreesFromPoint(point) {
    return Math.atan(point.y / point.x) * 180 / Math.PI
  }

  function onMove(event) {
    const target = event.target

    if (!isSelected) return

    const destinationPoint = {
      x: squareCoord.x + event.dx,
      y: squareCoord.y + event.dy
    }

    // percentage out of 360 degrees
    const percentage = convertDegreesToPercentage(
      getDegreesFromPoint2(destinationPoint)
    )

    // prevent square coords from going beyond 100% or 0%
    // Also constrains the squares coordinates to the radius
    const adjustedPoint = constrainSquareCoord(
      percentage,
      constrainPointToRadius(
        originPoint,
        destinationPoint,
        radius,
      )
    )

    // If the draggable event coords
    // match the squareCoords don't do any work
    if (adjustedPoint.x === squareCoord.x
      && adjustedPoint.y === squareCoord.y)
      return

    const deg = getDegreesFromPoint(adjustedPoint)
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + adjustedPoint.x + 'px, ' + adjustedPoint.y + 'px) rotate('+ deg + 'deg) '

      setSquareCoord(destinationPoint)
      setPercentage(percentage)
  }

  function getStrokeDashFrom(percentage, radius) {
    const circumference = Math.PI * (radius * 2)

    return `${((100 - percentage) / 100) * circumference}px`
  }

  function getDegreesFromPoint2(point) {
    const deltaX = point.x - originPoint.x
    const deltaY = point.y - originPoint.y
    const radians = Math.atan2(deltaY, deltaX)

    return radians * (180 / Math.PI)
  }

  function convertDegreesToPercentage(degrees) {
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

  function constrainSquareCoord(curPercentage, newControlPoint) {
    // constrains the square control from dragging beyond
    // 100% or 0%
    const prevPercentage = percentage

    if ((prevPercentage >= 95
      && curPercentage <= 5)
      || (prevPercentage <= 5
      && curPercentage >= 95)) {
      return squareCoord // previous square coords
    }

    return newControlPoint
  }

  useLayoutEffect(() => {
    const originRect = circleRef.current.getBoundingClientRect()
    const originPoint = {
      x: originRect.x + originRect.width / 2,
      y: originRect.y + originRect.height / 2,
    }
    const squareCoord = {
      x: originPoint.x + radius,
      y: originPoint.y - 1,
    }
    console.log('originRect: ', originRect)

    setOriginPoint(originPoint)
    setSquareCoord(squareCoord)

    const eventObject = {
      target: squareRef.current,
      dx: 0,
      dy: 0,
    }

    onMove(eventObject)

    Interact(squareRef.current)
      .draggable({
        onstart: (event) => {
          //console.log('start event: ', event.speed)
        },
        onmove: onMove,
        onend: (event) => {
          //console.log('end event: ', event.speed)
        },
      })
  }, [])

  useEffect(() => {
    if (oldPercentage !== undefined
      && percentage !== undefined
      && oldPercentage.current !== percentage
      && typeof onChange === 'function'
    ) {
      oldPercentage.current = percentage
      onChange(percentage)
    }
  }, [percentage])

  function radialOnMouseDown(event) {
    event.preventDefault()
    event.stopPropagation()
    const { onMouseDown } = props

    setIsSelected(true);
    onMouseDown()
  }

  function radialOnMouseUp() {
    const { onMouseUp } = props

    setIsSelected(false);
    onMouseUp()
  }

  const height = radius * 2 + 4
  const width = height

  return (
    <div className='RadialControl' style={{ height, width }}>
    <svg
      className='RadialControl-circle-container'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'>
        <circle
          className='RadialControl-circle RadialControl-circle-background'
          ref={circleRef}
          cx='50%'
          cy='50%'
          r={radius}
          strokeDasharray={getStrokeDashFrom(0, radius)}
          strokeDashoffset={0}
          fill='none'
        />
        <circle
          className='RadialControl-circle'
          cx='50%'
          cy='50%'
          r={radius}
          strokeDasharray={getStrokeDashFrom(0, radius)}
          strokeDashoffset={getStrokeDashFrom(
            percentage,
            radius,
          )}
          fill='none'
        />
      </svg>
      <div
        className={cn(
          'RadialControl-knob',
          'RadialControl-knob-circle',
        )}
        onMouseDown={radialOnMouseDown}
        onTouchStart={radialOnMouseDown}
        onMouseUp={radialOnMouseUp}
        onTouchEnd={radialOnMouseUp}
        onMouseOut={radialOnMouseUp}
        onTouchCancel={radialOnMouseUp}
        ref={squareRef}
       >
      </div>
      <div className='RadialControl-children'>
       { children }
       </div>
    </div>
  )
}

export default RadialControl
