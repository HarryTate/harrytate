import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function about() {
  return (
    <React.Fragment>
      <Header />
      This is the about page {1 + 1}
      <Footer />
    </React.Fragment>
  )
}
