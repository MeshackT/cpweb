// import React from 'react';

// const Contact = () => {
//     return (
//         <div>
//             Contact Page

//         </div>
//     )
// }
// export default Contact;

// Home.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles.scss';

import ImageOne from '../../images/bg.png';
import ImageTwo from '../../images/d1.png';
import ImageThree from '../../images/d1.png'; //live
import ImageFour from '../../images/d1.png'; //live

const CarouselSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='homes'>
      <div className='homes_slider-content'>
      
        <div className='homes_slider-content_left'>
          <h1>Meshack</h1>
        </div>
        <div className='homes_slider-content_right'>
          {/* Carousel */}
          <Slider {...settings} className='homes_slider-content_right_slider'>
          {/* Slides go here */}
          <div className='homes_slider-content_right_img'>
            <img src={ImageOne} alt="Slide 1" />
          </div>
          <div className='homes_slider-content_right_img'>
            <img src={ImageOne} alt="Slide 1" />
          </div>
          <div className='homes_slider-content_right_img'>
            <img src={ImageOne} alt="Slide 1" />
          </div>

        </Slider>

        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;



/**
 * 
 
 <Slider {...settings} className='homes_slider-content_right_slider'>
          {/* Slides go here }
          <div className='homes_slider-content_right_img'>
            <img src={ImageOne} alt="Slide 1" />
          </div>
          <div className='homes_slider-content_right_img'>
            <img src={ImageOne} alt="Slide 1" />
          </div>
          <div className='homes_slider-content_right_img'>
            <img src={ImageOne} alt="Slide 1" />
          </div>

        </Slider> 
 */

