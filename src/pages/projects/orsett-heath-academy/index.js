import React from "react"
// import Seo from "../../../components/Seo"
import Header from "../../../components/Header"
import PageTitle from "../../../components/PageTitle"
import ProjectDetails from "../../../components/ProjectDetails"
import Footer from "../../../components/Footer"
import orsettHeathHome from "../../../images/projects/orsett-heath-academy/orsett-heath-about-us.png"
import orsettHeathServices from "../../../images/projects/orsett-heath-academy/orsett-heath-curriculum-support.png"
import orsettHeathHowCanWeHelp from "../../../images/projects/orsett-heath-academy/orsett-heath-expectations.png"

import harryOG from "../../../images/opengraph/harry-og.jpg"

const OrsettHeath = () => {
    const images = [
        {
            original: orsettHeathHome,
            thumbnail: orsettHeathHome,
        },
        {
            original: orsettHeathServices,
            thumbnail: orsettHeathServices,
        },
        {
            original: orsettHeathHowCanWeHelp,
            thumbnail: orsettHeathHowCanWeHelp,
        },
    ]

    return (
        <React.Fragment>
            {/* <Seo
                title="Orsett Heath Academy"
                description="Harry Tate is a Web Developer who works at at Speed Agency."
                image={harryOG}
            /> */}
            <Header />
            <PageTitle
                color="dark-grey"
                title="Orsett Heath Academy"
            />
            <ProjectDetails
                images={images}
                name={"Orsett Heath Academy"}
                client={"South West Essex Community Education Trust"}
                techUsed={["HTML", "CSS", "JavaScript", "jQuery", "Wordpress", "Bootstrap"]}
                date={"November 2021"}
                brief={
                    <p className="project-content__text">
                        Orsett Heath Academy website was built during my time at Speed Agency.
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
                siteLink={'https://www.orsettheathacademy.org.uk/'}

            />
            <Footer />
        </React.Fragment>
    )
}

export default OrsettHeath
