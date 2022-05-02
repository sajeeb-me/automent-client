import React from 'react';

const Statistic = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="md:border-r cursor-pointer hover:text-cyan-500">
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">144M</h6>
                        <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
                            Sells
                        </p>
                    </div>
                    <div className="md:border-r cursor-pointer hover:text-cyan-500">
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">11.7K</h6>
                        <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
                            Users
                        </p>
                    </div>
                    <div className="md:border-r cursor-pointer hover:text-cyan-500">
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">48.5K</h6>
                        <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
                            Stocks
                        </p>
                    </div>
                    <div className=' cursor-pointer hover:text-cyan-500'>
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">34.5K</h6>
                        <p className="text-sm font-medium tracking-widest  uppercase lg:text-base">
                            This year
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;