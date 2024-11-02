"use client";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./ui/navigation-menu";



const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <section>
      
      <nav className="fixed top-0 w-full z-20 bg-background bg-opacity-90 bg-clip-padding blur-backdrop-filter">
        <div className="flex flex-wrap justify-between items-center py-5 px-[135px] border-b-2 border-gray">
            <div className="flex flex-row items-center gap-10">
            <Link href="/">
            <img src="/images/Logo.png" alt="Logo" />
          </Link>
          <ul className="hidden md:flex gap-7 ">
            <Link href="#home" className="  hover:text-secondary">
              <li> Home </li>
            </Link>

            <Link href="#about" className="  hover:text-secondary">
              <li>About </li>
            </Link>

            <Link href="#services" className="  hover:text-secondary">
            <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/personal-branding">
                    Personal Branding
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/copywriting">
                    Copywriting
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/seo">SEO</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
            </Link>

            <Link href="#portfolio" className="  hover:text-secondary">
              <li> Portfolio</li>
            </Link>
          </ul>
            </div>
            <div className="hidden md:flex">
            <Button text="Get a quote" color="text-secondary" buttoncolor="bg-background" underline="underline  decoration-2 underline-offset-4"/>
            <Button text="Contact" color="text-white" buttoncolor="bg-secondary"/>
            </div>
        
          {/* MOBILE... */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center p-2 border-[1.5px] rounded-full border-secondary text-secondary "
              >
                <AiOutlineMenu className="h-4 w-4" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center p-2 border-[1.5px] rounded-full border-secondary text-secondary"
              >
                <AiOutlineClose className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div>
          {navbarOpen ? (
           
              <ul className="flex flex-col py-20 items-center font-semibold h-screen">
              <Link href="#about">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-title  hover:text-secondary"
                >
                  Home
                </li>
              </Link>

              <Link href="#about">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-title  hover:text-secondary"
                >
                  About
                </li>
              </Link>

              <Link href="#services">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-title  hover:text-secondary"
                >
                  Services
                </li>
              </Link>

              <Link href="#portfolio">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pb-2 text-title  hover:text-secondary"
                >
                  Portfolio
                </li>
              </Link>

              

              <Link href="#contact">
                <li
                  onClick={() => setNavbarOpen(false)}
                  className="pt-4"
                >
                  <Button text="CONTACT" color="text-secondary" buttoncolor="bg-background"/>
                </li>
              </Link>

              
            </ul>
          
            
          ) : null}
        </div>
        
      </nav>
    
    </section>
  );
};

export default Navbar;