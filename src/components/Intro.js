import React, { Component } from "react"
import "../styles/main.scss"

export default class HeroHome extends Component {
  render() {
    return (
      <section className="section">
        <div className="container intro">
          <div className="row text--center">
            <h2 className="intro__heading">Backround</h2>
          </div>
          <div className="row">
            <div className="intro__content">
              <p className="intro__content-text">
                Hi, I'm Harry and I'm passionate about building websites. I've
                been working as a web developer for at the&nbsp;
                <a className="text--bold" href="https://www.managers.org.uk">
                  Chartered Management Institue
                </a>
                &nbsp;as a Front-End Developer and am currently based in
                Cambridgeshire.
              </p>
              {/* <p className="intro__content-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                dolorum in consequatur quisquam, dolor magnam, maiores
                voluptates velit deleniti dolorem facilis?
              </p> */}
            </div>
          </div>
          <div className="row">
            <a href="" className="btn">
              Find out more about me
            </a>
          </div>
        </div>
      </section>
    )
  }
}
