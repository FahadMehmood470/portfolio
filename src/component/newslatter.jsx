import React from 'react';

function Newsletter() {
    return (
        <div className='w-full bg-gray-900 text-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-2'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Want tips & tricks to optimize your flow?
                    </h1>
                    <p className='py-2'>
                        Sign up to our newsletter and stay up to date.
                    </p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input
                            className='p-3 w-full rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#00df9a]'
                            type='email'
                            placeholder='Enter your email'
                        />
                        <button className='bg-[#00df9a] w-[200px] rounded-md ml-0 sm:ml-3 font-medium my-6 sm:my-0 py-3 text-black'>
                            Notify Me
                        </button>
                    </div>
                    <p className='text-sm'>
                        We care about the protection of your data. Read our{' '}
                        <span className='text-[#00df9a] cursor-pointer hover:underline'>
                            Privacy Policy
                        </span>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
