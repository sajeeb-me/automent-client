import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotFoundImage from '../../images/not-found-image.gif'

const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='h-[89vh] bg-cover flex items-center justify-center px-5 md:px-20'
            style={{
                backgroundImage: `url(${NotFoundImage})`
            }}
        >
            <button onClick={() => navigate('/')} className='border py-3 px-10 rounded-lg text-xl  ml-0 md:ml-[450px] hover:bg-white hover:text-black duration-300 ease-in-out'>Go Back</button>
        </div>
    );
};

export default PageNotFound;