import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { motion as m } from 'framer-motion'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Food App Project',
    github: 'https://github.com/Lonewolf2k01',
    demo: 'https://lonewolf2k01.github.io/React-Food-app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Movie Review Project',
    github: 'https://github.com/Lonewolf2k01',
    demo: 'https://github.com/Lonewolf2k01'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Portfolio',
    github: 'https://github.com/Lonewolf2k01',
    demo: 'https://lonewolf2k01.github.io/My_Portfolio/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Chat-App',
    github: 'https://github.com/Lonewolf2k01',
    demo: 'https://chat-app-u2nk.onrender.com/'
  }

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <m.h5
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Recent Work
      </m.h5>
      <m.h2
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Portfolio
      </m.h2>

      {/* <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <m.article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='blank'>Github</a>
                  <a href={demo} target='blank' className='btn btn-primary'>Live Demo</a>
                </div>
              </m.article>
            )
          })
        }
      </div> */}

      {/* HARDCODED */}
      <div className="container portfolio__container">
        <m.article
          initial={{ x: -75, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{scale: 1.03, transition:{duration: 0.05}}}
          transition={{ duration: 0.3 }}
          className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="BROKEN" />
          </div>
          <h3>Food App Project</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Lonewolf2k01" className='btn' target='blank'>Github</a>
            <a href="https://lonewolf2k01.github.io/React-Food-app/" target='blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </m.article>

        <m.article
          className="portfolio__item"
          initial={{ x: 75, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
          transition={{ duration: 0.3 }}
        >
          <div className="portfolio__item-image">
            <img src={IMG2} alt="BROKEN" />
          </div>
          <h3>Movie Review Project</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Lonewolf2k01" className='btn' target='blank'>Github</a>
            <a href="https://github.com/Lonewolf2k01" target='blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </m.article>

        <m.article
          className="portfolio__item"
          initial={{ x: -75, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
          transition={{ duration: 0.5 }}
        >
          <div className="portfolio__item-image">
            <img src={IMG3} alt="BROKEN" />
          </div>
          <h3>Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Lonewolf2k01" className='btn' target='blank'>Github</a>
            <a href="https://lonewolf2k01.github.io/My_Portfolio/" target='blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </m.article>

        <m.article
          className="portfolio__item"
          initial={{ x: 75, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileHover={{ scale: 1.03, transition: { duration: 0.05 } }}
          transition={{ duration: 0.5 }}
        >
          <div className="portfolio__item-image">
            <img src={IMG4} alt="BROKEN" />
          </div>
          <h3>Chat-App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Lonewolf2k01" className='btn' target='blank'>Github</a>
            <a href="https://chat-app-u2nk.onrender.com/" target='blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </m.article>

      </div>

    </section>
  )
}

export default Portfolio