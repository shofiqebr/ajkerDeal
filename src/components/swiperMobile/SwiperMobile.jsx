// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode } from 'swiper/modules';


import mobileImg from '../../assets/mobile2.avif'

const SwiperMobile = () => {
    return (
        <div className='mt-3 md:hidden'>

<Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper px-4 py-3"
      >
        <SwiperSlide>
            <div className='flex justify-center items-center flex-col'>
            <div className='border-2 w-12 bg-white rounded-full flex justify-center items-center'>
            <img className='w-10 rounded-full' src={mobileImg} alt="" />
            </div>
            <div className='text-xs'>gadget</div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center flex-col'>
            <div className='border-2 w-12 bg-white rounded-full flex justify-center items-center'>
            <img className='w-10 rounded-full' src={mobileImg} alt="" />
            </div>
            <div className='text-xs'>gadget</div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center flex-col'>
            <div className='border-2 w-12 bg-white rounded-full flex justify-center items-center'>
            <img className='w-10 rounded-full' src={mobileImg} alt="" />
            </div>
            <div className='text-xs'>gadget</div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center flex-col'>
            <div className='border-2 w-12 bg-white rounded-full flex justify-center items-center'>
            <img className='w-10 rounded-full' src={mobileImg} alt="" />
            </div>
            <div className='text-xs'>gadget</div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center flex-col'>
            <div className='border-2 w-12 bg-white rounded-full flex justify-center items-center'>
            <img className='w-10 rounded-full' src={mobileImg} alt="" />
            </div>
            <div className='text-xs'>gadget</div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center flex-col'>
            <div className='border-2 w-12 bg-white rounded-full flex justify-center items-center'>
            <img className='w-10 rounded-full' src={mobileImg} alt="" />
            </div>
            <div className='text-xs'>gadget</div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center flex-col'>
            <div className='border-2 w-12 bg-white rounded-full flex justify-center items-center'>
            <img className='w-10 rounded-full' src={mobileImg} alt="" />
            </div>
            <div className='text-xs'>gadget</div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center flex-col'>
            <div className='border-2 w-12 bg-white rounded-full flex justify-center items-center'>
            <img className='w-10 rounded-full' src={mobileImg} alt="" />
            </div>
            <div className='text-xs'>gadget</div>
            </div>
           
        </SwiperSlide>
        <SwiperSlide>
            <div className='flex justify-center items-center flex-col'>
            <div className='border-2 w-12 bg-white rounded-full flex justify-center items-center'>
            <img className='w-10 rounded-full' src={mobileImg} alt="" />
            </div>
            <div className='text-xs'>gadget</div>
            </div>
           
        </SwiperSlide>
       
      </Swiper>
            
        </div>
    );
};

export default SwiperMobile;