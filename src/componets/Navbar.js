import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
      <div className="container-fluid">
      <Link  onClick={this.props.stop} className="navbar-brand" aria-current='page' to='/'>Shraddha's Bithday</Link>
      {/* <img src="pngwing.com.png" id='pngg' alt="" /> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link onClick={this.props.stop} className="nav-link" aria-current='page' to='/'>Home</Link>
            </li>
            <li className="nav-item">
            <Link  onClick={this.props.start} className="nav-link" aria-current='page' to='/Wish'>Special Wish</Link>
            </li>
            <li className="nav-item">
            <Link  onClick={this.props.start1} className="nav-link" aria-current='page' to='/Memories'>Special Memories</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}
