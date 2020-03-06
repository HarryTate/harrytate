import React from "react"
import Header from "../../../components/Header"
import PageTitle from "../../../components/PageTitle"
import ProjectDetails from "../../../components/ProjectDetails"
import Footer from "../../../components/Footer"
import helpingMindsMacbookLaptop from "../../../images/projects/helping-minds/macbook-laptop.png"
import helpingMindsAbout from "../../../images/projects/helping-minds/about-full.png"
import helpingMindsMentalHealth from "../../../images/projects/helping-minds/mental-health-full.png"
import helpingMindsSignsSymptoms from "../../../images/projects/helping-minds/signs-symptoms-full.png"

const HelpingMinds = () => {
  const images = [
    {
      original: helpingMindsMacbookLaptop,
      thumbnail: helpingMindsMacbookLaptop,
    },
    {
      original: helpingMindsAbout,
      thumbnail: helpingMindsAbout,
    },
    {
      original: helpingMindsMentalHealth,
      thumbnail: helpingMindsMentalHealth,
    },
    {
      original: helpingMindsSignsSymptoms,
      thumbnail: helpingMindsSignsSymptoms,
    },
  ]
  return (
    <React.Fragment>
      <Header />
      <PageTitle color="dark-grey" title="Helping Minds" />
      <ProjectDetails
        images={images}
        name={"PPL Architects"}
        client={"Student from Nottingham Trent University"}
        techUsed={[
          "HTML",
          "CSS",
          "Javascript",
          "jQuery",
          "Netlify",
          "Bootstrap",
        ]}
        date={"January 2018"}
        brief={
          <p className="project-content__text">
            I was asked by a student at Nottingham Trent University to build a
            website for their Final Year project. They were tasked with coming
            up with a product that students could use. I came up with a design
            and advised on the layout of the site. From there I created a mobile
            responsive, one page website with sections on signs and symptoms,
            resources, contact, mental health and students, top tips and
            introduction.
          </p>
        }
        requirements={
          <ul className="project-content__list">
            <li>Mobile responsive</li>
            <li>Data capture contact form</li>
            <li>Document Resource links</li>
            <li>Smooth Scroll Navigation</li>
            <li>One page site</li>
          </ul>
        }
        siteLink={"https://helping-minds.netlify.com/"}
        repoLink={"https://github.com/HarryTate/helpingminds"}
      />
      <Footer />
    </React.Fragment>
  )
}

export default HelpingMinds
