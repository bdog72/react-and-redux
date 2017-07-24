import React, { Component } from 'react'
import Home from './Home/Home'
import Navigation from './Nav/Navigation'
import Authenticate from './Authenticate'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
      <Navigation isAuthed />
      {/* <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
      </ul> */}
      <hr />
      <Route exact path='/' component={HomeP} />
      <Route path='/auth' component={AuthenticateP} />
      <Route path='/topics' component={Topics} />
    </div>
  </Router>
)

const HomeP = () => (
  <div>
    <Home />
  </div>
)
const AuthenticateP = () => (
  <div>
    <Authenticate />
  </div>
)
const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
)
