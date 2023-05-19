import React from 'react'
import './experience.css'
import ProgressBar from "@ramonak/react-progress-bar";
import { ImHtmlFive } from 'react-icons/im'
import { SiCss3 } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaJava } from 'react-icons/fa'
import { SiPython } from 'react-icons/si'
import { SiSpringboot } from 'react-icons/si'
import { TbBrandMysql } from 'react-icons/tb'
import { motion as m } from 'framer-motion'


const Experience = () => {
  return (

    <section id="experience">
      <m.h5
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        What Skills I have
      </m.h5>
      <m.h2
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Experience
      </m.h2>

      <div className="container experience__container">

        <m.div
          initial={{ x: -75, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="experience__frontend"
        >
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <ImHtmlFive className='experience__icon' />
              <h4>HTML</h4>
              <ProgressBar className='experience__bar' isLabelVisible={false} completed={75} bgColor="#f55f02" animateOnRender={true} />
            </article>
            <article className='experience__details'>
              <SiCss3 className='experience__icon' />
              <h4>CSS</h4>
              <ProgressBar className='experience__bar' isLabelVisible={false} completed={75} bgColor="#1c76d6" animateOnRender={true} />
            </article>
            <article className='experience__details'>
              <IoLogoJavascript className='experience__icon' />
              <h4>JavaScript</h4>
              <ProgressBar className='experience__bar' isLabelVisible={false} completed={60} bgColor="#f5e902" animateOnRender={true} />
            </article>
            <article className='experience__details'>
              <IoLogoJavascript className='experience__icon' />
              <h4>ReactJS</h4>
              <ProgressBar className='experience__bar' isLabelVisible={false} completed={50} bgColor="#02c4f5" animateOnRender={true} />
            </article>
          </div>
        </m.div>

        <m.div
          initial={{ x: 75, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="experience__backend"
        >
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaJava className='experience__icon' />
              <h4>JAVA</h4>
              <ProgressBar className='experience__bar' isLabelVisible={false} completed={75} bgColor="#a19f9f" animateOnRender={true} />
            </article>

            <article className='experience__details'>
              <SiPython className='experience__icon' />
              <h4>Python</h4>
              <ProgressBar className='experience__bar' isLabelVisible={false} completed={75} bgColor="#148BF7" animateOnRender={true} />
            </article>

          </div>
        </m.div>

        <m.div
          initial={{ x: -75, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7}}
          className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <SiSpringboot className='experience__icon' />
              <h4>Spring Boot</h4>
              <ProgressBar className='experience__bar' isLabelVisible={false} completed={50} bgColor="#f5e902" animateOnRender={true} />
            </article>

            <article className='experience__details'>
              <TbBrandMysql className='experience__icon' />
              <h4>SQL</h4>
              <ProgressBar className='experience__bar' isLabelVisible={false} completed={70} bgColor="#02c4f5" animateOnRender={true} />
            </article>
          </div>
        </m.div>

      </div>

    </section>
  )
}

export default Experience