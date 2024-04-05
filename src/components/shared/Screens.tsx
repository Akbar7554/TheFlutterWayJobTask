import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Line01 from '@/assets/Line 1.png'
import filterIcon from '@/assets/filter-Icons.svg'
import errowIcon from '@/assets/errow-Icons.svg'



const Screens = () => {
    return (
        <div>
            <div className='flex justify-between py-1 mt-4 pr-7'>
                <h3 className='text-2xl font-normal'>Screens</h3>
                <h4 className='text-sm text-[#989898]'>See all</h4>
            </div>
            <div className='flex gap-1 items-center'>
                <div className='flex gap-2 bg-[#F5F5F5] px-4 py-2 rounded-full'>
                    <Image src={filterIcon} height={16} width={16} alt='filterIcon'></Image>
                    <Link href="" className='text-sm'>Filters</Link>
                </div>
                <Image src={Line01} alt='line01' height={0} width={0} className='mx-4' ></Image>
                <Link href="" className='flex gap-2 px-4 py-2 rounded-full bg-[#111111] text-[#FFFFFF] text-sm'>All</Link>
                <Link href="" className='flex gap-2 border-2 px-4 py-2 rounded-full text-sm'>New</Link>
                <Link href="" className='flex gap-2 border-2 px-4 py-2 rounded-full text-sm'>Popular</Link>
                <Link href="" className='flex gap-2 border-2 px-4 py-2 rounded-full text-sm'>Onboarding</Link>
                <Link href="" className='flex gap-2 border-2 px-4 py-2 rounded-full text-sm'>Auth</Link>
                <Link href="" className='flex gap-2 border-2 px-4 py-2 rounded-full text-sm'>Shop</Link>
                <Link href="" className='flex gap-2 border-2 px-4 py-2 rounded-full text-sm'>Chat</Link>
                <Link href="" className='flex gap-2 border-2 px-2 py-2 rounded-full text-sm'>TOP Verification</Link>
                <Link href="" className='flex gap-2 border-2 px-4 py-2 rounded-full text-sm'>Dashboard</Link>
                <Link href="" className='flex gap-2 border-2 px-4 py-2 rounded-full text-sm'>Food</Link>
                <Link href="" className='flex gap-2 border-2 px-4 py-2 rounded-full text-sm'>Restaurent</Link>
                <Link href="" className='flex gap-2 border-2 px-4 py-2 rounded-full text-sm'>Fitness</Link>
                <Image src={errowIcon} height={200} width={20} alt='errowIcon'></Image>
            </div>
            
        </div>
    );
};
export default Screens;