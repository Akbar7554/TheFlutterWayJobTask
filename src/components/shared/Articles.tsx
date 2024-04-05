import Image from 'next/image';
import React from 'react';
import article01 from '@/assets/articles/article01.jpg'
import article02 from '@/assets/articles/article02.jpg'
import article03 from '@/assets/articles/article03.jpg'

const Articles = () => {
    return (
        <div>
            <div className='flex justify-between py-1 mt-4 pr-7'>
                <h3 className='text-2xl font-normal'>Articles</h3>
                <h4 className='text-sm text-[#989898]'>See all</h4>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 w-full'>
                {/* Article 01 */}
                <div className="card w-96 ">
                    <figure>
                        <Image src={article01} alt='template images' width={500} height={500} className='rounded-lg m-2'></Image>
                    </figure>
                    <div className='flex gap-6'>
                        <h3 className='text-sm text-[#989898]'>
                            Mar 24, 2024</h3>
                        <h3 className='text-sm text-[#989898]'>Animation</h3>
                    </div>
                    <div className='pt-1 pb-3'>
                        <h1 className='text-base font-semibold text-[#111111]'>Learn Flutter animation</h1>
                    </div>
                </div>
                {/* Article 02 */}
                <div className="card w-96 ">
                    <figure>
                        <Image src={article02} alt='template images' width={500} height={500} className='rounded-lg m-2'></Image>
                    </figure>
                    <div className='flex gap-6'>
                        <h3 className='text-sm text-[#989898]'>
                            Mar 24, 2024</h3>
                        <h3 className='text-sm text-[#989898]'>Animation</h3>
                    </div>
                    <div className='pt-1 pb-3'>
                        <h1 className='text-[15.6px] font-semibold text-[#111111]'>Onboarding Screen with Carousel & Animated Dots</h1>
                    </div>
                </div>
                {/* Article 03 */}
                <div className="card w-96 ">
                    <figure>
                        <Image src={article03} alt='template images' width={500} height={500} className='rounded-lg m-2'></Image>
                    </figure>
                    <div className='flex gap-6'>
                        <h3 className='text-sm text-[#989898]'>
                            Mar 24, 2024</h3>
                        <h3 className='text-sm text-[#989898]'>Animation</h3>
                    </div>
                    <div className='pt-1 pb-3'>
                        <h1 className='text-base font-semibold text-[#111111]'>Parallax Scroll Effect with PageView in Flutter</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;