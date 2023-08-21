import React from 'react'
import Image from 'next/image'

const Card = () => {
    return (
        <div>
            <div className='bg-[#f3f3f3] dark:none rounded-xl lg:rounded-3xl w-full h-[250px] md:h-[350px] lg:h-[450px] cursor-pointer overflow-hidden border border-[#d2d2d2]'>
                <span className='bg-white md:absolute hidden lg:absolute w-[50px] hover:w-[150px] hover:border-2 transition ease-in-out delay-150 h-[50px] rounded-full m-4 p-auto z-[999]'></span>
                <div className='h-full flex items-center justify-center p-8 cursor-pointer hover:scale-110 transition ease-in-out delay-150'>
                    <Image
                        src="/webminds-dash.png"
                        width={600}
                        height={400}
                        alt='product-png'
                        className='m-auto w-full justify-center cursor-pointer shadow-neutral-400'
                    />
                </div>
            </div>
            <h1 className='font-normal text-[16px] mt-[20px]'>Webminds</h1>
        </div>
    )
}

export default Card