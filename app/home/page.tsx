"use client";
import { PageStyle } from "../pagestyle"


export default function Homepage() {

  const logger = [
    {date: "13.05.2026", header: "Setting up the logger of my personal webpage", text:"Update to homepage, setting up the logger for my personal page, thinking about potential future projects.\nUsing a colour gradient for each block."},
  ];

  return (
    <PageStyle>
      <div className = "flex w-full h-2000 dark:bg-gray-800 bg-gray-300 mt-8 flex-col">
          <h2 className = "lg:p-10 md:p-8 sm:p-4"><strong className = "text-md sm:text-lg md:text-xl lg:text-2xl">Logbook - noting my daily progress:</strong></h2>
          <div className = "flex justify-center items-center">
            <div className = "flex-col flex w-120 sm:w-144 md:w-165 lg:w-188 w-263 lg:h-100 md:h-80 xs:h-70 h-60 bg-gray-500 overflow-y-scroll border p-5">
              {logger.map( (logblock) => (
                <div className = "text-xs sm:text-xs md:text-sm lg:text-md" key = {logblock.header}> 
                  <p className = "text-sm sm:text-md md:text-lg lg:text-xl"><strong>{logblock.date+ " - " +logblock.header}</strong></p>
                  <p className = "">{logblock.text}</p>
                </div>
              ))}
              </div>
          </div>
          
          
      </div> 
    </PageStyle>
  );
}
