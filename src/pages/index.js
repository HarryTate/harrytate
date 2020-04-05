import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Header from "../components/Header"
import HeroHome from "../components/HeroHome"
import Intro from "../components/Intro"
import Skills from "../components/Skills"
import Cards from "../components/Cards"
import Testimonials from "../components/Testimonials"
import Callout from "../components/Callout"
import Footer from "../components/Footer"
import "../styles/main.scss"
import harryOG from "../images/opengraph/harry-og.jpg"

export default ({ data }) => {
  const quotes = [
    {
      quote:
        "Excellent web developer, hard working and very knowledgeable. Made me a fantastic website for an architectural practice.",
      quoteName: "Nadeem Hanna",
    },
  ]

  return (
    <React.Fragment>
      <SEO
        title="Home"
        description="Harry Tate is a Junior Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
        image={harryOG}
      />
      <Header />
      <HeroHome name={"Harry Tate"} content={"Front-End Web Developer"} />
      <Intro />
      <Skills />
      <Skills />
      <Cards />
      <Testimonials quotes={quotes} />
      <Callout
        color="dark-blue"
        text="Want to know more?"
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
