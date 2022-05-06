import React from 'react';
import './Banner.css'
import BannerImage from '../../../images/header-bg.jpg'
import { useNavigate } from 'react-router-dom';
import TypeAnimation from 'react-type-animation';
import { BsArrowRight } from 'react-icons/bs';


const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='h-[550px] bg-cover flex items-center px-5 md:px-20'
            style={{
                backgroundImage: `url(${BannerImage})`
            }}
        >
            <section className='text-center md:text-left'>
                <div className='banner-title text-5xl md:text-6xl md:space-y-6'>
                    <h1>Manage Your <div className='text-cyan-500 inline-block'>
                        <TypeAnimation
                            cursor={true}
                            sequence={['Inventories', 4000, '']}
                            wrapper="h1"
                            repeat={Infinity}
                        />
                    </div></h1>
                    <h1>Boost Your Business</h1>
                </div>
                <p className='text-sm my-2 opacity-70'>It's always important to manage your Inventories to keep your Business in track.</p>
                <button onClick={() => navigate('/inventories/manage')} className='border border-cyan-500 px-8 py-3 rounded-lg hover:bg-cyan-500 duration-300 ease-in-out mt-5 flex justify-center items-center gap-3 mx-auto md:mx-0'>
                    <p>Manage</p>
                    <BsArrowRight className='text-xl' />
                </button>
            </section>
        </div>
    );
};

export default Banner;