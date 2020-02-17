import React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"

const about = ({ data }) => {
  return (
    <React.Fragment>
      <Header />
      <h1>About {data.site.siteMetadata.title}</h1>
      This is the about page {1 + 1}
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
