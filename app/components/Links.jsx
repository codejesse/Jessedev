import React, { useState, Fragment } from 'react'
import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'


const Links = () => {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div>
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
            <div className='flex flex-row gap-10 h-[60px] w-full md:w-96 lg:w-96 rounded-full'>
                <div onClick={openModal} className='w-fit p-3 cursor-pointer rounded-full  my-auto'><Image className='w-[50px] md:w-[30px] lg:w-[35px]' height={35} width={35} src="./spotify.svg" alt='icon' /></div>
                <div className='w-fit p-3 cursor-pointer rounded-full  my-auto'><a target='__blank' href='https://github.com/codejesse'><Image className='w-[50px] md:w-[30px] lg:w-[35px]' height={35} width={35} src="./github.svg" alt='icon' /></a></div>
                <div className='w-fit p-3 cursor-pointer rounded-full my-auto'><a target='__blank' href='https://jessewrites.hashnode.dev/'><Image className='w-[50px] md:w-[30px] lg:w-[35px]' height={35} width={35} src="./hashnode.svg" alt='icon' /></a></div>
                <div className='w-fit p-3 cursor-pointer rounded-full my-auto'><a target='__blank' href='https://www.linkedin.com/in/jesse-beke/'><Image className='w-[50px] md:w-[30px] lg:w-[35px]' height={35} width={35} src="./linkedin.svg" alt='icon' /></a></div>
            </div>
        </div>
    )
}

export default Links