import styled from 'styled-components'
import './App.css'
import githubIcon from './images/github.png'

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
const P = styled.p``
const Education = styled.table`
  td {
    padding: 10px 10px 10px 0;
  }
`
const SubHeader = styled.div`
  display: flex;
  justify-content: space-around;
`
const Page = styled.div`
  font-size: calc(10px + 1.3vmin);
  color: white;
  max-width: 1200px;
  margin: auto;
  padding: 50px 0 200px 0;
`
const Name = styled.span`
  font-size: 1.5em;
`
const Header = styled.div`
  display: flex;
  justify-content: center;
`
const SectionHeading = styled.div`
  font-weight: bold;
  padding: 20px 0 10px 0;
`
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  td {
    border: 1px solid white;
  }
`
const JobHeading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  span {
    font-weight: bold;
    font-style: italic;
  }
`
const ProjectHead = styled.div`
  padding: 15px 0;
`
const GithubIcon = styled.a`
  transform: translateY(10px);
`

function App() {
  return (
    <Page>
      <A href="/resume">Resume</A><br />
      <A href="https://cant-stop.vercel.app/">Can't Stop Game</A><br />
      <A href="/w2v1099">Taxes Calculator</A><br />
      <A href="/curt-calender">Calendar</A><br />
    </Page>
  );
}

export default App;
