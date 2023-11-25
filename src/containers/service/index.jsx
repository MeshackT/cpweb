import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { BsInfoCircleFill } from 'react-icons/bs';
import { useSpring, animated } from 'react-spring';
import PageHeaderContent from '../../components/pageHeaders';
import { DiDatabase } from 'react-icons/di';
import {FaInbox, FaInfo, FaKey, FaLock, FaUikit } from 'react-icons/fa';
import ImageOne from '../../images/chat.jpg'
import './styles.scss';
const Service = () => {


    const listofServices = [
        {
            value: "Notifications",
            lable: <FaInfo size={20} color="#ffffff" />

        },
        {
            value: "In-App Chat",
            lable: <FaInbox size={20} color="#ffffff" />

        },
        {
            value: "Back-end",
            lable: <DiDatabase size={20} color="#ffffff" />

        },
        {
            value: "UI-Design",
            lable: <FaUikit size={20} color="#ffffff" />

        },
        {
            value: "Authentication",
            lable: <FaKey size={20} color="#ffffff" />

        },
        {
            value: "Security",
            lable: <FaLock size={20} color="#ffffff" />

        }
    ]

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
 const slideIn1 = useSpring({ transform: scrollY > 800 ?'translateX(0px)'  :'translateX(-600px)'  });
 const slideIn2 = useSpring({ transform: scrollY > 800 ?'translateX(0px)'  :'translateX(-600px)'  });


 const scrollToTop = () => {
    scroll.scrollToTop();
  };

    return (
        <section id='service' className='service'>
            <div className='service_content'>
                <PageHeaderContent
                    headerText="Services"
                    icon={<BsInfoCircleFill size={40}
                    />}
                />
                <div className='service_content_space'></div>

                <div className='service_content_box'>
                    <div className='service_content_box_left'>
                        <animated.h1 style={slideIn1} className='header'>Our <span> Services</span></animated.h1>

                        <animated.ul style={slideIn2}>

                            {listofServices.map((item, i) => (
                                <li key={i}>

                                    <span className='value'>
                                        {item.value}
                                    </span>
                                    <span className='label'>
                                        {item.lable}
                                    </span>
                                </li>
                            ))}

                        </animated.ul>


                    </div>
                    <div className='service_content_box_img'>                     
                           <animated.img style={fadeOnScroll} src={ImageOne} alt="Slide 1" />

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Service;