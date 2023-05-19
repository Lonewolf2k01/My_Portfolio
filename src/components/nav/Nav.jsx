import React from 'react'
import './nav.css'
import { FiHome } from 'react-icons/fi'
import { FaRegUser } from 'react-icons/fa'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { FaCodeBranch } from 'react-icons/fa'
import { MdOutlineContactSupport } from 'react-icons/md'
import { useState } from 'react'
import { motion } from 'framer-motion'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#home')

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><FiHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillJournalBookmarkFill /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#services' ? 'active' : ''}><FaCodeBranch /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactSupport /></a>
    </motion.nav>
  )
}

export default Nav