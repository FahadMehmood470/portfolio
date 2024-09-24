import React from 'react'

function Newslatter() {
    return (
        <div className='w-full  text-white py-16 px-4'>
            <div className='max-w-[1240px] grid lg:grid-cols-3 ' >
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips&Tricks to optimize your flow</h1>
                    <p>Sign up to our newslatter and stay up to date</p>
                </div>
                <div className='my-4'>
                    <div className=' flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 w-full rounded-md text-black' type="email" placeholder='Enter Email' />
                        <button className='bg-[#00df9a] w-[200px] rounded-md ml-3 font-medium my-6 mx-auto py-3 text-black'>Notify Me </button>
                    </div>
                    <p>We Care About About The Protction Of YOur Data Read Our <span className='text-[#00df9a]'>privacy Policy</span></p>
                </div>
            </div>
        </div>
    )
}

export default Newslatter