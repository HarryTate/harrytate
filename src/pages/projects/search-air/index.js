import React from "react"
import SeoComponent from "../../../components/SeoComponent"
import Header from "../../../components/Header"
import PageTitle from "../../../components/PageTitle"
import ProjectDetails from "../../../components/ProjectDetails"
import Footer from "../../../components/Footer"
import searchAirHome from "../../../images/projects/search-air/compressive-home.png"
import searchAirServices from "../../../images/projects/search-air/compressive-services.png"
import searchAirHowCanWeHelp from "../../../images/projects/search-air/compressive-how-can-we-help.png"

import harryOG from "../../../images/opengraph/harry-og.jpg"
import SeoComponent from "../../../components/SeoComponent"

const SearchAir = () => {
    const images = [
        {
            original: searchAirHome,
            thumbnail: searchAirHome,
        },
        {
            original: searchAirServices,
            thumbnail: searchAirServices,
        },
        {
            original: searchAirHowCanWeHelp,
            thumbnail: searchAirHowCanWeHelp,
        },
    ]

    return (
        <React.Fragment>
            <SeoComponent
                title="Search Air"
                description="Harry Tate is a Web Developer who works at at Speed Agency."
                image={harryOG}
            />
            <Header />
            <PageTitle
                color="dark-grey"
                title="Search air"
            />
            <ProjectDetails
                images={images}
                name={"Search air"}
                client={"William G Search Limited"}
                techUsed={["HTML", "CSS", "JavaScript", "jQuery", "Wordpress", "Bootstrap"]}
                date={"October 2021"}
                brief={
                    <p className="project-content__text">
                        Search Air website was built whilst working for Speed Agency.
                    </p>
                }
                requirements={
                    <ul className="project-content__list">
                        {/* <li>Build bespoke campaign pages defined by the marketing team</li>
                        <li>
                            Maintain existing web pages making design changes that meet W3C
                            best practices
                        </li>
                        <li>Maintain SEO Standards</li>
                        <li>Support the business with new digital initiatives</li>
                        <li>
                            Build new components for users of the CMS around the buisness to
                            use
                        </li> */}
                    </ul>
                }
                siteLink={'https://compressive.co.uk/'}

            />
            <Footer />
        </React.Fragment>
    )
}

export default SearchAir
