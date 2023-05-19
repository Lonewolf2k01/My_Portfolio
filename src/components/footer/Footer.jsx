import React from 'react'
import './footer.css'
import { SiFacebook } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'
import { FaTwitter } from 'react-icons/fa'
import { motion as m } from 'framer-motion'

const Footer = () => {
  return (
    <m.footer id="footer"
      initial={{ y: 75, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <m.a href="#home" className='footer__logo'
        initial={{ x: 75, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
        transition={{ duration: 0.35 }}
      >
        ADARSH
      </m.a>

      <ul className="permalinks">
        <m.li
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
          transition={{ duration: 0.4 }}
        ><a href="#home">HOME</a></m.li>
        <m.li
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
          transition={{ duration: 0.45 }}
        ><a href="#about">About</a></m.li>
        <m.li
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
          transition={{ duration: 0.5 }}
        ><a href="#experience">Experience</a></m.li>
        <m.li
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
          transition={{ duration: 0.55 }}
        ><a href="#portfolio">Portfolio</a></m.li>
        <m.li
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
          transition={{ duration: 0.6 }}
        ><a href="#contact">Contact</a></m.li>
      </ul>

      <div className="footer__socials">
        <m.a
          href="https://facebook.com" target='blank'
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
          transition={{ duration: 0.4 }}
        >

          <SiFacebook />
        </m.a>
        <m.a
          href="https://instagram.com"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
          transition={{ duration: 0.5 }}
        >

          <BsInstagram />
        </m.a>
        <m.a
          href="https://twitter.com"
          initial={{ y: 75, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
          transition={{ duration: 0.6 }}
        >

          <FaTwitter />
        </m.a>
      </div>

      <m.div className="footer__copyright"
        initial={{ y: 75, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <small>&copy; Adarsh Teeparthi. All rights reserved.</small>
      </m.div>
    </m.footer>
  )
}

export default Footer