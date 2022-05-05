import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import './TopSold.css'

import car1 from '../../../images/car/car-1.jpg'
import car2 from '../../../images/car/car-2.jpg'
import car3 from '../../../images/car/car-3.jpg'
import car4 from '../../../images/car/car-4.jpg'
import car5 from '../../../images/car/car-5.jpg'


import { EffectCards } from "swiper";

const TopSold = () => {
    return (
        <div className='py-20 px-4 md:px-20'>
            <section className='grid grid-cols-1 md:grid-cols-2 items-center  gap-5'>
                {/* image side  */}
                <article>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className='hover:scale-110 h-full w-full duration-300 ease-in-out' src={car1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='hover:scale-110 h-full w-full duration-300 ease-in-out' src={car2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='hover:scale-110 h-full w-full duration-300 ease-in-out' src={car3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='hover:scale-110 h-full w-full duration-300 ease-in-out' src={car4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='hover:scale-110 h-full w-full duration-300 ease-in-out' src={car5} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </article>
                {/* text side */}
                <article className='md:text-left'>
                    <h1 className='text-2xl md:text-5xl font-bold'>Most <span className='text-cyan-500'>Popular</span> Car</h1>
                    <p className='font-thin opacity-70 mt-5'>The top sold car is here. You can import more this car.
                        <br />
                        This car becomes most popular now a day.</p>
                    <div>
                        <div className="py-5 mx-auto">
                            <div className="flex justify-center md:justify-start gap-8">
                                <div className="md:border-r pr-8 cursor-pointer hover:text-cyan-500">
                                    <h6 className="text-2xl font-bold md:text-3xl">32.6M</h6>
                                    <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
                                        Sells
                                    </p>
                                </div>
                                <div className="cursor-pointer hover:text-cyan-500">
                                    <h6 className="text-2xl font-bold md:text-3xl">3.7K</h6>
                                    <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
                                        Users
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default TopSold;