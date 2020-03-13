import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export const SEO = ({
  title,
  description,
  image,
  follow = true,
  index = true,
}) => {
  return (
    <React.Fragment>
      <StaticQuery
        query={graphql`
          query MetaData {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <Helmet>
            <meta charSet="utf-8" />
            <meta
              property="og:title"
              content={`${data.site.siteMetadata.title} | ${title}`}
            />
            <meta property="og:description" content={`${description}`} />
            <meta property="og:image" content={image} />
            <meta name="title" content={data} />
            <meta name="description" content={`${description}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="https://www.harrytate.co.uk" />
            <meta name="twitter:creator" content="@HarryJTate" />
            <meta name="robots" content={`${index}, ${follow}`} />
            <title>{`${data.site.siteMetadata.title} | ${title}`}</title>
            <meta
              name="google-site-verification"
              content="3GBnO82-rJIgf54Sdz1xKngYUXGIZ1C13ejBBmGxGTs"
            />
          </Helmet>
        )}
      />
    </React.Fragment>
  )
}

export default SEO
