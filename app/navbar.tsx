
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
                    resize = 56;
                    break;
                case size<768: //md
                    resize = 82;
                    break;
                default:    // lg
                    resize = 112;
                    break;
            } 
            setScrolled(window.scrollY>resize)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {window.removeEventListener("scroll", handleScroll)};
    })

    const pages = [
        {page: "/home", title: "Home"},
        {page: "/aboutme", title: "About me"},
        {page: "/projects", title: "Projects"},
        {page: "/games", title: "Games"},
        {page: "/imprint", title: "Imprint"},
    ];
    const pclass = "text-xs sm:text-sm md:text-md lg:text-lg lg:p-8 md:p-6 sm:p-4 p-2"

    return (
        <nav className = {`${scrolled ? "relative" : "flex w-full h-auto"}`}>
            <div className = {`${scrolled ? "fixed absolute top-0 right-0" : "flex flex-col h-auto w-full"}`}>

                {!scrolled && (<div className = {`flex ${scrolled ? "" : "items-center "} flex w-full bg-zinc-500 dark:bg-zinc-700 lg:h-20 md:h-15 sm:h-10 h-8 p-8`}>
                    <h1 className = {`flex font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ml-6`}>Personal page</h1>
                </div>)}
                <div className = {`${scrolled ? "rounded-bl-md" : ""} flex w-full justify-center items-center lg:h-10 md:h-8 sm:h-6 h-6 dark:bg-zinc-600 bg-zinc-400`}>
                    {pages.map( (page) => (
                        <Link key = {page.title} href = {page.page} className = {pclass}>{page.title}</Link> )
                    )}
                </div>
            </div>
        </nav> 
    );
}

/*

*/