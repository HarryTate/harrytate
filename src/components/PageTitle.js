import React from "react"

export default function PageTitle(props) {
  return (
    <section className={`page-title page-title--${props.color}`}>
      <div className="container">
        <h1 className="page-title__heading">{props.title}</h1>
      </div>
    </section>
  )
}
