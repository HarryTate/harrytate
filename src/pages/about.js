import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"
import Callout from "../components/Callout"
import harry from "../images/Harry.jpg"
import cmi from "../images/cmi.svg"
import creativeAsset from "../images/creative-asset.png"
import das from "../images/das.png"
import harryOG from "../images/opengrah/harry-og.jpg"

const about = ({ data }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content={`${data.site.siteMetadata.title} | About`}
        />
        <meta
          property="og:description"
          content="Harry Tate is a Junior Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
        />
        <meta property="og:image" content={harryOG} />
        <link rel="canonical" href="http://harrytate.co.uk" />
        <meta name="title" content={`${data.site.siteMetadata.title}`} />
        <meta
          name="description"
          content="Harry Tate is a junior Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
        />
        <meta name="robots" content="index, follow" />
        <title>{`${data.site.siteMetadata.title} | About`}</title>
      </Helmet>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </strong>
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                magnam reprehenderit vero adipisci blanditiis repellendus, odio
                quaerat similique sit nulla velit fuga dolorum quos ea numquam
                dolor asperiores alias! Repudiandae.
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
                src={das}
                alt="Creative Asset Logo"
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
