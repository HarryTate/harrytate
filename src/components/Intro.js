import React from "react"
import "../styles/main.scss"

const Intro = () => (
  <section className="section intro">
    <div className="container">
      <div className="intro__content">
        <p className="intro__content-text">
          Hi, I'm Harry and I'm passionate about building responsive, user
          friendly websites. I'm currently working at the&nbsp;
          <a
            className="text--bold"
            href="https://www.managers.org.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chartered Management Institute
          </a>
          &nbsp;as a Front-End Developer. In 2017 I completed a degree in
          Computing BSc at Nottingham Trent University.
        </p>
      </div>
    </div>
  </section>
)

export default Intro
