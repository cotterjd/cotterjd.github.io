import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fairQuotes, goodQuotes, greatQuotes} from './quotes.js'

export function RandomQuote(props) {
  return (
    <div style={{ paddingBottom: 15, textAlign: `center` }}>
      {getRandomQuote()}
    </div>
  );

  function getRandomQuote () {
    const quotes = [...fairQuotes, ...goodQuotes, ...goodQuotes, ...greatQuotes]
    return quotes[Math.floor(Math.random()*quotes.length)]
  }
}

RandomQuote.propTypes = {}

export default RandomQuote;
