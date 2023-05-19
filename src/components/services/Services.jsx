import React from 'react'
import './services.css'
import { TbArrowRightRhombus } from 'react-icons/tb'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2> 

      <div className="container service__container">

        {/* UI UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

          </ul>

        </article>

        {/* Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            
            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>
            
            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

          </ul>

        </article>

        {/* Content creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <TbArrowRightRhombus className='service__list-icon' />
              <p>Lorem ipsum dolor sit amet consectetur elit.</p>
            </li>

          </ul>

        </article>

        
      </div>
    </section>
  )
}

export default Services