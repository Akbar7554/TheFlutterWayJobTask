import Image from 'next/image';
import React from 'react';
import userIcons from "@/assets/user-Icons.svg"
import downloadIcons from "@/assets/download-Icons.svg"
import temp1 from "@/assets/templates/temp1.jpg"
import temp2 from "@/assets/templates/temp2.jpg"
import temp3 from "@/assets/templates/temp3.jpg"
import temp4 from "@/assets/templates/temp4.jpg"
import temp5 from "@/assets/templates/temp5.jpg"
import temp6 from "@/assets/templates/temp6.jpg"
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

// async function getTemplates() {
//     const res = await fetch('/data/db.json')
//     const data = await res.json()
//     return data
// }

const Templates = async () => {

    // const templates = await getTemplates()
    // console.log(templates);
    return (<div>
        <div className='flex justify-between py-1 pr-7'>
            <h3 className='text-2xl font-normal'>Templates</h3>
            <h4 className='text-sm text-[#989898]'>See all</h4>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 w-full'>
            <div className="card w-96 ">
                <figure>
                    <Image src={temp1} alt='template images' width={500} height={500} className='rounded-lg m-2'></Image>
                </figure>
                <div className='flex justify-between pt-1 pb-3'>
                    <h1 className='text-base font-semibold text-[#111111]'> Foodly Restaurent App Template</h1>
                    <div className='flex gap-2'>
                        <div className='flex gap-1 items-center'>
                            <Image src={userIcons} alt='user-logo' height={20} width={20}></Image>
                            <p className='text-sm'>
                                28
                            </p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={downloadIcons} alt='user-logo' height={20} width={20}></Image>
                            <p className='text-sm'>
                                546
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 ">
                <figure>
                    <Image src={temp2} alt='template images' width={500} height={500} className='rounded-lg m-2'></Image>
                </figure>
                <div className='flex justify-between pt-1 pb-3'>
                    <h1 className='text-base font-semibold text-[#111111]'> Flutter Animation Template</h1>
                    <div className='flex gap-2'>
                        <div className='flex gap-1 items-center'>
                            <Image src={userIcons} alt='user-logo' height={20} width={20}></Image>
                            <p className='text-sm'>
                                28
                            </p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={downloadIcons} alt='user-logo' height={20} width={20}></Image>
                            <p className='text-sm'>
                                546
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 ">
                <figure>
                    <Image src={temp3} alt='template images' width={500} height={500} className='rounded-lg m-2'></Image>
                </figure>
                <div className='flex justify-between pt-1 pb-3'>
                    <h1 className='text-base font-semibold text-[#111111]'> Flutter Animation Template</h1>
                    <div className='flex gap-2'>
                        <div className='flex gap-1 items-center'>
                            <Image src={userIcons} alt='user-logo' height={20} width={20}></Image>
                            <p className='text-sm'>
                                28
                            </p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={downloadIcons} alt='user-logo' height={20} width={20}></Image>
                            <p className='text-sm'>
                                546
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 ">
                <figure>
                    <Image src={temp4} alt='template images' width={500} height={500} className='rounded-lg m-2'></Image>
                </figure>
                <div className='flex justify-between pt-1 pb-3'>
                    <h1 className='text-base font-semibold text-[#111111]'> Flutter Animation Template</h1>
                    <div className='flex gap-2'>
                        <div className='flex gap-1 items-center'>
                            <Image src={userIcons} alt='user-logo' height={20} width={20}></Image>
                            <p className='text-sm'>
                                28
                            </p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={downloadIcons} alt='user-logo' height={20} width={20}></Image>
                            <p className='text-sm'>
                                546
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 ">
                <figure>
                    <Image src={temp5} alt='template images' width={500} height={500} className='rounded-lg m-2'></Image>
                </figure>
                <div className='flex justify-between pt-1 pb-3'>
                    <h1 className='text-base font-semibold text-[#111111]'> Flutter Animation Template</h1>
                    <div className='flex gap-2'>
                        <div className='flex gap-1 items-center'>
                            <Image src={userIcons} alt='user-logo' height={20} width={20}></Image>
                            <p className='text-sm'>
                                28
                            </p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={downloadIcons} alt='user-logo' height={20} width={20}></Image>
                            <p className='text-sm'>
                                546
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card w-96 ">
                <figure>
                    <Image src={temp6} alt='template images' width={500} height={500} className='rounded-lg m-2'></Image>
                </figure>
                <div className='flex justify-between pt-1 pb-3'>
                    <h1 className='text-base font-semibold text-[#111111]'> Flutter Animation Template</h1>
                    <div className='flex gap-2'>
                        <div className='flex gap-1 items-center'>
                            <Image src={userIcons} alt='user-logo' height={20} width={20}></Image>
                            <p className='text-sm'>
                                28
                            </p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <Image src={downloadIcons} alt='user-logo' height={20} width={20}></Image>
                            <p className='text-sm'>
                                546
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* {
                templates.map((template: any) => (
                    <div key={template.id} className="card w-96 ">
                        <figure>
                            <Image src={template.image} alt='template images' width={500} height={500} className='rounded-lg m-2'></Image>
                        </figure>
                        <div className='flex justify-between pt-1 pb-3'>
                            <h1 className='text-base font-semibold text-[#111111]'>{template.cardName}</h1>
                            <div className='flex gap-2'>
                                <div className='flex gap-1 items-center'>
                                    <Image src={userIcons} alt='user-logo' height={20} width={20}></Image>
                                    <p className='text-sm'>
                                        {
                                            template.user
                                        }
                                    </p>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <Image src={downloadIcons} alt='user-logo' height={20} width={20}></Image>
                                    <p className='text-sm'>
                                        {template.download}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            } */}
        </div>
    </div>

    );
};

export default Templates;