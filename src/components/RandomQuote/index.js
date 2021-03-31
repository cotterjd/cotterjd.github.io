import PropTypes from "prop-types"
import quotes from "./quotes.js"

export function RandomQuote(props) {
  return (
    <span style={{ paddingBottom: 15, textAlign: `center` }}>
      {getRandomQuote()}
    </span>
  )

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    console.log(quotes, quotes.length, randomIndex)
    return quotes[randomIndex]
  }
}

RandomQuote.propTypes = {}

export default RandomQuote
