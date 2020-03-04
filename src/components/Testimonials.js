import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Testimonials(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <React.Fragment>
      <section className="section section--dark-grey">
        <div className="container">
          <h2 className="section--heading mb--1">What people say about me</h2>
          <Slider {...settings}>
            <div>
              <blockquote className="testimonials__quote">
                {props.quote}
                <cite className="testimonials__name">{props.quoteName}</cite>
              </blockquote>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </Slider>
        </div>
      </section>
      {/* <section className="section section--dark-grey">
        <div className="container">
          <div className="testimonials">
            <blockquote className="testimonials__quote">
              <sup className="testimonials__quote-mark testimonials__quote-mark--before"></sup>
              {props.quote}
              <sub className="testimonials__quote-mark testimonials__quote-mark--after"></sub>
              <cite className="testimonials__name">{props.quoteName}</cite>
            </blockquote>
          </div>
        </div>
      </section> */}
    </React.Fragment>
  )
}
