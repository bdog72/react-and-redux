import React, { Component } from 'react'
import Authenticate1 from './Authenticate1'
import auth from '../helpers/auth'
export default class Authenticate extends Component {
  handleAuth () {
    auth().then((user) => {
      console.log('Authed User', user)
    })
  }
  render () {
    return (
      <Authenticate1
        isFetching={false}
        error=''
        onAuth={this.handleAuth}
      />
    )
  }
}
