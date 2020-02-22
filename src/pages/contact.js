import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Header from "../components/Header"
import harryOG from "../images/opengrah/harry-og.jpg"
import Footer from "../components/Footer"

const contact = ({ data }) => {
  console.log(data)
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          property="og:title"
          content={`${data.site.siteMetadata.title} | Contact`}
        />
        <meta
          property="og:description"
          content="Harry Tate is a Junior Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
        />
        <meta property="og:image" content={harryOG} />
        <link rel="canonical" href="http://harrytate.co.uk/contact" />
        <meta name="title" content={`${data.site.siteMetadata.title}`} />
        <meta
          name="description"
          content="Harry Tate is a Junior Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
        />
        <meta name="robots" content="index, follow" />
        <title>{`${data.site.siteMetadata.title} | Contact`}</title>
      </Helmet>
      <Header />
      <p>contact page</p>
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

export default contact
