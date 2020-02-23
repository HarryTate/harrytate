import React, { Component } from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

export default class HeroHome extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="hero-home">
          <h1 className="hero-home__heading">{this.props.name}</h1>
          <p className="hero-home__subtitle">{this.props.content}</p>
          <Link className="btn btn__red" to="/about/">
            Find out more about me
          </Link>
        </section>
        <svg
          className="display--block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
        >
          <path
            fill="#3284e2"
            fill-opacity="1"
            d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,48C1120,32,1280,32,1360,32L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </React.Fragment>
    )
  }
}
