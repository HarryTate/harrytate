import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/Seo"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"
import Callout from "../components/Callout"
import harry from "../images/Harry.jpg"
import cmi from "../images/cmi.svg"
import creativeAsset from "../images/creative-asset.png"
import speedAgency from "../images/speed-agency.svg"
import bgl from "../images/bgl.svg"
import swecet from "../images/swecet.png"



import harryOG from "../images/opengraph/harry-og.jpg"

const about = ({ data }) => {
  return (
    <React.Fragment>
      <Seo
        title="About"
        description="Harry Tate is a Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
        image={harryOG}
      />
      <Header />
      <PageTitle title="About Me" color="red" />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="about__img">
              <img src={harry} alt="Harry" />
            </div>
            <div className="about__text">
              <h2 className="about__heading">Harry Tate</h2>
              <p>
                <strong>
                  Hi! I'm Harry, a Peterborough based Web developer who is
                  passionate about all things web related.
                </strong>
              </p>
              <p>
                I'm currently working as a Front-End Developer at a digital agency.
                I enjoy writing in languages such as <strong>HTML</strong>, <strong>CSS</strong>, <strong>Javascript</strong> and <strong>PHP</strong>.
                Outside of work I enjoy going to the gym and
                have recently taken up running hoping to one day complete a 10k
                charity event.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--dark-blue">
        <div className="container">
          <h2 className="section--heading">Companies I've worked with</h2>
          <div className="row logo-row">
            <div className="logo-row__item">
              <img className="logo-row__img" src={cmi} alt="CMI Logo" />
            </div>
            <div className="logo-row__item">
              <img
                className="logo-row__img logo-row__img"
                src={creativeAsset}
                alt="Creative Asset Logo"
              />
            </div>
            <div className="logo-row__item">
              <img
                className="logo-row__img logo-row__img"
                src={speedAgency}
                alt="Speed Agency Logo"
              />
            </div>
            <div className="logo-row__item">
              <img
                className="logo-row__img logo-row__img"
                src={bgl}
                alt="BGL Logo"
              />
            </div>
            <div className="logo-row__item">
              <img
                className="logo-row__img logo-row__img"
                src={swecet}
                alt="South West Essex Community Education Trust Logo"
              />
            </div>
          </div>
        </div>
      </section>
      <Callout
        color="red"
        text="Want to see some of my work?"
        buttonText="View Projects"
        buttonLink="projects"
        buttonColor="dark-blue"
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

export default about
