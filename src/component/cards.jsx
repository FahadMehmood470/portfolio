import React from 'react';
import single from "../assetes/communication1.jpg";
import double from "../assetes/communication2.jpg";
import triple from "../assetes/communicstion3.png";  // Corrected 'thripple' to 'triple'

function Cards() {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                {/* Card 1 */}
                <div className='w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white ' src={single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-4xl font-bold text-center '>$149</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 border-t mt-8 '>500 GB Storage</p>
                        <p className='py-2 border-b mx-8 '>1 Guaranteed User</p>
                        <p className='py-2 border-b mx-8 '>Send Upto 2 GB</p>
                    </div>
                    {/* Centering the button */}
                    <div className='flex justify-center'>
                        <button className='bg-[#00df9a] w-[150px] rounded-md font-medium my-6 py-3 text-black'>
                            Start Trial
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className='w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white ' src={double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
                    <p className='text-4xl font-bold text-center '>$249</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 border-t mt-8 '>1 TB Storage</p>
                        <p className='py-2 border-b mx-8 '>2 Guaranteed Users</p>
                        <p className='py-2 border-b mx-8 '>Send Upto 5 GB</p>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-[#00df9a] w-[150px] rounded-md font-medium my-6 py-3 text-black'>
                            Start Trial
                        </button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className='w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white ' src={triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
                    <p className='text-4xl font-bold text-center '>$349</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 border-t mt-8 '>2 TB Storage</p>
                        <p className='py-2 border-b mx-8 '>3 Guaranteed Users</p>
                        <p className='py-2 border-b mx-8 '>Send Upto 10 GB</p>
                    </div>
                    <div className='flex justify-center'>
                        <button className='bg-[#00df9a] w-[150px] rounded-md font-medium my-6 py-3 text-black'>
                            Start Trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
