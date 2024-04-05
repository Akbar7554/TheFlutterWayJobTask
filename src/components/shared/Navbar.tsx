import Image from 'next/image';
import React from 'react';
import searchIcon from '@/assets/search-Icons.svg'
import dlModeIcon from '@/assets/dlMode-Icons.svg'
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start py-3">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        {/* for later */}
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className='flex gap-2 border-2 pl-6 pr-60 py-3 rounded-full bg-[#F0F0F0] text-[#989898]'>
                    <Image src={searchIcon} alt='Search Icon' height={20} width={20}></Image>
                    <input type="text" className="grow bg-[#F0F0F0]" placeholder="Search" />
                </div>
            </div>
            <div className="navbar-end flex gap-2">
                <Image src={dlModeIcon} alt='Search Icon' height={30} width={30}></Image>
                <Link href="/" className='px-4 py-3 border-2 rounded-2xl font-bold text-base'>Log in</Link>
                <Link href="/" className='px-4 py-3 border-2 rounded-2xl text-base font-semibold bg-black text-white'>Get Pro</Link>
            </div>
        </div>
    );
};

export default Navbar;