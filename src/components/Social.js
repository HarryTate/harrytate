import React from "react"
import codepen from "../images/social-icons/codepen.svg"
import github from "../images/social-icons/github.svg"
import linkedin from "../images/social-icons/linkedin.svg"

export const Social = ({ centered = false }) => {
  return (
    <ul className={`social ${centered ? "social--centered" : ""}`}>
      <li className="social__list-item">
        <a href="https://github.com/HarryTate">
          <span className="sr-only">Github</span>
          <img src={github} alt="Github" className="social__icon" />
        </a>
      </li>
      <li className="social__list-item">
        <a href="https://www.linkedin.com/in/harry-tate-0576a814b/">
          <span className="sr-only">Linkedin</span>
          <img src={linkedin} alt="Linkedin" className="social__icon" />
        </a>
      </li>
      <li className="social__list-item">
        <a href="https://codepen.io/harrytate">
          <span className="sr-only">Codepen</span>
          <img src={codepen} alt="Codepen" className="social__icon" />
        </a>
      </li>
    </ul>
  )
}

export default Social
