import React from "react"

export default function PageTitle({ color, title }) {
  return (
    <section className={`page-title page-title--${color}`}>
      <div className="container">
        <h1 className="page-title__heading">{title}</h1>
      </div>
    </section>
  )
}
