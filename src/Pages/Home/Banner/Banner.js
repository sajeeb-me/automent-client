import React from 'react';
import './Banner.css'
import BannerImage from '../../../images/header-bg.jpg'
import { useNavigate } from 'react-router-dom';


const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='h-[550px] bg-cover flex items-center px-5 md:px-20'
            style={{
                backgroundImage: `url(${BannerImage})`
            }}
        >
            <section className='text-center md:text-left'>
                <div className='banner-title'>
                    <h1>Manage Your <span className='text-cyan-500'>Inventories</span></h1>
                    <h1>Boost Your Business</h1>
                </div>
                <p className='text-sm my-2 opacity-70'>It's always important to manage your Inventories to keep your Business in track.</p>
                <button onClick={() => navigate('/inventories/manage')} className='border border-cyan-500 px-10 py-3 rounded-lg hover:bg-cyan-500 duration-300 ease-in-out mt-5'>Manage</button>
            </section>
        </div>
    );
};

export default Banner;