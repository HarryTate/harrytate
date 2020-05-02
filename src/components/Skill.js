import React from "react"
import "../styles/main.scss"
import Img from "gatsby-image"

const Skill = ({ title, image }) => {
  return (
    <li className="skill">
      <Img className="skill__icon" alt={title} fixed={image} />
      <h2 className="skill__title">{title}</h2>
    </li>
  )
}

export default Skill
