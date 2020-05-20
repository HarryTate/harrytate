import React from "react"
import { Link } from "gatsby"
import Social from "../components/Social"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row row--space-between">
          <div className="footer-content footer-content--main-col">
            <h3 className="footer-content__heading">About Harry</h3>
            <p className="footer-content__text">
              I'm an incredibly enthusiastic Web developer who loves building
              websites. I'm currently working as a Front-End Developer at the
              Chartered Management Institute.
            </p>
          </div>
          <div className="footer-content">
            <h3 className="footer-content__heading">Explore</h3>
            <ul>
              <li className="mb--quarter">
                <Link to="/about/">About</Link>
              </li>
              <li className="mb--quarter">
                <Link to="/projects/">Projects</Link>
              </li>
              <li className="mb--quarter">
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h3 className="footer-content__heading">Social</h3>
            <Social />
          </div>
          <div className="footer-content">
            <h3 className="footer-content__heading">Contact</h3>
            <ul>
              <li>
                <a href="mailto:harry@harrytate.co.uk">harry@harrytate.co.uk</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
