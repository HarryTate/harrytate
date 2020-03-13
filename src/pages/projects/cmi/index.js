import React from "react"
import SEO from "../../../components/SEO"
import Header from "../../../components/Header"
import PageTitle from "../../../components/PageTitle"
import ProjectDetails from "../../../components/ProjectDetails"
import Footer from "../../../components/Footer"
import cmiFutureLeaders from "../../../images/projects/CMI/Future-Leaders-full.png"
import cmiIWD from "../../../images/projects/CMI/IWD-full.png"
import cmiManagement40 from "../../../images/projects/CMI/management-40-full.png"
import harryOG from "../../../images/opengraph/harry-og.jpg"

const cmi = () => {
  const images = [
    {
      original: cmiFutureLeaders,
      thumbnail: cmiFutureLeaders,
    },
    {
      original: cmiIWD,
      thumbnail: cmiIWD,
    },
    {
      original: cmiManagement40,
      thumbnail: cmiManagement40,
    },
  ]

  return (
    <React.Fragment>
      <SEO
        title="Chartered Management Institute"
        description="Harry has worked at the Chartered Management Institute since March 2018 as a Front-End Web developer. Since working here he has completed many campaigns ranging from Management 4.0 and National Apprenticeships Week."
        image={harryOG}
      />
      <Header />
      <PageTitle
        color="dark-grey"
        title="Chartered Management Institue (CMI)"
      />
      <ProjectDetails
        images={images}
        name={"Chartered Management Institue"}
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
          {
            title: "Future Leaders",
            link:
              "https://www.managers.org.uk/individuals/become-a-member/future-leaders",
          },
          {
            title: "International Women's Day",
            link:
              "https://www.managers.org.uk/campaigns/international-womens-day",
          },
          {
            title: "Management 4.0",
            link: "https://www.managers.org.uk/campaigns/management-40/",
          },
        ]}
      />
      <Footer />
    </React.Fragment>
  )
}

export default cmi
