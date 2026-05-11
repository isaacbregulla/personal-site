
"use client";
import { useState, useEffect } from "react";
import Link from "next/link"

export function NavBar(){
    const [scrolled, setScrolled] = useState(false)
    const [size, setSize] = useState(0)

    useEffect( () => {
        const handleResize = () => {setSize(window.innerWidth)}
        window.addEventListener("resize", handleResize)
        return () => {window.removeEventListener("resize", handleResize)}
    })

    useEffect( () => {
        const handleScroll = () => {
            let resize = 0;
            switch(true){
                case size<640: // sm
                    resize = 120;
                    break;
                case size<768: //md
                    resize = 140;
                    break;
                default:    // lg
                    resize = 160;
                    break;
            } 
            setScrolled(window.scrollY>resize)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {window.removeEventListener("scroll", handleScroll)};
    })

    return (
        <nav className = {`${scrolled ? "relative" : "flex w-full h-auto"}`}>
            <div className = {`${scrolled ? "fixed absolute top-0 right-0" : "flex flex-col h-auto w-full"}`}>

                {!scrolled && (<div className = {`flex ${scrolled ? "" : "justify-center items-center"} flex w-full bg-zinc-500 dark:bg-zinc-700 lg:h-30 md:h-25 sm:h-20 h-15`}>
                    <h1 className = {`flex font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`}>Personal page</h1>
                </div>)}

                <div className = {`${scrolled ? "rounded-bl-md" : ""} flex w-full justify-center items-center lg:h-14 md:h-10 sm:h-8 h-8 dark:bg-zinc-600 bg-zinc-400`}>
                    <Link href = "/home" className = "text-xs sm:text-sm md:text-md lg:text-lg lg:p-14 md:p-12 sm:p-10 p-8">Home</Link>
                    <Link href = "/aboutme" className = "text-xs sm:text-sm md:text-md lg:text-lg lg:p-14 md:p-12 sm:p-10 p-8">About me</Link>
                    <Link href = "/projects" className = "text-xs sm:text-sm md:text-md lg:text-lg lg:p-14 md:p-12 sm:p-10 p-8">Projects</Link>
                    <Link href = "/games" className = "text-xs sm:text-sm md:text-md lg:text-lg lg:p-14 md:p-12 sm:p-10 p-8">Games</Link>
                    <Link href = "/imprint" className = "text-xs sm:text-sm md:text-md lg:text-lg lg:p-14 md:p-12 sm:p-10 p-8">Imprint</Link>
                </div>
            </div>
        </nav> 
    );
}

/*

*/