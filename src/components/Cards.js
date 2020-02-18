import React, { Component } from "react"
import "../styles/main.scss"

export default class Cards extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="cards">
            <div className="card">
              <img
                className="card__img"
                src="https://source.unsplash.com/600x300/"
                alt="sameple"
              />
              <div className="card__text">
                <h3>Seamlessly visualize quality</h3>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card__img"
                src="https://source.unsplash.com/600x300/"
                alt="sameple"
              />
              <div className="card__text">
                <h3>Completely Synergize</h3>
                <p>
                  Dramatically engage seamlessly visualize quality intellectual
                  capital without superior collaboration and idea-sharing.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card__img"
                src="https://source.unsplash.com/600x300/"
                alt="sameple"
              />
              <div className="card__text">
                <h3>Dynamically Procrastinate</h3>
                <p>
                  Completely synergize resource taxing relationships via premier
                  niche markets.
                </p>
              </div>
            </div>
            <div className="card">
              <img
                className="card__img"
                src="https://source.unsplash.com/600x300/"
                alt="sameple"
              />
              <div className="card__text">
                <h3>Dynamically innovate supply chains</h3>
                <p>
                  Holisticly predominate extensible testing procedures for
                  reliable supply chains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
