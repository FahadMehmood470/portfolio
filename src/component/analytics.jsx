import React from 'react';
import Laptop from '../assetes/Laptop.jpg';

function Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 items-center'>
                <img className='w-[400px] md:w-[500px] mx-auto my-4' src={Laptop} alt="Laptop" />
                <div className='lg:mt-20'>
                    <p className='text-[#00df9a] font-bold text-center md:text-left'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='font-bold text-center md:text-left text-3xl md:text-4xl lg:text-5xl py-2'>
                        Manage Data Analytics Centrally
                    </h1>
                    <p className='text-gray-600 text-center md:text-left py-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti totam sit, excepturi dolor exercitationem tempora nihil animi cum consequuntur quis quae iste facere commodi blanditiis ad architecto tenetur dolore eius!
                    </p>
                    <div className='flex justify-center md:justify-start'>
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
