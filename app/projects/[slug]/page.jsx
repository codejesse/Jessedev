'use client';
import React from 'react'
import Nav from '@/app/components/Nav'
import Image from 'next/image'
import Footer from '@/app/components/Footer'
import { getAllProjects, getProjectBySlug } from '@/libs/projects'
import Link from 'next/link';

export const dynamicParams = false

export async function generateStaticParams() {
  const { projects } = await getAllProjects()
  return projects.map(project => ({ slug: project.slug }))
}


export default async function page({ params }) {
  const { project } = await getProjectBySlug(params.slug)
  console.log("hello there")
  console.log(project.desc)
  return (
    <div className='h-full p-2 lg:p-8'>
      <Nav />
      <div className='p-8 lg:p-12 mt-[50px]'>
        <h1 className="text-[30px] md:text-[50px] lg:text-[83px] flex flex-wrap mt-4 gap-none lg:leading-[100px] w-[100%] md:w-[80%] lg:w-[100%] font-medium">{project.title}</h1>
        <p className='text-[25px] font-medium'>{project.type}</p>
        <p className='w-[80%] lg:w-[850px] mt-10'>{project.desc}</p>
        <div className='flex flex-row gap-5 mt-5'>
          <button className='border'><Link href={project.link} target="_blank">Visit</Link></button>
          <button className='border'>Github</button>
        </div>
        <div className='bg-[#efefef] mt-[70px] dark:none rounded-xl lg:rounded-3xl w-full h-[250px] md:h-[350px] lg:h-[650px] cursor-pointer overflow-hidden border border-[#d2d2d2]'>
          <div className='h-full flex items-center justify-center p-8 lg:p-14 cursor-pointer hover:scale-110 transition ease-in-out delay-150'>
            <Image
              src={project.img}
              width={1500}
              height={800}
              alt="name"
              className='m-auto w-full justify-center cursor-pointer shadow-neutral-400'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
