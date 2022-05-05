import React from 'react';

const PageLoading = () => {
    return (
        <div className='h-[100vh]'>
            <section className='mt-20 sticky-top top-28'>
                <div className="flex items-center justify-center space-x-2">
                    <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0 text-cyan-500" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PageLoading;