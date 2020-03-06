import React from "react"

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
          <li>
            <a href="https://github.com/HarryTate">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/harry-tate-0576a814b/">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://codepen.io/harrytate">Codepen</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactDetails
