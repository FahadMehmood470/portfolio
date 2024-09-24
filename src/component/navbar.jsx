import { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

function Navbar() {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='flex justify-between items-center h-24 mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 '>HOME</li>
                <li className='p-4 '>COMPANY</li>
                <li className='p-4'>RESOURCES</li>
                <li className='p-4'>ABOUT</li>
                <li className='p-4'>CONTACT</li>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {
                    nav ? <MdOutlineCancel size={20} /> : <FiAlignJustify size={20} />
                }
            </div>
            <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r ease-in-out duration-1000 border-r-gray-900 bg-black" : "fixed left-[-100%] "}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React</h1>
                <ul >
                    <li className='p-4 border-b border-gray-600'>HOME</li>
                    <li className='p-4 border-b border-gray-600'>COMPANY</li>
                    <li className='p-4 border-b border-gray-600'>RESOURCES</li>
                    <li className='p-4 border-b border-gray-600'>ABOUT</li>
                    <li className='p-4 border-b border-gray-600'>CONTACT</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
