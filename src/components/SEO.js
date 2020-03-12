import React from "react"
import { Helmet } from "react-helmet"

export const SEO = ({
  data,
  title,
  description,
  image,
  follow = true,
  index = true,
}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta property="og:title" content={`${data} | ${title}`} />
      <meta property="og:description" content={`${description}`} />
      <meta property="og:image" content={image} />
      <meta name="title" content={data} />
      <meta name="description" content={`${description}`} />
      <meta name="robots" content={`${index}, ${follow}`} />
      <title>{`${data} | ${title}`}</title>
    </Helmet>
  )
}

export default SEO
