import React from 'react'
import { TfiLinkedin } from 'react-icons/tfi'
import { VscGithub } from 'react-icons/vsc'
import { TfiInstagram } from 'react-icons/tfi'
import { motion as m } from 'framer-motion'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <m.a href="https://www.linkedin.com/in/adarsh-teeparthi-380980233/" target='blank'
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.4, transition: { duration: 0.05 } }}
                transition={{ duration: 0.4 }}
            >
                <TfiLinkedin />
            </m.a>
            <m.a href="https://github.com/Lonewolf2k01" target='blank'
                initial={{ x: 10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.4, transition: { duration: 0.05 } }}
                transition={{ duration: 0.6 }}
            >
                <VscGithub />
            </m.a>
            <m.a href="https://www.instagram.com/_awsom_adarsh/" target='blank'
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.4, transition: { duration: 0.05 } }}
                transition={{ duration: 0.8 }}
            >
                <TfiInstagram />
            </m.a>
        </div>
    )
}

export default HeaderSocials