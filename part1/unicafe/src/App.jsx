import { useState } from 'react'
import './App.css'


const Header = (props) => {
  return (<h1>{props.text}</h1>)
}

const FeedbackButton = (props) => {
  return (<button onClick = {props.onClick}>{props.name}</button>)
}

const StatisticLine = (props) => {
  return (<tr><th>{props.text}</th><th>{props.value}</th></tr>)
}

const Statistics = (props) => {
  const sum = (props.good + props.neutral + props.bad)
  if (sum)
    return (
      <tbody>
        <StatisticLine text="good" value={props.good}/>
        <StatisticLine text="neutral" value={props.neutral}/>
        <StatisticLine text="bad" value={props.bad}/>
        <StatisticLine text="average " value={(props.good + props.bad) / sum}/>
        <StatisticLine text="positive " value={`${props.good / sum}%`}/>
      </tbody>
    )
  else return <p>No feedback given</p>
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