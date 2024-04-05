import React from 'react';
import Image from 'next/image';

import asset01 from '@/assets/screens/assets01.png'
import asset02 from '@/assets/screens/assets02.jpg'
import asset03 from '@/assets/screens/assets03.jpg'
import asset04 from '@/assets/screens/assets04.jpg'
import asset05 from '@/assets/screens/assets05.jpg'
import asset06 from '@/assets/screens/assets06.jpg'
import asset07 from '@/assets/screens/assets07.jpg'
import asset08 from '@/assets/screens/assets08.jpg'
import asset09 from '@/assets/screens/assets09.jpg'
import asset10 from '@/assets/screens/assets10.jpg'

const ScreensImg = () => {
    return (
        <div className='grid grid-cols-5 gap-4 py-10'>
            <div><Image src={asset01} height={200} width={250} alt='asset01' className='border-2 rounded-[20px]'></Image></div>
            <div><Image src={asset02} height={200} width={250} alt='asset02' className='border-2 rounded-[20px]'></Image></div>
            <div><Image src={asset03} height={200} width={250} alt='asset03' className='border-2 rounded-[20px]'></Image></div>
            <div><Image src={asset04} height={200} width={250} alt='asset04' className='border-2 rounded-[20px]'></Image></div>
            <div><Image src={asset05} height={200} width={250} alt='asset05' className='border-2 rounded-[20px]'></Image></div>
            <div><Image src={asset06} height={200} width={250} alt='asset06' className='border-2 rounded-[20px]'></Image></div>
            <div><Image src={asset07} height={200} width={250} alt='asset07' className='border-2 rounded-[20px]'></Image></div>
            <div><Image src={asset08} height={200} width={250} alt='asset08' className='border-2 rounded-[20px]'></Image></div>
            <div><Image src={asset09} height={200} width={250} alt='asset09' className='border-2 rounded-[20px]'></Image></div>
            <div><Image src={asset10} height={200} width={270} alt='asset10' className='border-2 rounded-[20px]'></Image></div>
        </div>
    );
};

export default ScreensImg;