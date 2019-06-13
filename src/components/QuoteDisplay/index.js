import React, {
  useState,
  useEffect,
} from 'react'
import PropTypes from 'prop-types'

import './index.styl'

const QuoteDisplay = (props) => {
  const {
    quote,
    reference,
  } = props

  return (
    <div className="QuoteDisplay">
      <p className="QuoteDisplay-quote">
        {`"${quote}"`}
      </p>
      { reference &&
        <span className="QuoteDisplay-reference">
          {`-${reference}`}
        </span>
      }
    </div>
  )
}

QuoteDisplay.propTypes = {
  quote: PropTypes.string.isRequired,
  reference: PropTypes.string,
}

export default QuoteDisplay
