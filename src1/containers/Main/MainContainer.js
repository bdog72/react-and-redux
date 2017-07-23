import React, { Component } from 'react'
import './styles.css'
export default class MainContainer extends Component {
  render () {
    return (
      <div className='mainContainer'>
        <div className='mainInnerContainer'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
