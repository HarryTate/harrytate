import React, { Component } from "react"
import "../styles/main.scss"
import html5 from "../images/HTML5.png"
import css from "../images/CSS.png"
import javascript from "../images/Javascript.png"
import jQuery from "../images/jQuery.png"
import sass from "../images/Sass.png"
import git from "../images/git.png"
import webpack from "../images/webpack.png"
import reactIcon from "../images/react.png"

export default class Skills extends Component {
  state = {
    skills: [
      {
        image: html5,
        title: "HTML5",
      },
      {
        image: css,
        title: "CSS",
      },
      {
        image: javascript,
        title: "JavaScript",
      },
      {
        image: jQuery,
        title: "jQuery",
      },
      {
        image: sass,
        title: "Sass",
      },
      {
        image: git,
        title: "git",
      },
      {
        image: reactIcon,
        title: "React",
      },
      {
        image: webpack,
        title: "Webpack",
      },
    ],
  }
  render() {
    return (
      <section className="section section--dark-grey">
        <div className="container">
          <h2 className="skills__heading">Skills</h2>
          <ul className="skills">
            {this.state.skills.map((skills, i) => (
              <li key={i} className="skill">
                <img className="skill__icon" src={skills.image} alt="" />
                <div className="skill__body">
                  <h3 className="skill__title">{skills.title}</h3>
                  <p className="skill-description">{skills.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
}
