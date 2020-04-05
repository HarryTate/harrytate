import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/main.scss"
import Img from "gatsby-image"
// import html5 from "../images/HTML5.png"
// import css from "../images/CSS.png"
// import javascript from "../images/Javascript.png"
// import jQuery from "../images/jQuery.png"
// import sass from "../images/Sass.png"
// import git from "../images/git.png"
// import webpack from "../images/webpack.png"
// import reactIcon from "../images/react.png"

const Skills = () => {
  const data = useStaticQuery(graphql`
    query Skills {
      site {
        skillsTitles
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

  console.log(data)
  return (
    <section className="section section--dark-grey">
      <div className="container">
        <h2 className="skills__heading">Skills</h2>
        <ul className="skills">
          {data.allFile.edges.map((skills, i) => (
            // {data.site.skillsTitles.map(title => (
            <li className="skill">
              <Img
                key={i}
                className="skill__icon"
                alt=""
                fixed={skills.node.childImageSharp.fixed}
              />
              <div className="skill__body">
                {/* <h3 className="skill__title"></h3> */}
              </div>
            </li>
            // ))}
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
