import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">

              
                        <p>I'm a Computer Science graduate with expertise in modeling and optimizing complex systems in the renewable energy sector. </p>
                        <br />
                        <p> I bring strong capabilities across full-stack development—proficient in both frontend and backend technologies—combined with specialized knowledge in AI agent development for retrieving and processing domain-specific information from complex knowledge bases.</p>
                        <br />
                        <p>My technical skill set emphasizes performance, system reliability, and scalable architecture. I have hands-on experience building production systems that handle intricate requirements while maintaining code quality and maintainability. An Erasmus year in Sweden expanded my technical and collaborative capabilities through international study and exposure to diverse development practices.
I'm a proactive, self-driven learner continuously deepening my technical expertise across emerging technologies and analytical frameworks for real-world problem-solving.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
