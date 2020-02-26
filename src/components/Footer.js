import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row row--space-evenly">
          <div className="footer-content footer-content--main-col">
            <h3 className="footer-content__heading">About Harry</h3>
            <p className="footer-content__text">
              I'm an incredibly enthuaistic Web developer who loves making
              websire and web apps. I'm currently working as a Front-End
              Developer at the Chartered Management Institute.
            </p>
          </div>
          <div className="footer-content">
            <h3 className="footer-content__heading">Explore</h3>
            <ul>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/projects/">Projects</Link>
              </li>
              <li>
                <Link to="/contact/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <h3 className="footer-content__heading">Social</h3>
            <ul className="footer-social__list">
              <li className="footer-social__item">
                <a href="https://www.linkedin.com/in/harry-tate-0576a814b/">
                  LinkedIn
                </a>
              </li>
              <li className="footer-social__item">
                <a href="https://github.com/HarryTate">Github</a>
              </li>
              <li className="footer-social__item">
                <a href="https://www.codepen.io/harrytate/">Codepen</a>
              </li>
            </ul>
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
