import React from 'react'
import PropTypes from 'prop-types'
import DigitLine from '../DigitLine'

import './index.css'

class Digit extends React.Component {

  renderDigit(digit, highlightColor) {
    switch (digit) {
      case 0:
        return (
          <React.Fragment>
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
          </React.Fragment>
        )
      case 1:
        return (
          <React.Fragment>
            <DigitLine />
            <DigitLine />
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine />
            <DigitLine />
            <DigitLine />
            <DigitLine />
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
          </React.Fragment>
        )
      case 2:
        return (
          <React.Fragment>
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine />
          </React.Fragment>
        )
      case 3:
        return (
          <React.Fragment>
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
          </React.Fragment>
        )
      case 4:
        return (
          <React.Fragment>
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine />
            <DigitLine />
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
          </React.Fragment>
        )
      case 5:
        return (
          <React.Fragment>
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
          </React.Fragment>
        )
      case 6:
        return (
          <React.Fragment>
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
          </React.Fragment>
        )
      case 7:
        return (
          <React.Fragment>
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine />
            <DigitLine />
            <DigitLine />
            <DigitLine />
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
          </React.Fragment>
        )
      case 8:
        return (
          <React.Fragment>
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
          </React.Fragment>
        )
      case 9:
        return (
          <React.Fragment>
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine />
            <DigitLine />
            <DigitLine />
            <DigitLine isOn highlightColor={highlightColor} />
            <DigitLine isOn highlightColor={highlightColor} />
          </React.Fragment>
        )
      default:
        return
    }
  }

  render() {
    const { digit, isHighlighted, highlightColor } = this.props

    return (
      <div className="Digit-container">
        {this.renderDigit(digit, isHighlighted ? highlightColor : null)}
      </div>
    )
  }
}

Digit.defaultProps = {
  highlightColor: 'red'
}

export default Digit
