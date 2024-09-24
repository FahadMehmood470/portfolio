import React from 'react';
import single from "../assetes/communication1.jpg";
import double from "../assetes/communication2.jpg";
import triple from "../assetes/communicstion3.png";  // Corrected 'thripple' to 'triple'

function Cards() {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white ' src={single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-4xl font-bold text-center '>$149   </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8  border-t mt-8  '>500 GB Storage</p>
                        <p className='py-2 border-b mx-8  '>1 Gurented User</p>
                        <p className='py-2 border-b mx-8  '>Send Upto 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md ml-40  font-medium my-6 mx-auto py-3 text-black max-sm:ml-16'>Start Trial</button>

                </div>



                <div className='w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white ' src={double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-4xl font-bold text-center '>$149   </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8  border-t mt-8  '>500 GB Storage</p>
                        <p className='py-2 border-b mx-8  '>1 Gurented User</p>
                        <p className='py-2 border-b mx-8  '>Send Upto 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md ml-40 font-medium my-6 mx-auto py-3 text-black max-sm:ml-16'>Start Trial</button>

                </div>



                <div className='w-full shadow-xl p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer'>
                    <img className='w-40 mx-auto mt-[-3rem] bg-white ' src={triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-4xl font-bold text-center '>$149   </p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8  border-t mt-8  '>500 GB Storage</p>
                        <p className='py-2 border-b mx-8  '>1 Gurented User</p>
                        <p className='py-2 border-b mx-8  '>Send Upto 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md ml-40 font-medium my-6 mx-auto py-3 text-black max-sm:ml-16'>Start Trial</button>

                </div>
            </div>
        </div>
    );
}

export default Cards;
