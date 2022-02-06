import React from "react"
// import Seo from "../../../components/Seo"
import Header from "../../../components/Header"
import PageTitle from "../../../components/PageTitle"
import ProjectDetails from "../../../components/ProjectDetails"
import Footer from "../../../components/Footer"
import dasMacbookLaptop from "../../../images/projects/DAS/macbook-laptop.png"
import dasInfrastructure from "../../../images/projects/DAS/infrastructure-full.png"
import dasDroneshot from "../../..//images/projects/DAS/droneshot-full.png"
import harryOG from "../../../images/opengraph/harry-og.jpg"

const DroneAerialSurveying = () => {
  const images = [
    {
      original: dasMacbookLaptop,
      thumbnail: dasMacbookLaptop,
    },
    {
      original: dasInfrastructure,
      thumbnail: dasInfrastructure,
    },
    {
      original: dasDroneshot,
      thumbnail: dasDroneshot,
    },
  ]
  return (
    <React.Fragment>
      <Seo
        title="Drone Aerial Surveying"
        description="Drone Aerial Surveying are a start up that provide UAV Surveys in
      Aerial Surveys based in the East of England."
        image={harryOG}
      />
      <Header />
      <PageTitle color="dark-grey" title="Drone Aerial Surveying" />
      <ProjectDetails
        images={images}
        name={"Drone Aerial Surveying"}
        client={"Drone Aerial Surveying"}
        techUsed={["HTML", "CSS", "jQuery", "PHP"]}
        date={"October 2017"}
        brief={
          <p className="project-content__text">
            Drone Aerial Surveying are a start up that provide UAV Surveys in
            Aerial Surveys based in the East of England. They required a website
            to attract attention to there services. Drone Aerial Surveying were
            in fact my first website that I published. I'm hoping to complete a
            redevelopment of this site in 2020.
          </p>
        }
        requirements={
          <ul className="project-content__list">
            <li>Video homescreen</li>
            <li>Contact form</li>
            <li>Fade in on scroll images</li>
            <li>Smooth scrolling navigation</li>
          </ul>
        }
      />
      <Footer />
    </React.Fragment>
  )
}

export default DroneAerialSurveying
