import React from 'react';
import Image from 'next/image';
import webLogo from '@/assets/website-logo.png'
import twitter from '@/assets/social-Icons/twiter.svg'
import linkedin from '@/assets/social-Icons/linkedin.svg'
import instagram from '@/assets/social-Icons/instagram.svg'
import facebook from '@/assets/social-Icons/facebook.svg'

const Footer = () => {
    return (
        <div>
            <div className='flex justify-between pb-8'>
                <footer className="">
                    <Image src={webLogo} alt='webLogo' height={100} width={150}></Image>
                    <p className='text-sm text-[#989898] py-4'>Beautifully designed, expertly crafted Flutter components and templates, to jumpstart <br></br>
                        your projects and speed up your development process.</p>
                    <div className='flex items-center gap-3'>
                        <div className='rounded-full'><Image src={twitter} alt='twitter' height={50} width={40} className='bg-black p-2 w-full rounded-full'></Image></div>
                        <div> <Image src={linkedin} alt='linkedin' height={50} width={40} className='bg-black p-2 w-full rounded-full'></Image></div>
                        <div> <Image src={instagram} alt='instagram' height={50} width={40} className='bg-black p-2 w-full rounded-full'></Image></div>
                        <div className=''>
                            <Image src={facebook} alt='facebook' height={40} width={40} className='bg-black p-2 w-full rounded-full'></Image>
                        </div>
                    </div>
                </footer>
                <div className='flex gap-20'>
                    <div className='text-sm'>
                        <p className='font-semibold pb-2'>Explore</p>
                        <p>Blog</p>
                        <p className='py-2'>Templates</p>
                        <p>Screens</p>
                    </div>
                    <div className='text-sm'>
                        <p className='font-semibold pb-2'>Support</p>
                        <p>Pricing</p>
                        <p className='py-2'>Become a sponsor</p>
                        <p>Hire top Flutter Devs</p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='flex justify-between py-3 text-sm'>
                <p>Copyright 2024 TheFlutterLibrary. All rights reserved.</p>
                <p>Privacy Policy | Terms & Conditions | Cookie Policy</p>
            </div>
       </div>
    );
};

export default Footer;