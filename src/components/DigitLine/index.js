import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

function DigitLine(props) {
  const {isOn} = props
  const className = `DigitLine${isOn ? ' DigitLine-on' : ''}`

  return (
    <div className={className}></div>
  )
}

export default DigitLine
