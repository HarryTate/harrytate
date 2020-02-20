import React from "react"

export default function Testimonials(props) {
  return (
    <div className="testimonials">
      <blockquote className="testimonials__quote">
        <span className="testimonials__quote-mark testimonials__quote-mark--before"></span>
        {props.quote}
        <span className="testimonials__quote-mark testimonials__quote-mark--after"></span>
        <cite className="testimonials__name">{props.quoteName}</cite>
      </blockquote>
    </div>
  )
}
