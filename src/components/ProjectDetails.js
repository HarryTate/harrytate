import React from "react"
import ImageGallery from "react-image-gallery"
import PPLMac from "../images/projects/PPL/Macbook.png"
import PPLMacLaptop from "../images/projects/PPL/Macbook-laptop.png"
const PPLArchitects = () => {
  const images = [
    {
      original: PPLMac,
      thumbnail: PPLMac,
    },
    {
      original: PPLMacLaptop,
      thumbnail: PPLMacLaptop,
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ]
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <ImageGallery items={images} />;
        </div>
      </div>
    </React.Fragment>
  )
}

export default PPLArchitects
