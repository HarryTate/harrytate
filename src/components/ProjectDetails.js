import React from "react"
import ImageGallery from "react-image-gallery"

const ProjectDetails = ({
  images,
  name,
  client,
  techUsed,
  brief,
  date,
  requirements,
  siteLink,
  repoLink,
}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="half order-tablet-portrait-up-second">
            <ImageGallery
              showPlayButton={false}
              showFullscreenButton={false}
              items={images}
            />
          </div>
          <div className="half order-tablet-portrait-up-first">
            <div className="project-info">
              <dl className="project-info__data">
                <dt className="project-info__data-title">Project Name:</dt>
                <dd className="project-info__data-info">{name}</dd>
              </dl>
              <dl className="project-info__data">
                <dt className="project-info__data-title">Client:</dt>
                <dd className="project-info__data-info">{client}</dd>
              </dl>
              <dl className="project-info__data">
                <dt className="project-info__data-title">Date:</dt>
                <dd className="project-info__data-info">{date}</dd>
              </dl>
              <dl className="project-info__data">
                <dt className="project-info__data-title">Tech:</dt>
                <dd className="project-info__data-info">
                  {techUsed.map((tech, index) => (index ? ", " : "") + tech)}
                </dd>
              </dl>
            </div>
            <div className="project-content">
              <h2 className="project-content__title">Project Brief</h2>
              {brief}
              <h2 className="project-content__title">Requirements</h2>
              {requirements}
              <a
                href={siteLink}
                className="btn btn__outline btn__outline--dark-blue mr--half"
                target="_blank"
                rel="noopener noreferrer"
              >
                View site
              </a>
              <a
                href={repoLink}
                className="btn btn__outline btn__outline--dark-blue"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails
