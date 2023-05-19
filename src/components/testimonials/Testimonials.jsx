import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    id: 1,
    image: AVTR1,
    title: 'Avatar One',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure hic, ab magnam dolorum architecto ea quisquam amet facere id? Vel, id possimus! Inventore dolorum illo tenetur delectus laudantium eos perspiciatis!'
  },
  {
    id: 2,
    image: AVTR2,
    title: 'Avatar Two',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure hic, ab magnam dolorum architecto ea quisquam amet facere id? Vel, id possimus! Inventore dolorum illo tenetur delectus laudantium eos perspiciatis!'
  },
  {
    id: 3,
    image: AVTR3,
    title: 'Avatar Three',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure hic, ab magnam dolorum architecto ea quisquam amet facere id? Vel, id possimus! Inventore dolorum illo tenetur delectus laudantium eos perspiciatis!'
  },
  {
    id: 4,
    image: AVTR4,
    title: 'Avatar Four',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure hic, ab magnam dolorum architecto ea quisquam amet facere id? Vel, id possimus! Inventore dolorum illo tenetur delectus laudantium eos perspiciatis!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {
          data.map(({ id, image, title, review }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt={ title } />
                </div>
                <h5 className="client__name">
                  {title}
                </h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials