import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me-removebg.png'
import { HiChevronDoubleDown } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <motion.h5
          initial={{ y: 0, opacity: 0 }}
          whileInView={{ y: [-50, 0], opacity: 1 }}
          transition={{ duration: 0.2}}
        >
          Hello! I'm
        </motion.h5>
        <motion.h1
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView={{ x: [-25, 0], opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2}}
        >
          Adarsh Teeparthi
        </motion.h1>
        <motion.h5
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileInView={{ x: [25, 0], opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-light"
        >
          FullStack Developer
        </motion.h5>
        <CTA />
        <HeaderSocials />

        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: -180, opacity: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
          transition={{ duration: 0.6 }}
          className='me'
        >
          <img src={ME} alt="BROKEN" className='me-img' />
        </motion.div>
       

        <motion.a href="#contact" className='scroll__down'
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.4, transition: { duration: 0.05 } }}
          transition={{ duration: 0.6 }}
        >
          <HiChevronDoubleDown />
        </motion.a>

      </div>
    </header>
  )
}

export default Header