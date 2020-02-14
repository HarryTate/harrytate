import React, { Component } from "react"
import "../styles/main.scss"

export default class Skills extends Component {
  state = {
    skills: [
      {
        title: "HTML5",
        description: "lorem ipsum al to dorrr",
      },
      {
        title: "CSS",
        description: "lorem ipsum al to dorrr",
      },
      {
        title: "Javascript",
        description: "lorem ipsum al to dorrr nrj krj rgjk ekj ejk",
      },
      {
        title: "fourth project",
        description: "lorem ipsum al to dorrr nrj krj rgjk ekj ejk",
      },
    ],
  }
  render() {
    return (
      <section className="section section--cream">
        <div className="container">
          <div className="skills">
            <h2 className="skills__heading">Skills</h2>
            {this.state.skills.map((skills, i) => (
              <div key={i} className="skills-card">
                <div className="skills__body">
                  <h3 className="skills__title">{skills.title}</h3>
                  <p className="skills-description">{skills.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}
