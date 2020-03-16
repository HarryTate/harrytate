import React from "react"
import Social from "../components/Social"

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
        <Social centered={true} />
      </div>
    </div>
  )
}

export default ContactDetails
