import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { bmw, wall } from '../../Assests/JsExports';
import { Container } from '@mui/material';

export default function App() {

    const image  = [
        {
            name:"bmw",
            image:'/accident 3.jpeg'
        },    
        {
            name:"bmw",
            image:'/accident 3.jpeg'
        },   
        {
            name:"bmw",
            image:'/accident 3.jpeg'
        },   
        {
            name:"bmw",
            image:'/accident 3.jpeg'
        },   
        {
            name:"bmw",
            image:'/accident 3.jpeg'
        },   
        {
            name:"bmw",
            image:'/accident 3.jpeg'
        },   
        {
            name:"bmw",
            image:'/accident 3.jpeg'
        },   
    ]

  return (
    <Container>
      <Swiper
                slidesPerView={3}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 2000 }}
                className="mySwiper"
            >
                {image.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image.image} alt={image.name} style={{width:'100%'}}/>
                    </SwiperSlide>
                ))}
            </Swiper>
    </Container>
    
  );
}
