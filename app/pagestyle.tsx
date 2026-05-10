
"use client";
import {FootBar} from "./footerbar"

export function PageStyle({children} : {children : React.ReactNode}){


    return (
        <div className = "flex h-full w-full">
            <aside className = "flex flex-1 min-h-screen bg-gradient-to-r dark:from-gray-500 dark:to-gray-800 from-gray-600 to-gray-300">

            </aside>
            <div className = "flex h-full xs:w-160 sm:w-192 md:w-220 lg:w-250 w-350 dark:bg-gray-800 bg-gray-300">
            
            <div className = "flex flex-col w-full h-full">
                <div>{children} </div>
                <FootBar/>
            </div>

            </div>

            <aside className = "flex flex-1 min-h-screen bg-gradient-to-l dark:from-gray-500 dark:to-gray-800 from-gray-600 to-gray-300">
                
            </aside>
        </div>
    );

}

