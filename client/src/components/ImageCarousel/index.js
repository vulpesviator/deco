import React from "react";
import Slider from 'react-slick';
import { Container } from 'semantic-ui-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: '60px',
    lazyLoad: 'ondemand',
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
          centerPadding: '50px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container fluid>
      <style>
        {`
        #root > div > div.ui.container > div.ui.bottom.attached.segment > div > div > div > div > div.slick-slide.slick-active.slick-center.slick-current > div {
          transform: scale(1.5);
          transition: 0.2s;
          transition-timing-function: ease;
        }
        `}
      </style>
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/id/1018/400/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1015/400/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1019/400/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1029/400/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1021/400/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1039/400/300" />
        </div>
      </Slider>
    </Container>
  );
}


export default ImageCarousel;