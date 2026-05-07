
"use client"
import { useState, useEffect } from "react";
import Link from "next/link"

export function NavBar(){

    const [scrolled, setScrolled] = useState(false)
    
    useEffect( () => {

    const handleScroll = () => {setScrolled(window.scrollY>200)}
    window.addEventListener("scroll", handleScroll)
    
    return window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className = {`flex ${scrolled ? "sticky" : "fixed"} w-full h-auto`}>
            <div className = "flex-col items-center w-full h-full">

            <div className = "flex w-full p-8 dark:bg-slate-600 bg-slate-400 justify-center items-center">
                <h1 className = "font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Personal page - Isaac Bregulla</h1>
            </div>
            
            <div className = "flex justify-center items-center p-4 bg-slate-500 dark:bg-slate-700 gap-x-5">
                <Link href = "/home" className = "sm:text-xs md:text-sm lg:text-md xl:text-lg">Home</Link>
                <Link href = "/aboutme" className = "sm:text-xs md:text-sm lg:text-md xl:text-lg">About me</Link>
                <Link href = "/imprint" className = "sm:text-xs md:text-sm lg:text-md xl:text-lg">Imprint</Link>
                <Link href = "/projects" className = "sm:text-xs md:text-sm lg:text-md xl:text-lg">Projects</Link>
            </div>

            </div>
        </nav> 
    );
}



/* 


{scrolled && (

)}

*/