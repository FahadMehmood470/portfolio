import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
    return (
        <div className='w-full py-16 px-4 bg-black'>
            <div className='max-w-[1240px] mx-auto grid sm:grid-cols-2 md:grid-cols-5 gap-8 text-white'>
                {/* First div spans 2 columns */}
                <div className='md:col-span-2'>
                    <h1 className='text-3xl font-bold text-[#00df9a] mt-[-20px]'>React.</h1>
                    <p className='mt-6 text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos autem illo commodi minus similique. Cum et voluptas amet expedita perferendis facere, omnis voluptatum accusamus, blanditiis dolore facilis, tempora minus quaerat!
                    </p>
                    <div className='flex gap-6 mt-4'>
                        <ImFacebook2 size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                        <FaWhatsapp size={30} />
                        <BiLogoGmail size={30} />
                    </div>
                </div>

                {/* Other divs with lists */}
                <div className='md:col-span-1'>
                    <ul className='space-y-3'>
                        <li className='font-semibold'>Solutions</li>
                        <li className='font-semibold'>Analytics</li>
                        <li className='font-semibold'>Marketing</li>
                        <li className='font-semibold'>Commerce</li>
                        <li className='font-semibold'>Insight</li>
                    </ul>
                </div>

                <div className='md:col-span-1'>
                    <ul className='space-y-3'>
                        <li className='font-semibold'>Support</li>
                        <li className='font-semibold'>Pricing</li>
                        <li className='font-semibold'>Documentation</li>
                        <li className='font-semibold'>Guides</li>
                        <li className='font-semibold'>API Status</li>
                    </ul>
                </div>

                <div className='md:col-span-1'>
                    <ul className='space-y-3'>
                        <li className='font-semibold'>Support</li>
                        <li className='font-semibold'>Pricing</li>
                        <li className='font-semibold'>Documentation</li>
                        <li className='font-semibold'>Guides</li>
                        <li className='font-semibold'>API Status</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
