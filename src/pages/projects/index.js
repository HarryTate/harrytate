import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Header from "../../components/Header"
import PageTitle from "../../components/PageTitle"
import Footer from "../../components/Footer"
import Callout from "../../components/Callout"
import ProjectBrowse from "../../components/ProjectBrowse"
import harryOG from "../../images/opengrah/harry-og.jpg"
import pplShowcase from "../../images/showcase/ppl-showcase.png"
import helpingMindsShowcase from "../../images/showcase/helping-minds-showcase.png"
import dasShowcase from "../../images/showcase/das-showcase.png"
import cmiShowcase from "../../images/showcase/cmi-showcase.png"

const projects = ({ data }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content={`${data.site.siteMetadata.title} | Projects`}
        />
        <meta
          property="og:description"
          content="Harry Tate is a Junior Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
        />
        <meta property="og:image" content={harryOG} />
        <link rel="canonical" href="http://harrytate.co.uk" />
        <meta
          name="title"
          content={`${data.site.siteMetadata.title} | Projects`}
        />
        <meta
          name="description"
          content="Harry Tate is a Junior Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
        />
        <meta name="robots" content="index, follow" />
        <title>{`${data.site.siteMetadata.title}`}</title>
      </Helmet>
      <Header />
      <PageTitle title="Projects I've worked on" color="dark-grey" />
      <div className="section">
        <div className="container">
          <div className="row row--space-around row--flex-wrap">
            <ProjectBrowse
              title="PPL Architecture"
              link="/projects/ppl-architects/"
              img={pplShowcase}
            />
            <ProjectBrowse
              title="Helping Minds"
              link="/projects/helping-minds/"
              img={helpingMindsShowcase}
            />
            <ProjectBrowse
              title="Drone Aerial Surveying"
              link="/projects/drone-aerial-surveying/"
              img={dasShowcase}
            />
            <ProjectBrowse
              title="Chartered Management Institute"
              link="/projects/cmi/"
              img={cmiShowcase}
            />
          </div>
        </div>
      </div>
      <Callout
        color="dark-blue"
        text="Like what you see?"
        buttonText="Get in touch"
        buttonLink="contact"
        buttonColor="red"
      />
      <Footer />
    </React.Fragment>
  )
}
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default projects
