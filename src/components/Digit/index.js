import React from 'react'
import PropTypes from 'prop-types'
import DigitLine from '../DigitLine'

import './index.css'

class Digit extends React.Component {
  renderDigit(digit) {
    switch (digit) {
      case 0:
        return (
          <React.Fragment>
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
          </React.Fragment>
        )
      case 1:
        return (
          <React.Fragment>
            <DigitLine />
            <DigitLine />
            <DigitLine isOn />
            <DigitLine />
            <DigitLine />
            <DigitLine />
            <DigitLine isOn />
          </React.Fragment>
        )
      case 2:
        return (
          <React.Fragment>
            <DigitLine />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine />{' '}
          </React.Fragment>
        )
      case 3:
        return (
          <React.Fragment>
            <DigitLine />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine />
            <DigitLine isOn />
            <DigitLine isOn />
          </React.Fragment>
        )
      case 4:
        return (
          <React.Fragment>
            <DigitLine isOn />
            <DigitLine />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine />
            <DigitLine />
            <DigitLine isOn />
          </React.Fragment>
        )
      case 5:
        return (
          <React.Fragment>
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine />
            <DigitLine isOn />
            <DigitLine />
            <DigitLine isOn />
            <DigitLine isOn />
          </React.Fragment>
        )
      case 6:
        return (
          <React.Fragment>
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
          </React.Fragment>
        )
      case 7:
        return (
          <React.Fragment>
            <DigitLine />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine />
            <DigitLine />
            <DigitLine />
            <DigitLine isOn />
          </React.Fragment>
        )
      case 8:
        return (
          <React.Fragment>
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
          </React.Fragment>
        )
      case 9:
        return (
          <React.Fragment>
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine isOn />
            <DigitLine />
            <DigitLine />
            <DigitLine isOn />
          </React.Fragment>
        )
      default:
        return
    }
  }

  render() {
    const { digit } = this.props

    return <div className="Digit-container">{this.renderDigit(digit)}</div>
  }
}

export default Digit
