// "use client"

// import React, { useState } from 'react'
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { IoMdNotificationsOutline } from 'react-icons/io'
// import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
// import { FiBriefcase, FiMessageSquare  } from "react-icons/fi";
// import { PiHandCoinsLight } from "react-icons/pi";
// import { TbSettings } from "react-icons/tb";
// import { IoIosLogOut } from "react-icons/io";

// const Navbar = () => {
//     const [dropDown, setDropDown] = useState(false);
//     const [hasNotification, setHasNotification] = useState(true); // Set to true if there's a notification, false otherwise

//     const handleDropDown = () => {
//         setDropDown(!dropDown);
//     }
    
//     const pathname = usePathname();

//     return (
//     <div className="flex flex-row justify-between overflow-x-hidden py-4 px-8 border-b-[1px] border-divider">
//         <div className="bg-divider px-4 py-2 flex items-center rounded-sm">
//             <h3 className='text-primary font-semibold text-sm'>Logo</h3>
//         </div>
//         <div className="rounded-full p-1 border-[0.5px] border-neutral-gray flex items-center">
//             <ul className='flex flex-row items-center gap-16 list-none'>
//                 <li
//                     className={`text-base font-normal  px-3 py-2 ${
//                     pathname === '/jobs' || pathname === '/' ? 'bg-primary text-white rounded-full border-2 border-[#FCB4A5]' : 'text-navbar-text'
//                 }`}
//                 >
//                     <Link href="/jobs" className="flex flex-row items-center gap-2">
//                         <FiBriefcase /> Jobs
//                     </Link>
//                 </li>
//                 <li className={`text-base font-normal text-navbar-text px-4 py-2 hover:text-primary ${
//                     pathname === '/messages' ? 'bg-primary text-white rounded-full border-2 border-[#FCB4A5]' : 'text-navbar-text'
//                 }`}>
//                     <Link href="/messages" className="flex flex-row items-center gap-2">
//                         <FiMessageSquare />Messages
//                     </Link>
//                 </li>
//                 <li className={`text-base font-normal text-navbar-text px-4 py-2 hover:text-primary ${
//                     pathname === '/payments' ? 'bg-primary text-white rounded-full border-2 border-[#FCB4A5]' : 'text-navbar-text'
//                 }`}>
//                     <Link href="/payments" className="flex flex-row items-center gap-2">
//                         <PiHandCoinsLight /> Payments
//                     </Link>
//                 </li>
//             </ul>
//         </div>
//         <div className='flex flex-row items-center gap-3'>
//             <div className="relative">
//                 <IoMdNotificationsOutline size={30} />
//                 {hasNotification && <div className="absolute top-1 right-1 bg-primary w-2 h-2 rounded-full"></div>}
//             </div>
//             <img src="../user.png" alt="" className='w-8 h-8 rounded-2xl'/>
//             <div onClick={handleDropDown}>
//                 {dropDown ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
//                 {dropDown && (
//                 <div className='px-12 py-2 absolute text-text-headings top-16 right-0 bg-white border-[0.5px] border-divider rounded-md shadow-xl'>
//                     <ul className='list-none'>
//                     <li className='flex flex-row items-center gap-2 py-2 cursor-pointer hover:text-primary'><TbSettings size={18}/>Settings</li>
//                     <li className='flex flex-row items-center gap-2 py-2 cursor-pointer hover:text-primary'><IoIosLogOut size={18}/>Logout</li>
//                     </ul>
//                 </div>
//                 )}
//             </div>
            
//         </div>
//     </div>
//   )
// }

// export default Navbar

"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { FiMenu, FiBriefcase, FiMessageSquare  } from "react-icons/fi";
import { PiHandCoinsLight } from "react-icons/pi";
import { TbSettings } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);
    const [hasNotification, setHasNotification] = useState(true); // Set to true if there's a notification, false otherwise
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleDropDown = () => {
        setDropDown(!dropDown);
    }

    const handleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }
    
    const pathname = usePathname();

    return (
    <div className="flex flex-col lg:flex-row justify-between overflow-x-hidden py-6 px-8 border-b-[1px] border-divider">
        <div className="flex items-center justify-between lg:justify-start">
            <h3 className='text-primary font-semibold text-sm bg-divider px-4 py-4 rounded-sm'>Logo</h3>
            <div className="lg:hidden hover:cursor-pointer" onClick={handleMobileMenu}>
                <FiMenu size={24} />
            </div>
        </div>
        <div className={`lg:flex ${mobileMenuOpen ? 'flex' : 'hidden'} mt-4 lg:mt-0 rounded-sm md:rounded-full p-3 md:p-1 border-[0.5px] border-neutral-gray items-center`}>
            <ul className='flex flex-col lg:flex-row items-center gap-4 lg:gap-16 list-none'>
                <li
                    className={`text-base font-normal px-3 py-2.5 ${
                    pathname === '/jobs' || pathname === '/' ? 'bg-primary text-white md:rounded-full border-2 border-[#FCB4A5]' : 'text-navbar-text'
                }`}
                >
                    <Link href="/jobs" className="flex flex-row items-center gap-2">
                        <FiBriefcase /> Jobs
                    </Link>
                </li>
                <li className={`text-base font-normal text-navbar-text px-4 py-2 hover:text-primary ${
                    pathname === '/messages' ? 'bg-primary text-white rounded-full border-2 border-[#FCB4A5]' : 'text-navbar-text'
                }`}>
                    <Link href="/messages" className="flex flex-row items-center gap-2">
                        <FiMessageSquare /> Messages
                    </Link>
                </li>
                <li className={`text-base font-normal text-navbar-text px-4 py-2 hover:text-primary ${
                    pathname === '/payments' ? 'bg-primary text-white rounded-full border-2 border-[#FCB4A5]' : 'text-navbar-text'
                }`}>
                    <Link href="/payments" className="flex flex-row items-center gap-2">
                        <PiHandCoinsLight /> Payments
                    </Link>
                </li>
            </ul>
        </div>
        <div className={`hidden md:flex items-center mt-4 lg:mt-0 gap-3`}>
            <div className="relative">
                <IoMdNotificationsOutline size={30} />
                {hasNotification && <div className="absolute top-1 right-1 bg-primary w-2 h-2 rounded-full"></div>}
            </div>
            <img src="../user.png" alt="" className='w-8 h-8 rounded-2xl'/>
            <div onClick={handleDropDown} className="relative">
                {dropDown ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
                {dropDown && (
                <div className='lg:absolute top-12 right-0 lg:right-auto bg-white border-[0.5px] border-divider rounded-md shadow-xl'>
                    <ul className='list-none'>
                        <li className='flex items-center gap-2 py-2 cursor-pointer hover:text-primary px-4'>
                            <TbSettings size={18}/> Settings
                        </li>
                        <li className='flex items-center gap-2 py-2 cursor-pointer hover:text-primary px-4'>
                            <IoIosLogOut size={18}/> Logout
                        </li>
                    </ul>
                </div>
                )}
            </div>
            
        </div>
    </div>
  )
}

export default Navbar;


