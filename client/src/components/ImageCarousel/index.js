import React from "react";
import Slider from 'react-slick';
import { Container } from 'semantic-ui-react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: '60px',
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/id/1018/1000/600/" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1015/1000/600/" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1019/1000/600/" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1019/1000/600/" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1019/1000/600/" />
        </div>
        <div>
          <img src="https://picsum.photos/id/1019/1000/600/" />
        </div>
      </Slider>
    </Container>
  );
}


export default ImageCarousel;