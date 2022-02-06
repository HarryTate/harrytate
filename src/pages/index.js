import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/Layout"
// import Seo from "../components/Seo"
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

const Home = () => {
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
            vue
            sass
            php
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
            sassImage {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            phpImage {
              childImageSharp {
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            vueImage {
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
  const [quotes] = useState([
    {
      quote: `I've had the pleasure of working with Harry on two of my previous contracts and in that time I've seen Harry progress from junior to an impressive front-end developer.
        Harry is a great team player, has excellent HTML, CSS and JavaScript skills, as well as knowledge of building templates for CMS, as well as Git and Sass.
        He works well under pressure and I'm always impressed by how he doesn't let stress get to him.
        Harry is hardworking and shows a willingness to learn new skills. He is an exceptional team player and a great addition to any team.`,
      quoteName: "Juan Fernandes",
    },
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
  ])

  const [skills] = useState(data.allMarkdownRemark.nodes[0].frontmatter)

  return (
    <React.Fragment>
      <Seo
        title="Home"
        description="Harry Tate is a Front-End Developer based in Peterborough, Cambridgeshire. He specialises in web development, web design and building web apps."
        image={harryOG}
      />
      <Header />
      <HeroHome name={"Harry Tate"} content={"Web Developer"} />
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
            image={skills.vueImage.childImageSharp.fixed}
            title={skills.vue}
          />
          <Skill
            image={skills.phpImage.childImageSharp.fixed}
            title={skills.php}
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

export default Home;
