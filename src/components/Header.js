import React, { Component } from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/" className="header__logo">
          {"< "}Harry Tate {"/>"}
        </Link>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/about/">About</Link>
            </li>
            <li className="nav__item">
              <Link to="/projects/">Projects</Link>
            </li>
            <li className="nav__item">
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
