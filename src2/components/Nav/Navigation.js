// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// export default class Navigation extends Component {
//   render () {
//     return (
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/about'>About</Link></li>
//         <li><Link to='/topics'>Topics</Link></li>
//       </ul>
//     )
//   }
// }

import React from 'react'
import { Link } from 'react-router-dom'
import './nav.scss'
function NavLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
      <li><Link to='/' className='link'>{'HomeBoy'}</Link></li>
    </ul>
    : null
}

function ActionLinks ({isAuthed}) {
  return isAuthed === true
    ? <ul>
      <li className='link'>NEW DUCKS</li>
      <li><Link to='/logout' className='link'>{'Logout'}</Link></li>
    </ul>
    : <ul>
      <li><Link to='/auth' className='link'>{'Authenticate'}</Link></li>
    </ul>
}

export default function Navigation ({isAuthed}) {
  return (
    <div className='navContainer'>
      <nav className='navContainer1'>
        <NavLinks isAuthed={isAuthed} />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  )
}
