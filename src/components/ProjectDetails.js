import React from "react"
import ImageGallery from "react-image-gallery"

const ProjectDetails = ({ images, name, client, techUsed, brief }) => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="half">
              <div className="project-info">
                <h2 className="project-info__title">Project Details</h2>
                <dl className="project-info__data">
                  <dt className="project-info__data-title">Project Name:</dt>
                  <dd className="project-info__data-info">{name}</dd>
                </dl>
                <dl className="project-info__data">
                  <dt className="project-info__data-title">Client:</dt>
                  <dd className="project-info__data-info">{client}</dd>
                </dl>
                <dl className="project-info__data">
                  <dt className="project-info__data-title">Tech:</dt>
                  <dd className="project-info__data-info">
                    {techUsed.map((tech, index) => (index ? ", " : "") + tech)}
                  </dd>
                </dl>
              </div>
              <h2>Project Brief</h2>
              {brief}
            </div>
            <div className="half">
              <ImageGallery
                showPlayButton={false}
                showFullscreenButton={false}
                items={images}
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ProjectDetails
