import React from "react"
import codepen from "../images/social-icons/codepen.svg"
import github from "../images/social-icons/github.svg"
import linkedin from "../images/social-icons/linkedin.svg"

const ContactDetails = () => {
  return (
    <div className="contact-details">
      <h2 className="contact-details__heading">Details</h2>
      <div className="contact-details__item">
        <p className="contact-details__subheading">Email</p>
        <p className="contact-details__details">
          <a href="mailto:harry@harrytate.co.uk">harry@harrytate.co.uk</a>
        </p>
      </div>
      <div className="contact-details__item">
        <p className="contact-details__subheading">Follow</p>
        <ul className="contact-details__details">
          <li className="contact-details__list-item">
            <a href="https://github.com/HarryTate">
              <span className="sr-only">Github</span>
              <img
                src={github}
                alt="Codepen"
                className="contact-details__icon"
              />
            </a>
          </li>
          <li className="contact-details__list-item">
            <a href="https://www.linkedin.com/in/harry-tate-0576a814b/">
              <span className="sr-only">Linkedin</span>
              <img
                src={linkedin}
                alt="Codepen"
                className="contact-details__icon"
              />
            </a>
          </li>
          <li className="contact-details__list-item">
            <a href="https://codepen.io/harrytate">
              <span className="sr-only">Codepen</span>
              <img
                src={codepen}
                alt="Codepen"
                className="contact-details__icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactDetails
