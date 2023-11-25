import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaders';
import { Animate } from 'react-simple-animate';
import axios from 'axios';
import { DiAndroid, DiApple, DiAsterisk, DiDatabase, DiGithub, DiTrello, DiWebplatform } from 'react-icons/di';
import { FaDatabase, FaInbox, FaInfo, FaJoint, FaKey, FaLock, FaPrint, FaRProject, FaUikit } from 'react-icons/fa';


import './styles.scss';
const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    describtion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      email: formData.email,
      subject: 'Feedback', // Adjust the subject as needed
      describtion: formData.describtion, // Assuming your message is in formData.message
    };

    sendEmail(emailData);

    // Optionally, you can reset the form after submission
    setFormData({
      name: '',
      email: '',
      describtion: '',
    });
  };

  // 

  async function sendEmail({
    name,
    email,
    subject,
    describtion
  }) {
    const serviceId = "service_afkab4j";
    const templateId = "template_luf2qpl";
    const userId = "J3i5Zxm_DHgjT4AfS";

    const url = 'https://api.emailjs.com/api/v1.0/email/send';

    try {
      const response = await axios.post(
        url,
        {
          service_id: serviceId,
          template_id: templateId,
          user_id: userId,
          template_params: {
            user_name: name,
            user_email: email,
            user_subject: `Profile website-${subject} : This is from your profile website`,
            user_message: `Profile website-${describtion} : This is from your profile website`,
          },
        },
        {
          headers: {
            'origin': 'http://localhost',
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error('Error sending email:', error.message);
    }
  }


  const enquiriesType = [
    {
      value: "Websites",
      lable: <DiWebplatform size={20} color="#ffffff" />

    },
    {
      value: "Mobile Applications",
      lable: <DiAndroid size={20} color="#ffffff" />

    },
    {
      value: "General Enquiries",
      lable: <DiAsterisk size={20} color="#ffffff" />

    },
    {
      value: "Application creation",
      lable: <FaPrint size={20} color="#ffffff" />

    },
    {
      value: "Career Paths",
      lable: <FaJoint size={20} color="#ffffff" />

    },
    {
      value: "Projects",
      lable: <FaRProject size={20} color="#ffffff" />

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
 const slideIn1 = useSpring({ transform: scrollY > 800 ?'translateX(0px)'  :'translateX(-600px)',delay: 800,  });
 const slideIn2 = useSpring({ transform: scrollY > 800 ?'translateX(0px)'  :'translateX(-700px)',delay: 1000,  });
 const slideIn3 = useSpring({ transform: scrollY > 800 ?'translateX(0px)'  :'translateX(-800px)',delay: 1200,  });
 const slideIn4 = useSpring({ transform: scrollY > 800 ?'translateX(0px)'  :'translateX(-900px)',delay: 1400,  });
 const slideIn5 = useSpring({ transform: scrollY > 800 ?'translateX(0px)'  :'translateX(-1000px)'  ,delay: 1600,});



  return (
    <section id='contact' className='contact'>
            <div className='contact_space'></div>
      <PageHeaderContent
        headerText="Contact"
        icon={null}
      />      <div className='contact_content'>
        <div className='contact_content_left'>
          {/* left */}
          <div className='contact_content_left_box'>
            <h3 className='contact_content_left_box_header-text'>
              Let's <span>Talk</span>
            </h3>
            <div className='contact_content_left_box_outline'>
              <animated.label style={slideIn1}
                htmlFor='name'
                className='contact_content_left_box_outline_nameLabel'
              >Name</animated.label>
              <animated.input style={slideIn1} required name="name" className='contact_content_left_box_outline_inputName'
                type={"text"}
                placeholder='e.g John Smith'
                value={formData.name}
                onChange={handleChange} />
              <animated.label style={slideIn2} htmlFor='email' className='contact_content_left_box_outline_nameLabel'>Email</animated.label>
              <animated.input style={slideIn2} required
                name="email"
                placeholder='example@gmail.com'
                className='contact_content_left_box_outline_inputName' type={"email"} value={formData.email} onChange={handleChange} />

              <animated.label style={slideIn3}
                htmlFor='description'
                className='contact_content_left_box_outline_nameLabel'
              >Type of Enquiry</animated.label>
              <animated.input style={slideIn3}
                required desc="description"
                className='contact_content_left_box_outline_inputName'
                type={"text"}
                placeholder='Type of Enquiry'
                value={formData.desc}
                onChange={null}
                col="30" />
              <animated.label style={slideIn4}
                htmlFor='description'
                className='contact_content_left_box_outline_nameLabel'
              >Description</animated.label>
              <animated.input style={slideIn4}
                required desc="description"
                className='contact_content_left_box_outline_inputName'
                type={"text"}
                placeholder='Details explanation'
                value={formData.desc}
                onChange={handleChange}
                col="30" />
              <animated.button style={slideIn5} onClick={null
                // handleSubmit
              }>Submit</animated.button>
            </div>


          </div>

        </div>
        <animated.div style={fadeOnScroll} className='contact_content_right' >
          {/* right */}
          <div className='contact_content_right_box'>
            <h1 className='contact_content_right_box_header-text'>Types of <span>Enquires</span></h1>

            <ul>

              {enquiriesType.map((item, i) => (
                <li key={i}>

                  <span className='value'>
                    {item.value}
                  </span>
                  <span className='label'>
                    {item.lable}
                  </span>
                </li>
              ))}

            </ul>


          </div>

        </animated.div>


      </div>


    </section>
  )
}
export default Contact;



/**
 *  
 * 
 * 
 * <Animate
          play
          duration/={1.1}
          delay={.8}

          start={{
            transform: 'translateX(-200px)'
          }}
          end={{
            transform: 'translateX(0px)'
          }}
        >
          <h3 className='contact_content_header-text'>
            Let's Talk
          </h3>


        </Animate>

 <div className='contact_content_form'>
            <div className='contact_content_form_controlsWrapper'>
              <div className='contact_content_form_controlsWrapper_labelInput'>
                <label htmlFor='name' className='nameLabel'>Name</label>
                <input required name="name" className='inputName'
                  type={"text"}
                  value={formData.name}
                  onChange={handleChange} />
              </div>
              <div>
                <label htmlFor='email' className='emailLabel'>Email</label>
                <input required name="email" className='inputEmail' type={"email"} value={formData.email} onChange={handleChange} />

              </div>
              <div>
                <label htmlFor='description' className='descriptionLabel'>Description</label>
                <input
                  required desc="description"
                  className='inputDescription'
                  type={"text"}
                  value={formData.desc}
                  onChange={handleChange}
                  col="30" />

              </div>

            </div>
  <button onClick={null
                // handleSubmit
                }>Submit</button>


 */