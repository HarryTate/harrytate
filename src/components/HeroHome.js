import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

const HeroHome = props => (
  <React.Fragment>
    <section className="hero-home">
      <h1 className="hero-home__heading">{props.name}</h1>
      <p className="hero-home__subtitle">{props.content}</p>
      <Link className="btn btn--red" to="/about/">
        Find out more about me
      </Link>
    </section>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 140"
      preserveAspectRatio="xMidYMid none"
    >
      <path
        fill="#3284e2"
        fillOpacity="1"
        d="M0,128L120,117.3C240,107,480,85,720,85.3C960,85,1200,107,1320,117.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
  </React.Fragment>
)

export default HeroHome
