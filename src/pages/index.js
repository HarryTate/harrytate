import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/Layout"
import SEO from "../components/SEO"
import Header from "../components/Header"
import HeroHome from "../components/HeroHome"
import Intro from "../components/Intro"
import Skill from "../components/Skill"
import Cards from "../components/Cards"
import Testimonials from "../components/Testimonials"
import Callout from "../components/Callout"
import Footer from "../components/Footer"
import "../styles/main.scss"
import harryOG from "../images/opengraph/harry-og.jpg"

export default () => {
  const data = useStaticQuery(graphql`
    query Skills {
      site {
        siteMetadata {
          skillsTitles
        }
      }
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(tif)|(tiff)|(webp)|(jpeg)/" }
          absolutePath: { regex: "/images/skills/" }
        }
      ) {
        edges {
          node {
            id
            childImageSharp {
              fixed(width: 100, height: 100) {
                ...GatsbyImageSharpFixed
              }
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const quotes = [
    {
      quote:
        "I've worked within the same department as Harry for over two years - he is a hard-working, talented team-player who isn't afraid to share his knowledge and expertise with others.",
      quoteName: "Daniel Mabbot",
    },
    {
      quote:
        "Excellent web developer, hard working and very knowledgeable. Made me a fantastic website for an architectural practice.",
      quoteName: "Nadeem Hanna",
    },
  ]
  console.log(data)

  return (
    <React.Fragment>
      <SEO
        title="Home"
        description="Harry Tate is a Junior Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
        image={harryOG}
      />
      <Header />
      <HeroHome name={"Harry Tate"} content={"Front-End Web Developer"} />
      <Intro />
      <Layout color="dark-grey" heading="Skills">
        <ul className="skills">
          {data.allFile.edges.map((skill, i) => (
            <Skill
              title={data.site.siteMetadata.skillsTitles[i]}
              image={skill.node.childImageSharp.fixed}
            />
          ))}
        </ul>
      </Layout>

      <Cards />
      <Testimonials quotes={quotes} />
      <Callout
        color="dark-blue"
        text="Want to know more?"
        buttonText="Get in touch"
        buttonLink="contact"
        buttonColor="red"
      />
      <Footer />
    </React.Fragment>
  )
}
