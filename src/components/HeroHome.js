import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

const HeroHome = props => (
  <section className="hero-home">
    <h1 className="hero-home__heading">{props.name}</h1>
    <p className="hero-home__subtitle">{props.content}</p>
    <Link className="btn btn--red" to="/about/">
      Find out more about me
    </Link>
  </section>
)

export default HeroHome
