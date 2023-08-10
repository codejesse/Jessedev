import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Drawer({ children, isMenuOpen, setIsMenuOpen }) {
    
    return (
        <main
            className={
                "fixed md:hidden  overflow-hidden h-screen z-[999] bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isMenuOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")
            }
        >
            <section
                className={
                    "w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
                    (isMenuOpen ? " translate-x-0 " : " translate-x-full ")
                }
            >
                <article className="relative w-screen max-w-lg pb-10 px-5 flex flex-col space-y-6 overflow-y-scroll h-full">
                    <div className="flex flex-row justify-between pt-5 font-bold text-lg">
                        <header className=""></header>
                        <XMarkIcon className="w-[30px] h-[30px] cursor-pointer" onClick={() => setIsMenuOpen(false)} />
                    </div>

                    {children}
                </article>
            </section>
        </main>
    );
}