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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus a
                hic consectetur fuga autem nam repudiandae vel ut unde
                excepturi? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reiciendis consequatur temporibus facilis beatae in minus
                ratione, unde praesentium, laborum quisquam debitis impedit?
              </p>
              <p className="intro__content-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                dolorum in consequatur quisquam, dolor magnam, maiores
                voluptates velit deleniti dolorem facilis? Eum asperiores harum
                voluptatibus eaque iure! Nulla nemo, assumenda dignissimos
                repudiandae fuga molestias amet! Dolor, repellendus hic vel
                quasi quisquam nisi commodi deserunt temporibus? Deleniti cum
                enim ullam excepturi.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
