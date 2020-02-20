import React from "react"
import Header from "../components/Header"
import HeroHome from "../components/HeroHome"
import Intro from "../components/Intro"
import Skills from "../components/Skills"
import Cards from "../components/Cards"
import Testimonials from "../components/Testimonials"
import Layout from "../components/Layout"
import Footer from "../components/Footer"
import "../styles/main.scss"

export default () => (
  <React.Fragment>
    <Header />
    <HeroHome name={"Harry Tate"} content={"Front-End Web Developer"} />
    <Intro />
    <Skills />
    <Cards />
    <Layout color="dark-grey" heading="Testimonals">
      <Testimonials
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ligula malesuada, semper orci vitae, sollicitudin justo. Cras id nisl a urna luctus aliquam gravida ac nisi. In dignissim lacus at est cursus tincidunt. Cras a aliquet nulla."
        quoteName="Joe Bloggs"
      />
      <Testimonials
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ligula malesuada, semper orci vitae, sollicitudin justo."
        quoteName="Jane Bloggs"
      />
    </Layout>
    <Footer />
  </React.Fragment>
)
