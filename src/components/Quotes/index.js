import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import { TimerContext } from '../Timer'
import QuoteDisplay from '../QuoteDisplay'

import './index.styl'

const Quotes = (props) => (
  // const { state: timerState, dispatch } = useContext(TimerContext)
	<StaticQuery
		query={graphql`
			query TimerQuotesQuery {
			  allQuotesJson {
		      nodes {
		        quote
		        reference
		      }
			  }
			}
		`}
		render={data => (
      <>
      	<QuoteDisplay
      		{...getQuotes(data)}
      	/>
      </>
		)}
	/>
)

function getQuotes(data) {
	const quotesArray = data.allQuotesJson.nodes
	const randomQuoteObj = quotesArray[Math.floor(Math.random()*quotesArray.length)]

	return randomQuoteObj
}

export default Quotes