import React from "react"
import { Link } from "gatsby"
const ProjectBrowse = ({ title, link, img }) => {
  return (
    <React.Fragment>
      <Link
        to={link}
        className="project-browse"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="project-browse__content">
          <div>
            <h2 className="project-browse__heading">{title}</h2>
            <p className="project-browse__cta">View Project</p>
          </div>
        </div>
      </Link>
    </React.Fragment>
  )
}

export default ProjectBrowse
