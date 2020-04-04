import React from "react"
const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2 className="contact-form__heading">Get in touch</h2>
      <form
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/contact/success"
      >
        <input type="hidden" name="contact" value="contact" />
        <input type="hidden" name="bot-field" />
        <fieldset>
          <div>
            <label htmlFor="yourName" className="sr-only">
              Your Name
            </label>
            <input
              className="contact-form__field"
              type="text"
              name="fullName"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="yourEmail" className="sr-only">
              Your Email
            </label>
            <input
              className="contact-form__field"
              type="email"
              name="email"
              placeholder="Your Email Address"
            />
          </div>
          <div className="mb--1">
            <label htmlFor="yourEmail" className="sr-only">
              How can I help?
            </label>
            <textarea
              className="contact-form__field contact-form__field--textarea"
              name="message"
              placeholder="How can I help?"
            ></textarea>
          </div>
        </fieldset>
        <div>
          <button className="btn btn--red btn--lrg" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
