import React from 'react';
import './Banner.css'
import BannerImage from '../../../images/porsche-1851246_1280.jpg'


const Banner = () => {
    return (
        <div className='h-[550px] bg-cover flex items-center px-5 md:px-20'
            style={{
                backgroundImage: `url(${BannerImage})`
            }}
        >
            <section className='text-center md:text-left'>
                <div className='banner-title'>
                    <h1>Manage Your <span className='text-amber-500'>Inventories</span></h1>
                    <h1>Boost Your Business</h1>
                </div>
                <p className='text-sm my-2'>It's always important to manage your Inventories to keep your Business in track.</p>
                <button className='border border-amber-500 px-8 py-2 rounded-lg hover:bg-amber-500 duration-300 ease-in-out mt-5'>Explore</button>
            </section>
        </div>
    );
};

export default Banner;