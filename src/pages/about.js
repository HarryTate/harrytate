import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"
import harry from "../images/Harry.jpg"
import cmi from "../images/cmi.svg"
import creativeAsset from "../images/creative-asset.png"
import das from "../images/das.png"

const about = () => {
  return (
    <React.Fragment>
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
                  Obcaecati culpa aspernatur,
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
