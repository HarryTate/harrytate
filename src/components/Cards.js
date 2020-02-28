import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"
import pplBuilding from "../images/ppl-building.jpg"
import helpingMindsStudent from "../images/helping-minds-student.jpg"
import dasController from "../images/das-controller.jpg"
import cmiBusinessMan from "../images/cmi.jpg"

const Cards = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section--heading text--blue">Recent Work</h2>
        <div className="cards">
          <Link
            to="/projects/"
            className="card"
            style={{ backgroundImage: `url(${pplBuilding})` }}
          >
            <div className="card__content">
              <h3 className="card__heading">PPL Architects</h3>
              <p className="card__text">An Architecture firm</p>
            </div>
          </Link>
          <Link
            to="/projects/"
            className="card"
            style={{ backgroundImage: `url(${helpingMindsStudent})` }}
          >
            <div className="card__content">
              <h3 className="card__heading">Helping Minds</h3>
              <p className="card__text">
                A website to provide support for people struggling with their
                mental health.
              </p>
            </div>
          </Link>
          <Link
            to="/projects/"
            className="card"
            style={{ backgroundImage: `url(${dasController})` }}
          >
            <div className="card__content">
              <h3 className="card__heading">Drone Aerial Surveying</h3>
              <p className="card__text">A start-up UAV surveying company.</p>
            </div>
          </Link>
          <Link
            to="/projects/"
            className="card"
            style={{ backgroundImage: `url(${cmiBusinessMan})` }}
          >
            <div className="card__content">
              <h3 className="card__heading">Chartered Management Institute</h3>
              <p className="card__text">
                Chartered professional body for management and leadership.
              </p>
            </div>
          </Link>
        </div>
        <div className="text--center mt--2">
          <Link
            to="/projects/"
            className="btn btn__outline btn__outline--dark-blue"
          >
            View all work I've done
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Cards
