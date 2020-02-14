import React, { Component } from "react"
import "../styles/main.scss"

export default class HeroHome extends Component {
  render() {
    return (
      <section className="hero-home">
        <h1 className="hero-home__heading">{this.props.name}</h1>
        <p className="hero-home__subtitle">{this.props.content}</p>
      </section>
    )
  }
}
