import React, {
  useState,
  useEffect,
  useContext,
} from 'react'
import PropTypes from 'prop-types'

import './index.styl'

const QuoteDisplay = (props) => {
  const { quote } = props

  return (
    <div className="QuoteDisplay">
      { quote }
    </div>
  )
}

export default QuoteDisplay
