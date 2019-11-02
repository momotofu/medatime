import React from 'react'

import './index.styl'

function DigitLine(props) {
  const { isOn, highlightColor } = props
  const stroke = highlightColor ? highlightColor : '#EEE'

  return (
    <div
      className="DigitLine"
      style={{
        backgroundColor: isOn ? stroke : null
      }}
    ></div>
  )
}

export default DigitLine
