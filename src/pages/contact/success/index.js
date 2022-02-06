import React from "react"
import SeoComponent from "../../../components/SeoComponent"
import Header from "../../../components/Header"
import harryOG from "../../../images/opengraph/harry-og.jpg"
import PageTitle from "../../../components/PageTitle"
import Footer from "../../../components/Footer"
import ContactSuccess from "../../../components/ContactSuccess"
import ContactDetails from "../../../components/ContactDetails"

const contact = () => {
  return (
    <React.Fragment>
      <SeoComponent
        title="Get in touch"
        description="Harry Tate is a Junior Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
        image={harryOG}
      />
      <Header />
      <PageTitle title="Contact" color="dark-grey" />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="two-thirds">
              <ContactSuccess />
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

export default contact
