import React, { useState, useEffect } from 'react';
// import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
// import { BsInfoCircleFill } from 'react-icons/bs';
import { useSpring, animated } from 'react-spring';import PageHeaderContent from '../../components/pageHeaders';
import './styles.scss'
import ImageOne from '../../images/d2.png'
import { FaDribbble, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const About = () => {

    
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


 const fadeOnScroll = useSpring({ opacity: scrollY > 800 ? 1 : 0, from: { opacity: 0 }, delay: 800, });
 const slideIn1 = useSpring({ transform: scrollY > 800 ?'translateX(0px)'  :'translateX(-700px)',delay: 800  });
 const slideIn2 = useSpring({ transform: scrollY > 800 ?'translateX(0px)'  :'translateX(-700px)'  ,delay: 1200});
 const slideIn3 = useSpring({ transform: scrollY > 800 ?'translateX(0px)'  :'translateX(-700px)'  ,delay: 1600});


    return (
        <section className='about' id="about">
            <div className='about_content'>
            <div className='about_content_spaces'></div>
                {/* header aft navbar */}
                <PageHeaderContent
                    headerText="About"
                    icon={null}
                />
                <div className='about_content_space'></div>
                <div className='about_content_container'>
                    <div style={slideIn2} className='about_content_container_left'>
                        {/* left */}
                        <animated.h1 style={slideIn1}>FSH <span>Software</span> Developer (Pty) Ltd.</animated.h1>
                        <animated.p style={slideIn2}>
                            A specialist provider, leveraging world-class technology and leading practices
                            to architect, implement and support sustainable ICT-based business solutions
                            which are strategically aligned, fit for purpose, cost effective and optimised
                            for performance. We have highly skilled, experienced professionals directed at
                            solving business critical customer problems through consultative approach.We
                            also bring our collective knowledge to every deployment engagement. From legacy
                            integration to digital transformation, our solutions catalogue includes the full
                            spectrum of ICT services. Few other organisations can claim the depth and
                            breadth of the capabilities and experience we provide.
                        </animated.p>
                        <animated.div style={slideIn3} className='about_content_container_left_social'>
                        <FaLinkedin  className='about_content_container_left_social_linkedIn'
                         size={30} color= '#0000FF' onClick={null}/>
                        <FaDribbble  className='about_content_container_left_social_dribbble'
                         size={30}  onClick={null}/>
                         <FaFacebook  className='about_content_container_left_social_facebook'
                         size={30}  onClick={null}/>
                         <FaInstagram  className='about_content_container_left_social_instagram'
                         size={30}  onClick={null}/>

                        </animated.div>

                    </div>
                    <animated.div style={fadeOnScroll} className='about_content_container_right'>
                        {/* right */}
                        <div className='about_content_container_right_img'>
                            <img src={ImageOne} alt="Slide 1" />

                        </div>
                        

                    </animated.div>


                </div>

            </div>
            
        </section>
    )
}
export default About;