"use client"
import Image from 'next/image'
import Nav from './components/Nav'
import Card from './components/Card'
import Footer from './components/Footer'
import { useState, Fragment, useEffect } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import Loader from './components/Loader'
import { motion } from "framer-motion";
import Message from './components/Message'


let url = 'http://localhost:3000/api/projects'


export default function Home() {
  let [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([])

  const fetchProjects = async () => {
  const response = await fetch(url, { 
    mode: "no-cors",
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    } 
  })
  const data = await response.json()
  setData(data);
};

useEffect(() => {
  fetchProjects();
}, []);
  
  // const fetchProjects = () => {
  //   fetch(url, {mode: 'no-cors'})
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(data => {
  //     setData(data)
  //   })
  // }

  // useEffect(() => {
  //   fetchProjects()
  // }, [])

  console.log(data)


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

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <Loader />) : (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 lg:p-8">
      <div>
        <Nav />
        <Message />
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-[15px] bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="flex flex-row gap-7 my-auto p-2 lg:mx-24 text-3xl mt-[-10px] text-center font-display font-semibold text-gray-800"
                    >
                      <Image height={35} width={35} src="./Spotify_icon.svg" alt='icon' /> Jesse&apos;s fav playlist
                    </Dialog.Title>
                    <div className="mt-2">
                      <iframe className="rounded-[12px]" src="https://open.spotify.com/embed/playlist/3DIjw8eboATMgRN2RC6mz6?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>

                    <div className="mt-4">
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
        <div className='flex flex-col md:flex-col lg:flex-row-reverse'>
          <Image
            src="/jesse2.svg"
            width={150}
            height={150}
            alt='Memoji of Jesse'
            className='w-[120px] md:w-[200px] lg:w-[500px] mt-[100px] md:mt-[100px] lg:mt-[-20px] flex md:flex lg:flex'
          />
          <span className="hidden border-[8px] md:border-[8px] lg:border-[1px] border-white rounded-full lg:m-auto bg-[#030303] w-fit h-fit lg:p-1">
            <svg id="rotatingText" viewBox="0 0 200 200" className="w-[88.579px] h-[88.74px] lg:w-[123.675px] lg:h-[123.675px]">
              <defs>
                <path id="circle" d="M 100, 100 m -75, 0 a 75, 75 0 1, 0 150, 0 a 75, 75 0 1, 0 -150, 0">
                </path>
              </defs>
              <text width="400">
                <textPath alignmentBaseline="top" xlinkHref="#circle" className="text font-display font-light text-white">
                  Jesse Beke 👨🏿‍💻 - Front End Developer -
                </textPath>
              </text>
            </svg>
          </span>
          <div className='flex flex-col gap-4 m-6 md:m-8 lg:m-14 pt-[30px] mt-[-20px] md:mt-[-20px] md:pt-[60px] lg:pt-[70px]'>
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="text-[30px] md:text-[50px] lg:text-[83px] flex flex-wrap mt-4 gap-none lg:leading-[100px] w-[100%] md:w-[80%] lg:w-[100%] font-medium"
            >
              {words.map((word, index) => (
                <motion.div
                  variants={child}
                  key={index}
                  className=""
                >
                  {word}
                </motion.div>
              ))}
            </motion.div>
            {/* <h1 className='text-[55px] md:text-[80px] lg:text-[90px] leading-[70px] lg:leading-[90px]'><span className=''>Creative ✨</span> Front End Developer</h1> */}
            <p className='text-[16px] md:text-[20px] font-regular lg:text-[20px] w-[300px] md:w-[450px] lg:w-[500px] mb-4'>Hi i&apos;m Jesse Beke a Front End developer passionate about building simple to complex web experiences for clients globally.</p>
            <div className='flex flex-row gap-10 h-[60px] w-full md:w-96 lg:w-96 rounded-full'>
              <div onClick={openModal} className='w-fit p-3 cursor-pointer rounded-full  my-auto'><Image className='w-[50px] md:w-[30px] lg:w-[35px]' height={35} width={35} src="./spotify.svg" alt='icon' /></div>
              <div className='w-fit p-3 cursor-pointer rounded-full  my-auto'><a target='__blank' href='https://github.com/codejesse'><Image className='w-[50px] md:w-[30px] lg:w-[35px]' height={35} width={35} src="./github.svg" alt='icon' /></a></div>
              <div className='w-fit p-3 cursor-pointer rounded-full my-auto'><a target='__blank' href='https://jessewrites.hashnode.dev/'><Image className='w-[50px] md:w-[30px] lg:w-[35px]' height={35} width={35} src="./hashnode.svg" alt='icon' /></a></div>
              <div className='w-fit p-3 cursor-pointer rounded-full my-auto'><a target='__blank' href='https://www.linkedin.com/in/jesse-beke/'><Image className='w-[50px] md:w-[30px] lg:w-[35px]' height={35} width={35} src="./linkedin.svg" alt='icon' /></a></div>
            </div>
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
  )
}