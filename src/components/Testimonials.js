import React from "react"

export default function Testimonials(props) {
  return (
    <div className="testimonials">
      <blockquote className="testimonials__quote">
        <sup className="testimonials__quote-mark testimonials__quote-mark--before"></sup>
        {props.quote}
        <sub className="testimonials__quote-mark testimonials__quote-mark--after"></sub>
        <cite className="testimonials__name">{props.quoteName}</cite>
      </blockquote>
    </div>
  )
}
