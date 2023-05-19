import React from 'react'
import CV from '../../assets/Resume.pdf'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { TbDeviceMobileMessage } from 'react-icons/tb'
import { motion } from 'framer-motion'


const CTA = () => {
    return (
        <div className='cta'>
            <motion.a href={CV} download className='btn'
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
                transition={{ duration: 0.4 }}
            >
                Download CV <FaCloudDownloadAlt className='cta__icon'/>
            </motion.a>
            <motion.a href="#contact" className='btn btn-primary'
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
                transition={{ duration: 0.6 }}
            >
                Let's Talk <TbDeviceMobileMessage className='cta__icon' />
            </motion.a>            

        </div>
    )
}

export default CTA