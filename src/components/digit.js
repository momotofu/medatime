import React from 'react'
import PropTypes from 'prop-types'

import './digit.css'

class Digit extends React.Component {
    renderDigit(digit) {
        switch(digit) {
            case 0:
                return (
                    <React.Fragment>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    </React.Fragment>
                )
            case 1:
                return (
                    <React.Fragment>
                    <div className="Digit-line"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    </React.Fragment>
                )
            case 2:
                return (
                    <React.Fragment>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line"></div>                   </React.Fragment>

                )
            case 3:
                return (
                    <React.Fragment>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    </React.Fragment>
                )
            case 4:
                return (
                    <React.Fragment>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    </React.Fragment>
                )
            case 5:
                return (
                    <React.Fragment>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    </React.Fragment>
                )
            case 6:
                return (
                    <React.Fragment>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    </React.Fragment>
                )
            case 7:
                return (
                    <React.Fragment>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    </React.Fragment>
                )
            case 8:
                return (
                    <React.Fragment>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    </React.Fragment>
                )
            case 9:
                return (
                    <React.Fragment>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line"></div>
                    <div className="Digit-line Digit-line-on"></div>
                    </React.Fragment>
                )
            default:
                return
        }
    }

    render() {
        const { digit } = this.props

        return (
            <div className="Digit-container">
                { this.renderDigit(digit) }
            </div>
        )
    }
}

export default Digit
