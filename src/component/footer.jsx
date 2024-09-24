import React from 'react'
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
    return (
        <div className='w-full py-[10rem] px-4 bg-black '>
            <div className='max-w-[1240px] mx-auto  sm:grid sm: grid-cols-5 gap-8 text-white'>
                {/* First div spans 2 columns */}
                <div className='col-span-2'>
                    <h1 className='text-3xl font-bold text-[#00df9a] mt-[-20px]'>React.</h1>
                    <p className='mt-6 font-2xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos autem illo commodi minus similique. Cum et voluptas amet expedita perferendis facere, omnis voluptatum accusamus, blanditiis dolore facilis, tempora minus quaerat!</p>
                    <div className='flex mx-2 my-3 px-2 py-3 gap-12 '>
                        <ImFacebook2 size={25} />
                        <FaInstagram size={25} />
                        <FaTwitterSquare size={25} />
                        <FaWhatsapp size={25} />
                        <BiLogoGmail size={25} />

                    </div>
                </div>
                {/* Other divs span 1 column each */}
                <div className='col-span-1 sm:justify-center sm:border-t flex'>
                    <ul>
                        <li className='mt-3 font-2xl '>Solutions</li>
                        <li className='mt-3 font-2xl '>Analytics</li>
                        <li className='mt-3 font-2xl '>Marketing</li>
                        <li className='mt-3 font-2xl '>Commerce</li>
                        <li className='mt-3 font-2xl '>Insight</li>
                    </ul>
                </div>
                <div className='col-span-1 border-t flex flex-row'>
                    <ul>
                        <li className='mt-3 font-2xl '>Support</li>
                        <li className='mt-3 font-2xl '>Pricing</li>
                        <li className='mt-3 font-2xl '>Documentation</li>
                        <li className='mt-3 font-2xl '>Guides</li>
                        <li className='mt-3 font-2xl '>API Status</li>
                    </ul>
                </div>
                <div className='col-span-1 border-t flex'>
                    <ul>
                        <li className='mt-3 font-2xl '>Support</li>
                        <li className='mt-3 font-2xl '>Pricing</li>
                        <li className='mt-3 font-2xl '>Documentation</li>
                        <li className='mt-3 font-2xl '>Guides</li>
                        <li className='mt-3 font-2xl '>API Status</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;
