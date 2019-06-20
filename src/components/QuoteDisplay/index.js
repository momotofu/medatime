import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './index.styl'

const QuoteDisplay = (props) => {
  const {
    quote,
    reference,
    display,
  } = props

  return (
    <div className={cn(
      "QuoteDisplay",
    { ["QuoteDisplay-visible"]: display },
    )}>
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
  quote: PropTypes.string,
  reference: PropTypes.string,
}

export default QuoteDisplay
