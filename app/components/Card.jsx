import React from 'react'
import Image from 'next/image'

const Card = () => {
    return (
        <div>
            <div className='bg-[#f3f3f3] dark:bg-purple-200 rounded-3xl w-full md:h-[350px] lg:h-[450px] cursor-pointer overflow-hidden border border-[#d2d2d2]'>
                <span className='bg-white hidden w-[50px] h-[50px] absolute rounded-full m-4 p-auto z-[999]'></span>
                <div className='h-full flex items-center justify-center p-8 cursor-pointer hover:scale-110 transition ease-in-out delay-150'>
                    <Image
                        src="/test.png"
                        width={300}
                        height={400}
                        alt='test-png'
                        className='m-auto w-full justify-center cursor-pointer shadow-neutral-400'
                    />
                </div>
            </div>
            <h1 className='font-normal text-[16px] mt-[20px]'>Project title</h1>
        </div>
    )
}

export default Card