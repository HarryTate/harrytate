import React from "react"

export default props => {
  return (
    <section className={`section section--${props.color}`}>
      <div className="container">
        <h2 className="section--heading">{props.heading}</h2>
        <div className="row">{props.children}</div>
      </div>
    </section>
  )
}
