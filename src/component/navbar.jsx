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

            {/* Desktop Menu */}
            <ul className='hidden md:flex'>
                <li className='p-4 hover:text-[#00df9a] cursor-pointer transition-all duration-200'>HOME</li>
                <li className='p-4 hover:text-[#00df9a] cursor-pointer transition-all duration-200'>COMPANY</li>
                <li className='p-4 hover:text-[#00df9a] cursor-pointer transition-all duration-200'>RESOURCES</li>
                <li className='p-4 hover:text-[#00df9a] cursor-pointer transition-all duration-200'>ABOUT</li>
                <li className='p-4 hover:text-[#00df9a] cursor-pointer transition-all duration-200'>CONTACT</li>
            </ul>

            {/* Hamburger Icon for Mobile Menu */}
            <div onClick={handleNav} className="block md:hidden cursor-pointer z-20">
                {nav ? <MdOutlineCancel size={25} /> : <FiAlignJustify size={25} />}
            </div>

            {/* Mobile Menu */}
            <div className={nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 z-10"
                : "fixed left-[-100%] top-0 h-full ease-in-out duration-500 z-10"}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>React</h1>
                <ul className='uppercase'>
                    <li className='p-4 border-b border-gray-600 hover:bg-gray-800 cursor-pointer transition-all duration-200'>HOME</li>
                    <li className='p-4 border-b border-gray-600 hover:bg-gray-800 cursor-pointer transition-all duration-200'>COMPANY</li>
                    <li className='p-4 border-b border-gray-600 hover:bg-gray-800 cursor-pointer transition-all duration-200'>RESOURCES</li>
                    <li className='p-4 border-b border-gray-600 hover:bg-gray-800 cursor-pointer transition-all duration-200'>ABOUT</li>
                    <li className='p-4 hover:bg-gray-800 cursor-pointer transition-all duration-200'>CONTACT</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
