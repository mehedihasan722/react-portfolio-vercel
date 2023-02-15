import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, illum. Asperiores laboriosam deleniti unde eius, fuga voluptas corporis. Sunt dignissimos expedita autem temporibus adipisci vel sint fuga eveniet! Reiciendis, sit.'
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, illum. Asperiores laboriosam deleniti unde eius, fuga voluptas corporis. Sunt dignissimos expedita autem temporibus adipisci vel sint fuga eveniet! Reiciendis, sit.'
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, illum. Asperiores laboriosam deleniti unde eius, fuga voluptas corporis. Sunt dignissimos expedita autem temporibus adipisci vel sint fuga eveniet! Reiciendis, sit.'
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, illum. Asperiores laboriosam deleniti unde eius, fuga voluptas corporis. Sunt dignissimos expedita autem temporibus adipisci vel sint fuga eveniet! Reiciendis, sit.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials-container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({id,avatar,name,review})=>{
            return(
              <SwiperSlide key={id} className='testimonial'>
                <div className='client-avatar'>
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client-name'>{name}</h5>
                <small className='client-review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials