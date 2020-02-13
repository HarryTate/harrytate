import React, { Component } from 'react'
import { Link } from "gatsby"

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <ul>
        <li><Link className="d-block" to="/about/">About</Link></li>
        <li><Link className="d-block" to="/projects/">Projects</Link></li>
        <li><Link className="d-block" to="/contact/">Contact</Link></li>
      </ul>
      </React.Fragment>
      )
    }
  }
  