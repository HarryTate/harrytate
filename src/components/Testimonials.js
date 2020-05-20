import React from "react"
import Slider from "react-slick"

export default function Testimonials(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  }
  return (
    <React.Fragment>
      <section className="section section--dark-grey">
        <div className="container">
          <h2 className="section--heading mb--1">What people say about me</h2>
          <Slider {...settings}>
            {props.quotes.map((quote, index) => (
              <div key={index}>
                <blockquote className="testimonials__quote">
                  {`"${quote.quote}"`}
                  <cite className="testimonials__name">{quote.quoteName}</cite>
                </blockquote>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </React.Fragment>
  )
}
