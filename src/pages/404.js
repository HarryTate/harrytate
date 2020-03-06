import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const pageNotFound = () => (
  <React.Fragment>
    <Header />
    <div className="section">
      <h1>Ooops... This is the 404... something went wrong</h1>
    </div>
    <Footer />
  </React.Fragment>
)
export default pageNotFound
