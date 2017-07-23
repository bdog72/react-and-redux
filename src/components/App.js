import React, { Component } from 'react'
import Home from './Home/Home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
export default class App extends Component {
  render () {
    return (
      <RRouter />
    )
  }
}

const RRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={HomeP} />
      <Route path='/about' component={About} />
      <Route path='/topics' component={Topics} />
    </div>
  </Router>
)

const HomeP = () => (
  <div>
    <Home />
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
  </div>
)
const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
)
