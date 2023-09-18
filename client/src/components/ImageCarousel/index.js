import React from "react";
import Slider from "react-slick";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = ({ images }) => {
  if (!images || !images.length) {
    return <div>No images available</div>;
  }

  const settings = {
    classNmae: "center variable-width",
    variableWidth: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,

          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  console.log(images);

  return (
    <Container fluid>
      <style>
        {`
        #root > div > div.ui.container > div.ui.bottom.attached.segment > div > div > div > div > div.slick-slide.slick-active.slick-center.slick-current > div {
          transform: scale(1.5);
          transition: 0.2s;
          transition-timing-function: ease;
        }

        .slick-slider.slick-initialized {
          margin: .5rem;
        }

        .slick-slide img {
          margin: .5rem;
        }
        `}
      </style>
      <Slider {...settings}>
        {images.map((image) => (
          <div>
            <Link to={image.src} target="_blank">
              <img src={image.src} alt={image.artist} height={400} />
            </Link>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ImageCarousel;
