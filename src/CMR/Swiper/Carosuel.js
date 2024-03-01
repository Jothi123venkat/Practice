import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { bmw, wall } from '../../Assests/JsExports';

export default function App() {

    const image  = [
        {
            name:"bmw",
            image:wall
        },{
            name:"wall",
            image: wall
        },
        {
            name:"bmw",
            image:wall
        },{
            name:"wall",
            image: wall
        },
        {
            name:"bmw",
            image:wall
        },{
            name:"wall",
            image: wall
        },
        {
            name:"bmw",
            image:wall
        },{
            name:"wall",
            image: wall
        },
    ]

  return (
    <>
      <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 2000 }}
                className="mySwiper"
            >
                {image.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image.image} alt={image.name} />
                    </SwiperSlide>
                ))}
            </Swiper>
    </>
    
  );
}
