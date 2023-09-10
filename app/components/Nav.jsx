"use client"
import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from './AcmeLogo';
import { Spiral as Hamburger } from 'hamburger-react'
import Drawer from './Drawer';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Home",
        "Work",
        "Contact",
    ];

    console.log(isMenuOpen)
    return (
        <>
            <Navbar
                className='md:my-[-8px] lg:my-[-33px] py-[20px] px-4 md:px-12 ml-[-7px] md:ml-[-10px] lg:ml-[-30px] lg:px-[70px] mt-[-20px] w-full z-[999px] fixed bg-[#d8dcdc]/30 backdrop-blur-xl'
                isBlurred
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent>
                    <NavbarBrand className='cursor-pointer'>
                        <AcmeLogo />
                        <p className="font-bold text-[20px]">JESSE</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:hidden gap-8" justify="center">
                    <NavbarItem>
                        <Link className='text-normal' color="foreground" href="#">
                            Work
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link className='text-normal' href="#" aria-current="page">
                            About
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Contact
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button className='bg-white py-3 px-8 rounded-full dark:text-[#000]' as={Link} color="primary" href="#" variant="flat">
                            Hire Me
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <Hamburger size={25} toggled={isMenuOpen} toggle={setIsMenuOpen} />
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            <Drawer />
        </>
    )
}

export default Nav;