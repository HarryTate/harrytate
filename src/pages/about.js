import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"
import harry from "../images/Harry.jpg"

const about = ({ data }) => {
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
              <p>
                <strong>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati culpa aspernatur, inventore qui quis id porro esse
                  facilis doloremque blanditiis.
                </strong>
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
                magnam reprehenderit vero adipisci blanditiis repellendus, odio
                quaerat similique sit nulla velit fuga dolorum quos ea numquam
                dolor asperiores alias! Repudiandae similique sint qui hic,
                culpa ex eligendi fuga eos cumque. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Iure quasi voluptatum voluptatem,
                magnam odio voluptatibus illum. Eligendi aliquid quam nisi non!
                Voluptatum, accusamus. Aliquam?
              </p>
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
