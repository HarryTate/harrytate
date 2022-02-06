import React from "react"
// import Seo from "../../../components/Seo"
import Header from "../../../components/Header"
import PageTitle from "../../../components/PageTitle"
import ProjectDetails from "../../../components/ProjectDetails"
import Footer from "../../../components/Footer"
import PPLMac from "../../../images/projects/PPL/Macbook.png"
import PPLMacLaptop from "../../../images/projects/PPL/Macbook-laptop.png"
import PPLHome from "../../../images/projects/PPL/home-full.png"
import PPLContact from "../../../images/projects/PPL/contact-full.png"
import PPLServices from "../../../images/projects/PPL/services-full.png"
import harryOG from "../../../images/opengraph/harry-og.jpg"
const PPLArchitects = () => {
  const images = [
    {
      original: PPLMac,
      thumbnail: PPLMac,
    },
    {
      original: PPLMacLaptop,
      thumbnail: PPLMacLaptop,
    },
    {
      original: PPLHome,
      thumbnail: PPLHome,
    },
    {
      original: PPLServices,
      thumbnail: PPLServices,
    },
    {
      original: PPLContact,
      thumbnail: PPLContact,
    },
  ]
  return (
    <React.Fragment>
      <Seo
        title="Home"
        description="PPL Architects is a webiste built by Front End Developer Harry Tate. PPL Architects is a fictional Architecture practice that was completed for a University project by students at the University of Manchester"
        image={harryOG}
      />
      <Header />
      <PageTitle color="dark-grey" title="PPL Architects" />
      <ProjectDetails
        images={images}
        name={"PPL Architects"}
        client={"Student Group at the University of Manchester"}
        techUsed={[
          "HTML",
          "SCSS",
          "JavaScript",
          "Parcel",
          "Netlify",
          "Bootstrap",
        ]}
        date={"January 2020"}
        brief={
          <p className="project-content__text">
            I was asked by a group of students at the University of Manchester
            to create a basic website for a fictional architecture practice. My
            job was to come up with a layout and design for the website and
            deliver it in a tight deadline. Due to the short timeline, I used
            the bootstrap framework for rapid development, parcel to bundle the
            project and Netlify for fast deployment.
          </p>
        }
        requirements={
          <ul className="project-content__list">
            <li>Mobile responsive</li>
            <li>Email data capture contact form</li>
            <li>Video home screen</li>
            <li>Modern design</li>
            <li>Full branding implementation</li>
          </ul>
        }
        siteLink={"https://ppl-architects.netlify.com/"}
        repoLink={"https://github.com/HarryTate/PeoplePlaceLifestyle"}
      />
      <Footer />
    </React.Fragment>
  )
}

export default PPLArchitects
