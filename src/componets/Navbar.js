import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  music2 = new Audio('banjauga.mp3')
  pause = ()=> {
    this.music2.pause();
  }
  render() {
    return (
      <nav className="navbar">
      <div className="container-fluid">
      <Link  onClick={this.pause} className="navbar-brand" aria-current='page' to='/'>Shraddha's Bithday</Link>
      {/* <img src="pngwing.com.png" id='pngg' alt="" /> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
          <a className='nav-link' href="/">Best Memories With You</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href='/'>Special wish For You</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href='/'>Special Song For You</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}
