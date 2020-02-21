import React from "react"
import Header from "../components/Header"
import PageTitle from "../components/PageTitle"
import Footer from "../components/Footer"

export default function projects() {
  return (
    <React.Fragment>
      <Header />
      <PageTitle title="Projects I've worked on" color="dark-blue" />
      <Footer />
    </React.Fragment>
  )
}
