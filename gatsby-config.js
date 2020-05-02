/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Harry Tate | Front-End Web Developer`,
    siteUrl: `https://www.harrytate.co.uk`,
    skillsTitles: [
      "HTML5",
      "CSS",
      "Javascript",
      "jQuery",
      "Sass",
      "git",
      "React",
      "Webpack",
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-160667067-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Avoids sending pageview hits from custom paths
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "image",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Rubik`,
            variants: [`400`, `700`],
          },
          {
            family: `Rubik`,
            subsets: [`latin`],
          },
        ],
      },
    },
  ],
}
