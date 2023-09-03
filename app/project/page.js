import React from 'react'
import Nav from '../components/Nav'
import Image from 'next/image'
import venda from "../assets/Fleep.png"

const ProjectDetail = () => {
  return (
    <div className='h-screen p-2 lg:p-8'>
        <Nav />
        <div className='p-8 lg:p-12 mt-[50px]'>
            <h1 className="text-[30px] md:text-[50px] lg:text-[83px] flex flex-wrap mt-4 gap-none lg:leading-[100px] w-[100%] md:w-[80%] lg:w-[100%] font-medium">Project name</h1>
            <p className='text-[25px] font-medium'>Travel Smart & Safely</p>
            <p className='w-[80%] lg:w-[650px] mt-10'>Ziggo, the smart suitcase app that lets you control your luggage like a smart home! With Ziggo, you can easily lock and unlock your suitcase, check the battery level, and even receive notifications if your suitcase strays too far from you. </p>
            <div className='bg-[#efefef] mt-[70px] dark:none rounded-xl lg:rounded-3xl w-full h-[250px] md:h-[350px] lg:h-[650px] cursor-pointer overflow-hidden border border-[#d2d2d2]'>
                <div className='h-full flex items-center justify-center p-14 cursor-pointer hover:scale-110 transition ease-in-out delay-150'>
                    <Image
                        src={venda}
                        width={1500}
                        height={800}
                        alt="name"
                        className='m-auto w-full justify-center cursor-pointer shadow-neutral-400'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetail