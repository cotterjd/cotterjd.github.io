import PropTypes from 'prop-types'
import quotes from './quotes.js'

export function RandomQuote(props) {
  return (
    <div style={{ paddingBottom: 15, textAlign: `center` }}>
      {getRandomQuote()}
    </div>
  );

  function getRandomQuote () {
    return quotes[Math.floor(Math.random()*quotes.length)]
  }
}

RandomQuote.propTypes = {}

export default RandomQuote;
