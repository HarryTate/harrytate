import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Header from "../components/Header"
import HeroHome from "../components/HeroHome"
import Intro from "../components/Intro"
import Skills from "../components/Skills"
import Cards from "../components/Cards"
import Testimonials from "../components/Testimonials"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import "../styles/main.scss"
import harryOG from "../images/opengrah/harry-og.jpg"

export default ({ data }) => (
  <React.Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <meta property="og:title" content={`${data.site.siteMetadata.title}`} />
      <meta
        property="og:description"
        content="Harry Tate is a Junior Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
      />
      <meta property="og:image" content={harryOG} />
      <link rel="canonical" href="http://harrytate.co.uk" />
      <meta name="title" content={`${data.site.siteMetadata.title}`} />
      <meta
        name="description"
        content="Harry Tate is a Junior Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
      />
      <meta name="robots" content="index, follow" />
      <title>{`${data.site.siteMetadata.title}`}</title>
    </Helmet>
    <Header />
    <HeroHome name={"Harry Tate"} content={"Front-End Web Developer"} />
    <Intro />
    <Skills />
    <Cards />
    <Layout color="dark-grey" heading="What people say about me">
      <Testimonials
        quote="Excellent web developer, hard working and very knowledgeable. Made me a fantastic website for an architectural practice."
        quoteName="Nadeem Hanna"
      />
      <Testimonials
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ligula malesuada, semper orci vitae, sollicitudin justo."
        quoteName="Jane Bloggs"
      />
    </Layout>
    <h1>TODO: CTA to CTA to contact pages to go here</h1>
    <Footer />
  </React.Fragment>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
