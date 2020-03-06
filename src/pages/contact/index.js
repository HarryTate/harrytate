import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Header from "../../components/Header"
import harryOG from "../../images/opengrah/harry-og.jpg"
import PageTitle from "../../components/PageTitle"
import Footer from "../../components/Footer"
import ContactForm from "../../components/ContactForm"
import ContactDetails from "../../components/ContactDetails"

const contact = ({ data }) => {
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
        <link rel="canonical" href="http://harrytate.co.uk/" />
        <meta name="title" content={`${data.site.siteMetadata.title}`} />
        <meta
          name="description"
          content="Harry Tate is a Junior Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
        />
        <meta name="robots" content="index, follow" />
        <title>{`${data.site.siteMetadata.title} | Contact`}</title>
      </Helmet>
      <Header />
      <PageTitle title="Contact" color="dark-grey" />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="two-thirds">
              <ContactForm />
            </div>
            <div className="one-third dark-grey-bg">
              <ContactDetails />
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

export default contact
