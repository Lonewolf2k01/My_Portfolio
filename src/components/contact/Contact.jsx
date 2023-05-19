import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { SiWhatsapp } from 'react-icons/si'
import { SiMessenger } from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion as m } from 'framer-motion'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6q6gmgj', 'template_ze99mha', form.current, 'wEfBgx0IA_HJytJpe');

    e.target.reset();
  };

  return (
    <section id="contact">
      <m.h5
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </m.h5>
      <m.h2
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Contact Me
      </m.h2>

      <div className="container contact__container">
        <div className="contact__options">

          <m.article
            className="contact__option"
            initial={{ x: -70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
            transition={{ duration: 0.3 }}
          >
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>adarshteeparthi@gmail.com</h5>
            <a href="mailto: adarshteeparthi@gmail.com" target='blank'>Send a Message</a>
          </m.article>

          <m.article className="contact__option"
            initial={{ x: -70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
            transition={{ duration: 0.5 }}
          >
            <SiMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Adarsh Teeparthi</h5>
            <a href="https://m.me/100007010536274" target='blank'>Send a Message</a>
          </m.article>

          <m.article className="contact__option"
            initial={{ x: -70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
            transition={{ duration: 0.7 }}
          >
            <SiWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 9154948993</h5>
            <a href="https://api.whatsapp.com/send?phone=9154948993" target='blank'>Send a Message</a>
          </m.article>

        </div>

        {/* Form */}
        <form ref={form} onSubmit={sendEmail} >
          <m.input type="text" name="name" placeholder='Your Full Name' required
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
            transition={{ duration: 0.3 }}
          />
          <m.input type="email" name="email" placeholder='Your Email ID' required
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
            transition={{ duration: 0.4 }}
          />
          <m.textarea name="message" placeholder='Your Message' required rows="7"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
            transition={{ duration: 0.5 }}
          ></m.textarea>
          <m.button type='submit' className='btn btn-primary'
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
            transition={{ duration: 0.6 }}
          >Send Message</m.button>
        </form>
      </div>

    </section>
  )
}

export default Contact