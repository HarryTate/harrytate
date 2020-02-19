import React, { Component } from "react"
import "../styles/main.scss"

export default class HeroHome extends Component {
  render() {
    return (
      <section className="section">
        <div className="container intro">
          <div className="row">
            <h2 className="intro__heading">Background</h2>
          </div>
          <div className="row">
            <div className="intro__content">
              <p className="intro__content-text">
                Hi, I'm Harry and I'm passionate about building responsive,
                websites. I've been working as a web developer at the&nbsp;
                <a
                  className="text--bold"
                  href="https://www.managers.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chartered Management Institue
                </a>
                &nbsp;as a Front-End Developer. In 2017 I completed a degree in
                Computing BSc at Nottingham Trent University.
              </p>
              {/* <p className="intro__content-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                dolorum in consequatur quisquam, dolor magnam, maiores
                voluptates velit deleniti dolorem facilis?
              </p> */}
            </div>
          </div>
          <div className="row">
            {/* <a href="#" className="btn">
              Find out more about me
            </a> */}
          </div>
        </div>
      </section>
    )
  }
}
