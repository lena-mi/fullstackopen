import { useState } from 'react'


const Header = (props) => {
  return (<h1>{props.text}</h1>)
}

const FeedbackButton = (props) => {
  return (<button onClick = {props.onClick}>{props.name}</button>)
}

const Statistics = (props) => {
  return (
    <li>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </li>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log('clicked good')
    setGood(good =>  good + 1)
  }

  const handleNeutralClick = () => {
    console.log('clicked neutral')
    setNeutral(neutral => neutral + 1)
  }

  const handleBadClick = () => {
    console.log('clicked bad')
    setBad(bad => bad + 1)
  }

  return (
    <div>
      <Header text = "give feedback"/>
      <FeedbackButton  name = "good" onClick = {handleGoodClick} />
      <FeedbackButton name = "neutral" onClick = {handleNeutralClick}/>
      <FeedbackButton name = "bad" onClick = {handleBadClick}/>
      <Header text = "statistics"/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App