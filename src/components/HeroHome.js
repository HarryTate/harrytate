import React, { Component } from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

export default class HeroHome extends Component {
  render() {
    return (
      <section className="hero-home">
        <h1 className="hero-home__heading">{this.props.name}</h1>
        <p className="hero-home__subtitle">{this.props.content}</p>
        <Link className="btn btn__red" to="/about/">
          Find out about me
        </Link>
      </section>
    )
  }
}
