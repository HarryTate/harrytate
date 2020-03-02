import React from "react"
import Header from "../../../components/Header"
import PageTitle from "../../../components/PageTitle"
import ProjectDetails from "../../../components/ProjectDetails"
import Footer from "../../../components/Footer"
import PPLMac from "../../../images/projects/PPL/Macbook.png"
import PPLMacLaptop from "../../../images/projects/PPL/Macbook-laptop.png"

const PPLArchitects = props => {
  const images = [
    {
      original: PPLMac,
      thumbnail: PPLMac,
    },
    {
      original: PPLMacLaptop,
      thumbnail: PPLMacLaptop,
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ]
  return (
    <React.Fragment>
      <Header />
      <PageTitle color="dark-grey" title="PPL Architects" />
      <ProjectDetails
        images={images}
        name={"PPL Architects"}
        client={"Student Group at the University of Manchester"}
        techUsed={[
          "HTML",
          "SCSS",
          "Javascript",
          "Parcel",
          "Netlify",
          "Bootstrap",
        ]}
        brief={
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            neque, ipsa nostrum labore quis amet dolorum magnam aut repudiandae
            tempore.
          </p>
        }
      />
      <Footer />
    </React.Fragment>
  )
}

export default PPLArchitects
