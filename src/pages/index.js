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
import harryOG from "../images/opengraph/harry-og.jpg"
import "../styles/main.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query Skills {
      site {
        siteMetadata {
          skillsTitles
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            css
            versionControl
            html
            javascript
            jquery
            react
            sass
            webpack
            cssImage {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            htmlImage {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            javascriptImage {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            versionControlImage {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            jqueryImage {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            reactImage {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            sassImage {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            webpackImage {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)

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

  const skills = data.allMarkdownRemark.nodes[0].frontmatter
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
          <Skill
            image={skills.htmlImage.childImageSharp.fixed}
            title={skills.html}
          />
          <Skill
            image={skills.cssImage.childImageSharp.fixed}
            title={skills.css}
          />
          <Skill
            image={skills.javascriptImage.childImageSharp.fixed}
            title={skills.javascript}
          />
          <Skill
            image={skills.sassImage.childImageSharp.fixed}
            title={skills.sass}
          />
          <Skill
            image={skills.jqueryImage.childImageSharp.fixed}
            title={skills.jquery}
          />
          <Skill
            image={skills.versionControlImage.childImageSharp.fixed}
            title={skills.versionControl}
          />
          <Skill
            image={skills.reactImage.childImageSharp.fixed}
            title={skills.react}
          />
          <Skill
            image={skills.webpackImage.childImageSharp.fixed}
            title={skills.webpack}
          />
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
