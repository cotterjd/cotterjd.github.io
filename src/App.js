import styled from 'styled-components'
import { RandomQuote } from './components'
import './App.css'
import githubIcon from './images/github.png'
import nodeIcon from './images/node_logo.png'

export const A = styled.a`
  :link {
    color: #008080;
  }
  :visited {
    color: #008080;
  }
  :hover {
    color: blue;
  }
`
const Page = styled.div`
  font-size: calc(10px + 1.3vmin);
  color: white;
  max-width: 1200px;
  margin: auto;
  padding: 50px 0 200px 0;
`

function App() {
  return (
    <Page>
      <A href="/resume">Resume</A><br />
      <A href="https://cant-stop.cotterslist.com/">Can't Stop Game</A><br />
      <A href="/w2v1099">Taxes Calculator</A><br />
      <A href="/curt-calender">Calendar</A><br />

      <img src={nodeIcon} />
      <div>
        <strong>Random quote of the day:</strong> <RandomQuote />
      </div>
    </Page>
  );
}

export default App;
