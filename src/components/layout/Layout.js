import React from "react"

function Layout({ color, heading, children }) {
  return (
    <section className={`section section--${color}`}>
      <div className="container">
        <h2 className="section--heading">{heading}</h2>
        {children}
      </div>
    </section>
  )
}

export default Layout
