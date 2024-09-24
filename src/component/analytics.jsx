import React from 'react'
import Laptop from "../assetes/Laptop.jpg"

function Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4 '>
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='justify-center lg:mt-20'>
                    <p className='text-[#00df9a] font-bold text-center'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='font-bold text-center text-3xl py-2 '>Manage Data Analytics Centreally</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti totam sit, excepturi dolor exercitationem tempora nihil animi cum consequuntur quis quae iste facere commodi blanditiis ad architecto tenetur dolore eius!</p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black justify-center flex '>Get Started</button>
                </div>

            </div>
        </div>
    )
}

export default Analytics