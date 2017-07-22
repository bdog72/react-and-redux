import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainContainer from '../containers/Main/MainContainer'
import HomeContainer from '../containers/Home/HomeContainer'

export default class ReactRoute extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={MainContainer} />
          <Route path='/homecontainer' component={HomeContainer} />
        </div>
      </Router>
    )
  }
}
