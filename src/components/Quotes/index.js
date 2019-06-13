import React, { useContext } from 'react'
import { StaticQuery, graphql } from 'gatsby'
// import { TimerContext } from '../Timer'

import './index.styl'

const Quotes = () => (
  // const { state: timerState, dispatch } = useContext(TimerContext)

	<StaticQuery
		query={graphql`
			query TimerQuotesQuery {
			  allQuotesJson {
			    edges {
			      node {
			        quote
			      }
			    }
			  }
			}
		`}
		render={data => (
			// {timerState.currentSeconds === 0
   //        && (<div>{getQuotes(data)}</div>)}
      <p className="Quotes">{getQuotes(data)}</p>
		)}
	/>
)

function getQuotes(data) {
	const quotesArray = data.allQuotesJson.edges
	const randomQuoteObj = quotesArray[Math.floor(Math.random()*quotesArray.length)].node.quote
	const quoteText = JSON.stringify(randomQuoteObj)

	return quoteText
}

export default Quotes