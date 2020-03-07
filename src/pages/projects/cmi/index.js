import React from "react"
import Header from "../../../components/Header"
import PageTitle from "../../../components/PageTitle"
import ProjectDetails from "../../../components/ProjectDetails"
import Footer from "../../../components/Footer"

const cmi = () => {
  const images = [
    {
      original: "https://placeimg.com/640/480/any",
      thumbnail: "https://placeimg.com/640/480/any",
    },
    {
      original: "https://placeimg.com/640/480/any",
      thumbnail: "https://placeimg.com/640/480/any",
    },
    {
      original: "https://placeimg.com/640/480/any",
      thumbnail: "https://placeimg.com/640/480/any",
    },
  ]

  return (
    <React.Fragment>
      <Header />
      <PageTitle
        color="dark-grey"
        title="Chartered Management Institue (CMI)"
      />
      <ProjectDetails
        images={images}
        name={"Chartered Management Institue CMI"}
        client={"Chartered Management Institute"}
        techUsed={["HTML", "CSS", "JavaScript", "jQuery", "Sitecore CMS"]}
        date={"March 2018 - Present"}
        brief={
          <p className="project-content__text">
            I started working at the Chartered Management Institute as a Junior
            Front-End Developer in 2018. My role is to build new pages on the
            site and add new functionality for people around the business. These
            usually include campaign, event and information pages.
          </p>
        }
        requirements={
          <ul className="project-content__list">
            <li>Build bespoke campaign pages defined by the marketing team</li>
            <li>
              Maintain existing web pages making design changes that meet W3C
              best practices
            </li>
            <li>Maintain SEO Standards</li>
            <li>Support the business with new digital initiatives</li>
            <li>
              Build new components for users of the CMS around the buisness to
              use
            </li>
          </ul>
        }
        featuredWork={[
          { title: "Item 1", link: "https://www.managers.org.uk/campaigns" },
          { title: "Item 2", link: "https://www.managers.org.uk/campaigns" },
          { title: "Item 3", link: "https://www.managers.org.uk/campaigns" },
        ]}
      />
      <Footer />
    </React.Fragment>
  )
}

export default cmi
