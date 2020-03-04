import React from "react"
import { Link } from "gatsby"
export const Callout = ({
  color,
  text,
  buttonText,
  buttonLink,
  buttonColor,
}) => {
  return (
    <section className={`section section--${color}`}>
      <div className="container">
        <div className="callout">
          <h2 className="callout__heading">{text}</h2>
          <Link
            to={`/${buttonLink}/`}
            className={`btn btn__outline btn__outline--${buttonColor}`}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Callout
