import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { data } from 'autoprefixer'

const Card = ({ id, img, title, slug }) => {
    return (
        <div>
            <div className='bg-[#f3f3f3] dark:none rounded-xl lg:rounded-3xl w-full h-[250px] md:h-[350px] lg:h-[450px] cursor-pointer overflow-hidden border border-[#d2d2d2]'>
                <span className='hidden bg-white md:absolute lg:absolute w-[50px] hover:w-[150px] hover:border-2 transition ease-in-out delay-150 h-[50px] rounded-full m-4 p-3 z-[999]'>&rarr; visit</span>
                <div className='h-full flex items-center justify-center p-8 cursor-pointer hover:scale-110 transition ease-in-out delay-150'>
                    <Image
                        src={img}
                        width={600}
                        height={400}
                        alt={title}
                        className='m-auto w-full justify-center cursor-pointer shadow-neutral-400'
                    />
                </div>
            </div>
            <div className='flex flex-row'>
                <h1 className='font-medium text-[20px] mt-[20px]'>{title}</h1>
                <Link className='bg-white p-2 rounded-full h-[40px] w-[40px] -rotate-45' href={`/project/${slug}`}>&rarr;</Link>
            </div>
        </div>
    )
}

export default Card