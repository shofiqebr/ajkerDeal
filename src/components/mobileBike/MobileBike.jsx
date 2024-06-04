import { FaBangladeshiTakaSign, FaChevronRight } from "react-icons/fa6";
import bikeImg from '../../assets/bike.webp'
// import mobileImg from '../../assets/mobile2.avif'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';



// import './styles.css';

// import required modules
import {Scrollbar } from 'swiper/modules';

const MobileBike = () => {
    return (
        <div className="md:hidden block">
            <div className="flex justify-between items-center bg-[#fd7e53] px-4 py-1">
                <p className="text-white font-bold">Motor Bike</p>
                <p className="flex justify-center items-center text-white font-bold"> More <FaChevronRight/></p>
                
              
            </div>
             
             
             
             
              {/* card start here */}





                
              <div className="bg-[#fdecb5] py-1">

                
              <div className='md:hidden block pb-3 '>
        <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={4}
        grabCursor={true}
        
        breakpoints={{
          400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
      
        
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='flex justify-center items-center flex-col'>
        <div className="bg-white w-20 border-[#E0CF97] border-2  rounded my-3">
                <div className="flex justify-end ">

                {/* <section className="bg-[#E0CF97] w-12 h-4 flex
                justify-center items-center  text-sm rounded-bl-lg text-center font-bold z-10 ">Used</section> */}
                </div>
                <img className="p-1 w-20 mb-1" src={bikeImg} alt="" />
                <p className="pl-1 text-[10px] text-center text-blue-700 font-bold">ATV Quad</p>
                <p className="pl-3 text-[10px] flex justify-start items-center text-red-500 font-bold pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex justify-center items-center flex-col'>
        <div className="bg-white w-20 border-[#E0CF97] border-2  rounded my-3">
                <div className="flex justify-end ">

                {/* <section className="bg-[#E0CF97] w-12 h-4 flex
                justify-center items-center  text-sm rounded-bl-lg text-center font-bold z-10 ">Used</section> */}
                </div>
                <img className="p-1 w-20 mb-1" src={bikeImg} alt="" />
                <p className="pl-1 text-[10px] text-center text-blue-700 font-bold">ATV Quad</p>
                <p className="pl-3 text-[10px] flex justify-start items-center text-red-500 font-bold pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex justify-center items-center flex-col'>
        <div className="bg-white w-20 border-[#E0CF97] border-2  rounded my-3">
                <div className="flex justify-end ">

                {/* <section className="bg-[#E0CF97] w-12 h-4 flex
                justify-center items-center  text-sm rounded-bl-lg text-center font-bold z-10 ">Used</section> */}
                </div>
                <img className="p-1 w-20 mb-1" src={bikeImg} alt="" />
                <p className="pl-1 text-[10px] text-center text-blue-700 font-bold">ATV Quad</p>
                <p className="pl-3 text-[10px] flex justify-start items-center text-red-500 font-bold pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex justify-center items-center flex-col'>
        <div className="bg-white w-20 border-[#E0CF97] border-2  rounded my-3">
                <div className="flex justify-end ">

                {/* <section className="bg-[#E0CF97] w-12 h-4 flex
                justify-center items-center  text-sm rounded-bl-lg text-center font-bold z-10 ">Used</section> */}
                </div>
                <img className="p-1 w-20 mb-1" src={bikeImg} alt="" />
                <p className="pl-1 text-[10px] text-center text-blue-700 font-bold">ATV Quad</p>
                <p className="pl-3 text-[10px] flex justify-start items-center text-red-500 font-bold pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex justify-center items-center flex-col'>
        <div className="bg-white w-20 border-[#E0CF97] border-2  rounded my-3">
                <div className="flex justify-end ">

                {/* <section className="bg-[#E0CF97] w-12 h-4 flex
                justify-center items-center  text-sm rounded-bl-lg text-center font-bold z-10 ">Used</section> */}
                </div>
                <img className="p-1 w-20 mb-1" src={bikeImg} alt="" />
                <p className="pl-1 text-[10px] text-center text-blue-700 font-bold">ATV Quad</p>
                <p className="pl-3 text-[10px] flex justify-start items-center text-red-500 font-bold pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex justify-center items-center flex-col'>
        <div className="bg-white w-20 border-[#E0CF97] border-2  rounded my-3">
                <div className="flex justify-end ">

                {/* <section className="bg-[#E0CF97] w-12 h-4 flex
                justify-center items-center  text-sm rounded-bl-lg text-center font-bold z-10 ">Used</section> */}
                </div>
                <img className="p-1 w-20 mb-1" src={bikeImg} alt="" />
                <p className="pl-1 text-[10px] text-center text-blue-700 font-bold">ATV Quad</p>
                <p className="pl-3 text-[10px] flex justify-start items-center text-red-500 font-bold pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex justify-center items-center flex-col'>
        <div className="bg-white w-20 border-[#E0CF97] border-2  rounded my-3">
                <div className="flex justify-end ">

                {/* <section className="bg-[#E0CF97] w-12 h-4 flex
                justify-center items-center  text-sm rounded-bl-lg text-center font-bold z-10 ">Used</section> */}
                </div>
                <img className="p-1 w-20 mb-1" src={bikeImg} alt="" />
                <p className="pl-1 text-[10px] text-center text-blue-700 font-bold">ATV Quad</p>
                <p className="pl-3 text-[10px] flex justify-start items-center text-red-500 font-bold pb-2"><FaBangladeshiTakaSign /> 1,80,000 /-</p>
            </div>
            </div>
        </SwiperSlide>
        
      
        
      </Swiper>

             </div>
             <hr className="border-[#FD7E53] pb-2" />








                
                </div>
                {/* card end here */}
        </div>
    );
};

export default MobileBike;