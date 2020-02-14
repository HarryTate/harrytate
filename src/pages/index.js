import React from "react"
import Header from "../components/Header"
import HeroHome from "../components/HeroHome"
import Intro from "../components/Intro"
import Skills from "../components/Skills"
import Cards from "../components/Cards"
import Footer from "../components/Footer"
import "../styles/main.scss"

export default () => (
  <React.Fragment>
    <Header />
    <HeroHome name={"Harry Tate"} content={"Front-End Web Developer"} />
    <Intro />
    <Skills />
    <Cards />
    <Footer />
  </React.Fragment>
)
