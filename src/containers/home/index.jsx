import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useSpring, animated } from 'react-spring';
import ImageOne from '../../images/bg.png';
import ImageTwo from '../../images/d2.png';
import ImageThree from '../../images/d1.png';
import Service from '../service';
import PageHeaderContent from '../../components/pageHeaders';
import About from '../about';
import Contact from '../contact';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.scss';
import CarouselSlider from '../test';


const Home = () => {

  // handle scroll animation
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const fadeOnScroll = useSpring({ opacity: scrollY > 180 ? 1 : 0, from: { opacity: 0 }, delay: 800, });
  const fade = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1200 });
  const slideIn1 = useSpring({ transform: scrollY > 200 ? 'translateX(-550px)' : 'translateX(0px)' ,delay: 400,});
  const slideIn2 = useSpring({ transform: scrollY > 400 ? 'translateX(-550px)' : 'translateX(0px)',delay: 800, });
  const slideIn3 = useSpring({ transform: scrollY > 600 ? 'translateX(-550px)' : 'translateX(0px)' ,delay: 1200,});
  const settings = { dots: false, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, arrows: false, };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <section id='home' className='home'>
      <div className='home_content'>
        <div className='home_content_personalWrapper'>
          <animated.h1 className="personalInformationHeader" style={slideIn1}>FSH.</animated.h1>
          <animated.p style={slideIn2}>
            Software creation<br />Dive into our world of infinit possibilities
          </animated.p>
          <ScrollLink
            to='home_more'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            <animated.button style={slideIn3}>More</animated.button>
          </ScrollLink>
        </div>
        <div className='home_content_serviceWrapper_box'>
          <animated.div style={fade} className='home_content_serviceWrapper_box_slider'>
            <Slider {...settings} className='homes_slider-content_right_slider'>
              <div className='homes_slider-content_right_img'>
                <img src={ImageOne} alt='Slide 1' />
              </div>
              <div className='homes_slider-content_right_img'>
                <img src={ImageTwo} alt='Slide 1' />
              </div>
              <div className='homes_slider-content_right_img'>
                <img src={ImageThree} alt='Slide 1' />
              </div>
            </Slider>
          </animated.div>
        </div>
      </div>
      <div className='home_space'></div>
      <PageHeaderContent headerText='More' icon={<BsInfoCircleFill size={40} />} />
      <div id='home_more' className='home_more'>
        <div className='home_more_content'>
          <div className='home_more_content_box'>
            <div className='home_more_content_box_content'>
              <animated.h1 style={fadeOnScroll}>Development is a process</animated.h1>
              <animated.h3 style={fadeOnScroll}>
                It seems like there might be a typo or a misunderstanding in your
                question. I'm not sure what you mean by "ispolrm with vs." If you're
                referring to something specific related to Visual Studio (VS), could you
                please provide more details or clarify your question? If you're asking
                about using Visual Studio for a specific task or project, please provide
                more context so that I can offer more accurate assistance. Whether
                you're working on web development, a specific programming language, or
                any other type of project, providing more details will help me provide a
                more tailored and helpful response.
              </animated.h3>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <About />
      <Contact />
    </section>
  );
};

export default Home;
