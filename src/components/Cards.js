import React, { Component } from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

export default class Cards extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h2 className="section--heading text--blue">Projects</h2>
          <div className="cards">
            <Link to="//" className="card">
              <div className="card__content">
                <h3 className="card__heading">PPL Architects</h3>
                <p className="card__text">An Architecture firm</p>
              </div>
            </Link>
            <Link className="card">
              <div className="card__content">
                <h3 className="card__heading">Helping Minds</h3>
                <p className="card__text">
                  A website to provide support for people struggling with their
                  mental health.
                </p>
              </div>
            </Link>
            <Link className="card">
              <div className="card__content">
                <h3 className="card__heading">Seamlessly visualize quality</h3>
                <p className="card__text">
                  Collaboratively administrate empowered markets via
                  plug-and-play networks.
                </p>
              </div>
            </Link>
            <Link className="card">
              <div className="card__content">
                <h3 className="card__heading">Seamlessly visualize quality</h3>
                <p className="card__text">
                  Collaboratively administrate empowered markets via
                  plug-and-play networks.
                </p>
              </div>
            </Link>
          </div>
          <Link to="/projects/" className="btn btn--outline">
            View all projects
          </Link>
        </div>
      </section>
    )
  }
}
