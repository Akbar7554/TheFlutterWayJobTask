import React from 'react';
import webLogo from '@/assets/website-logo.png'
import discover from '@/assets/global-Icons.svg'
import ui from '@/assets/user-Icons.svg'
import Screens from '@/assets/screens-Icons.svg';
import articles from '@/assets/articles-Icons.svg'
import sponser from '@/assets/sponser-Icons.svg'
import hire from '@/assets/hire-Icons.svg'
import Image from "next/image";
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className=''>
            <div className='text-sm'>
                <Image src={webLogo} width={150} height={100} alt='website-logo' className='ml-10' ></Image>
                <div className='flex items-center gap-2 mt-5 mb-5 ml-0 bg-[#F0F0F0] w-full pl-10'>
                    <Image src={discover} height={20} width={20} alt='discover'></Image>
                    <Link href="" className='py-2'>Discover</Link>
                </div>
                <div className='flex items-center gap-2 mb-5 pl-10'>
                    <Image src={ui} height={20} width={20} alt='ui'></Image>
                    <Link href="" className='text-[#989898]'>UI Kits</Link></div>
                <div className='flex items-center gap-2 mb-5 pl-10'>
                    <Image src={Screens} height={20} width={20} alt='screens'></Image>
                    <Link href="" className='text-[#989898]'>Screens</Link></div>
                <div className='flex items-center gap-2 mb-5 pl-10'>
                    <Image src={articles} height={20} width={20} alt='articles'></Image>
                    <Link href="" className='text-[#989898]'>Articles</Link></div>
                <div className='flex items-center gap-2 mb-5 pl-10'>
                    <Image src={sponser} height={20} width={20} alt='sponser'></Image>
                    <Link href="" className='text-[#989898]'>Become Sponsor</Link></div>
                <div className='flex items-center gap-2 mb-5 pl-10'>
                    <Image src={hire} height={20} width={20} alt='hire'></Image>
                    <Link href="" className='text-[#989898]'>Hire Flutter Dev</Link></div>
            </div>
            <div className='text-sm pl-10'>
                <h3 className='py-3'>All Screens</h3>
                <div className='text-[#989898]'>
                    <div className='flex items-center justify-between ml-2 mr-5 py-2'>
                        <h4>Sign in</h4>
                        <p>10</p>
                    </div>
                    <div className='flex items-center justify-between ml-2 mr-5 py-2'>
                        <h4>Chat</h4>
                        <p>5</p>
                    </div>
                    <div className='flex items-center justify-between ml-2 mr-5 py-2'>
                        <h4>Onboarding</h4>
                        <p>18</p>
                    </div>
                    <div className='flex items-center justify-between ml-2 mr-5 py-2'>
                        <h4>E-commerce</h4>
                        <p>9</p>
                    </div>
                    <div className='flex items-center justify-between ml-2 mr-5 py-2'>
                        <h4>Checkout</h4>
                        <p>10</p>
                    </div>
                    <div className='flex items-center justify-between ml-2 mr-5'>
                        <h4>Error</h4>
                        <p>16</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;