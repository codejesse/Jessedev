// "use client"
import Image from 'next/image'
import Nav from './components/Nav'
import Card from './components/Card'
import Footer from './components/Footer'
// import { useState, useEffect } from 'react'
// import Loader from './components/Loader'
// import { motion } from "framer-motion";
// import Message from './components/Message'
// import Links from './components/Links'
import { getAllProjects } from '@/libs/projects'


// let url = 'http://localhost:3000/api/projects'


export default async function Home() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([])
  const data = await getAllProjects()

  // const fetchProjects = async () => {
  //   const response = await fetch(url, {
  //     mode: "no-cors",
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     }
  //   })
  //   const data = await response.json()
  //   setData(data);
  // };

  // useEffect(() => {
  //   fetchProjects();
  // }, []);

  // console.log(data)


  let text = "Creative ✨ Front-End Developer"

  const words = text.split(" ")


  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.30 * i },
    }),
  };

  // Variants for each word.
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-2 lg:p-8">
        <div>
          <Nav />
          {/* <Message /> */}
          <div className='flex flex-col md:flex-col lg:flex-row-reverse'>
            <Image
              src="/jesse.png"
              width={150}
              height={150}
              alt='Memoji of Jesse'
              className='w-[120px] md:w-[200px] lg:w-[350px] mt-[100px] md:mt-[100px] lg:mt-[-20px] flex md:flex lg:flex'
            />
            <div className='flex flex-col gap-4 m-6 md:m-8 lg:m-14 pt-[30px] mt-[-20px] md:mt-[-20px] md:pt-[60px] lg:pt-[70px]'>
              <p className='text-[16px] md:text-[20px] font-regular lg:text-[20px] w-[300px] md:w-[450px] lg:w-[500px] mb-4'>Hi i&apos;m Jesse Beke a Front End developer passionate about building simple to complex web experiences for clients globally.</p>
              {/* <Links /> */}
            </div>
          </div>
          <div className='flex flex-row justify-end mr-[60px] md:mr-[80px] lg:mr-[120px]'>
            <div className='flex flex-col'>
              <p className='font-medium text-[20px] text-right lg:mt-[-60px]'>heyo@jesse.com</p>
              <p className='font-light text-right text-[#505050]'>Scroll to explore</p>
            </div>
          </div>
          <div className='m-6 lg:m-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 pt-8'>
            {data?.projects?.map((item) => (
              <div key={item.id}>
                <Card id={item.id} title={item.title} img={item.img} slug={item.slug} />
              </div>
            ))}
            {/* <h1 className='text-[30px] bg-white mx-auto px-4'>🦍 Working on a bug.....</h1> */}
          </div>
          <div className='m-4 md:m-8 lg:m-14'>
            <div className='flex pt-[40px]'>
              <h1 className='font-medium md:text-[20px] lg:text-[30px]'>I strive to bring <span className='bg-[#2d2d2d] text-white p-3 px-4'>innovation ✨</span> and creativity 💡 to every project i work on. I work closely with clients to understand their needs and deliver outstanding solutions. I am dedicated to creating amazing products <span className='bg-[#2d2d2d] text-white p-3 px-4'>let&apos;s talk.</span></h1>
            </div>
          </div>
          {/* <Prefooter /> */}
          <div className='m-4 lg:m-10'>
            <Footer />
          </div>
        </div>
        <button title="Contact Jesse" className="fixed z-90 bottom-10 right-8 bg-[#252525] w-[150px] h-[60px] rounded-full drop-shadow-lg flex flex-row justify-center items-center text-white text-xl hover:bg-[#6f32f1]hover:drop-shadow-xl duration-300">👋🏾 Say Hello</button>
      </main>
    </>
  )
}