import React from "react"
import { Link } from "gatsby"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default () => (
  <React.Fragment>
    <Header />
     <div className="hero__title">Hello World</div>
     <Link to="/about-css-modules/">Learn about CSS modules</Link>
    <Footer />
  </React.Fragment>
  )
