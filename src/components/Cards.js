import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"
import pplBuilding from "../images/ppl-building.jpg"
import helpingMindsStudent from "../images/helping-minds-student.jpg"
import dasController from "../images/das-controller.jpg"
import cmiBusinessMan from "../images/cmi.jpg"
import orsettHeathCard from "../images/orsett-heath-card.png"
import searchAirCard from "../images/search-air-card.png"


const Cards = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section--heading text--blue">Recent Work</h2>
        <div className="cards">
          <Link
            to="/projects/search-air/"
            className="card"
            style={{ backgroundImage: `url(${searchAirCard})` }}
          >
            <div className="card__content">
              <h3 className="card__heading">Search Air</h3>
              <p className="card__text">Compressed Air Solutions</p>
            </div>
          </Link>
          <Link
            to="/projects/orsett-heath-academy/"
            className="card"
            style={{ backgroundImage: `url(${orsettHeathCard})` }}
          >
            <div className="card__content">
              <h3 className="card__heading">Orsett Heath Academy</h3>
              <p className="card__text">A modern secondary school</p>
            </div>
          </Link>
          <Link
            to="/projects/ppl-architects/"
            className="card"
            style={{ backgroundImage: `url(${pplBuilding})` }}
          >
            <div className="card__content">
              <h3 className="card__heading">PPL Architects</h3>
              <p className="card__text">A fictional Architecture firm</p>
            </div>
          </Link>
          <Link
            to="/projects/cmi/"
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
