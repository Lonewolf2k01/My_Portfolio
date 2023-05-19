import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'
import { TbDeviceMobileMessage } from 'react-icons/tb'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id='about'>
      <motion.h5
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get To Know
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}

      >
        About Me
      </motion.h2>

      <motion.div

        className="container about__container"
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="about__me"
        >
          <div className="about__me-image">
            <img src={ME} alt="OOPS! It's BROKEN" />
          </div>
        </motion.div>

        <div className="about__content">
          <div className="about__cards">
            <motion.article className='about__card'
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
              transition={{ duration: 0.4 }}
            >
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>I am a Fresher</small>
            </motion.article>

            <motion.article className='about__card'
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
              transition={{ duration: 0.6 }}
            >
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>None</small>
            </motion.article>

            <motion.article className='about__card'
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
              transition={{ duration: 0.8 }}
            >
              <IoLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3+ Projects</small>
            </motion.article>
          </div>

          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [50, 0], opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            I am a highly motivated developer with a strong passion for my craft. Over the course of my career, I have successfully created various websites using a range of technologies, including HTML, CSS, JavaScript, ReactJS, and other relevant tools. My proficiency in these technologies has enabled me to deliver impactful and functional web solutions. I am continually seeking to enhance my skills and stay abreast of the latest advancements in the field to consistently deliver high-quality results.
          </motion.p>

          <motion.a href="#contact" className='about__btn btn btn-primary'
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
            transition={{ duration: 0.6 }}
          >
            Let's Talk<TbDeviceMobileMessage className='talk__icon' />
          </motion.a>

        </div>

      </motion.div>

    </section>
  )
}

export default About